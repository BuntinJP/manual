import { afterEach, expect, test } from 'bun:test';
import { rejects } from 'node:assert/strict';
import { mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ingest, json, loadIR, sha256 } from '../../tools/manual/core';
import {
  completeQueueTask,
  enqueueManual,
  listQueue,
  nextQueueTask,
  recoverQueueTask,
  releaseQueueTask,
  saveQueueBatch,
  verifyQueue,
} from '../../tools/manual/queue';
import type { Translation } from '../../tools/manual/schema';

const roots: string[] = [];
afterEach(async () => {
  for (const root of roots.splice(0)) await rm(root, { recursive: true, force: true });
});
const project = async () => {
  const root = await mkdtemp(join(tmpdir(), 'manual-queue-test-'));
  roots.push(root);
  return root;
};
async function source(root: string, name = 'demo') {
  const file = join(root, `${name}.html`);
  const html = `<main><h1>NAME</h1><p><code>${name}</code> displays files.</p><h2>DESCRIPTION</h2><p>Do not delete files when <code>-n</code> is set. Wait at most 5 seconds.</p></main>`;
  await writeFile(file, html);
  const leaf = await ingest(root, {
    identity: {
      provider: 'gnu',
      product: 'tools',
      version: '1.0',
      variant: 'default',
      section: '1',
      name,
    },
    format: 'html',
    file,
    origin: `https://example.org/${name}.html`,
  });
  return { leaf, html };
}
async function task(root: string, worker = 'test-worker', limit = 20, id?: string) {
  const item = await nextQueueTask(root, worker, limit, id);
  if (!item) throw new Error('Expected a queued task.');
  return item;
}
type Task = Awaited<ReturnType<typeof task>>;
function response(item: Task, count = item.request.segments.length): Translation {
  return {
    schemaVersion: 1,
    sourceSha256: item.request.sourceSha256,
    irSha256: item.request.irSha256,
    locale: 'ja',
    // Synthetic text exercises integrity checks, not translation quality.
    segments: Object.fromEntries(
      item.request.segments.slice(0, count).map((s) => [s.id, `訳: ${s.text}`]),
    ),
  };
}
async function review(root: string, item: Task) {
  await writeFile(
    join(root, item.manual, 'translation/review.md'),
    `Synthetic fixture review; all segments.\nsourceSha256: ${item.request.sourceSha256}\nirSha256: ${item.request.irSha256}\ndraftSha256: ${item.draftSha256}\n`,
  );
}
async function translated(root: string) {
  const { leaf } = await source(root);
  await enqueueManual(root, leaf);
  const item = await task(root);
  await saveQueueBatch(root, item.id, item.claimToken, response(item));
  return task(root);
}

test('source registration is idempotent and partial checkpoints survive a worker reset', async () => {
  const root = await project();
  const { leaf, html } = await source(root);
  const job = await enqueueManual(root, leaf);
  expect(await readFile(join(leaf, 'source.html'), 'utf8')).toBe(html);
  expect(job.draft.sourceSha256).toBe(sha256(html));
  const first = await task(root, 'before-reset', 2);
  expect(first.request.segments).toHaveLength(2);
  expect(first.source.origin).toBe('https://example.org/demo.html');
  expect(first.context.after?.id).toBe('s0003');
  expect((await enqueueManual(root, leaf)).claim?.token).toBe(first.claimToken);
  expect(await listQueue(root)).toHaveLength(1);
  const saved = await saveQueueBatch(
    root,
    first.id,
    first.claimToken,
    response(first, 1),
    'Stop before the usage limit.',
  );
  expect(saved.status).toBe('pending');
  expect(Object.keys(saved.draft.segments)).toEqual(['s0001']);
  await rejects(readFile(join(leaf, 'translation/ja.json')), /ENOENT/);
  await rejects(
    saveQueueBatch(root, first.id, first.claimToken, response(first)),
    /no longer current/,
  );
  await rejects(
    releaseQueueTask(root, first.id, first.claimToken, 'stale worker cannot block', true),
    /no longer current/,
  );

  const second = await task(root, 'after-reset', 2);
  expect(second.history.some((event) => event.note.includes('Stop before the usage limit.'))).toBe(
    true,
  );
  expect(second.request.segments.map((s) => s.id)).toEqual(['s0002', 's0003']);
  expect(second.claimToken).not.toBe(first.claimToken);
  await saveQueueBatch(root, second.id, second.claimToken, response(second));
  const third = await task(root);
  expect(third.request.segments.map((s) => s.id)).toEqual(['s0004']);
  await saveQueueBatch(root, third.id, third.claimToken, response(third));
  const final = await task(root);
  expect(final.phase).toBe('review');
  expect(final.savedSegments).toBe(final.totalSegments);
  expect((await listQueue(root))[0].status).toBe('in_progress');
  await rejects(completeQueueTask(root, final.id, final.claimToken), /semantic review/);
  await review(root, final);
  const done = await completeQueueTask(root, final.id, final.claimToken);
  expect(done.status).toBe('done');
  expect((await verifyQueue(root))[0].status).toBe('done');
  const catalog = JSON.parse(await readFile(join(root, 'src/data/manual-catalog.json'), 'utf8'));
  expect(catalog).toHaveLength(1);
  expect(await readFile(join(root, 'src/content/docs/gnu/home.md'), 'utf8')).toContain(
    catalog[0].href,
  );
  expect(
    await readFile(join(root, 'src/content/docs/manuals', `${catalog[0].id}.md`), 'utf8'),
  ).toContain('訳:');
  expect(await nextQueueTask(root, 'another-worker')).toBeNull();
});

test('completion rejects missing segments and malformed batches leave the checkpoint untouched', async () => {
  const root = await project();
  const { leaf } = await source(root);
  await enqueueManual(root, leaf);
  const item = await task(root, 'worker', 2);
  await rejects(completeQueueTask(root, item.id, item.claimToken), /Missing translated segment/);
  const badHash = response(item);
  badHash.irSha256 = 'a'.repeat(64);
  await rejects(saveQueueBatch(root, item.id, item.claimToken, badHash), /hash/);
  const missingToken = response(item);
  missingToken.segments.s0002 = '保護トークンがない文';
  await rejects(saveQueueBatch(root, item.id, item.claimToken, missingToken), /token/);
  const outside = response(item);
  outside.segments.s0003 = '説明';
  await rejects(
    saveQueueBatch(root, item.id, item.claimToken, outside),
    /outside this claimed batch/,
  );
  const unknown = response(item);
  unknown.segments.s9999 = '未知';
  await rejects(saveQueueBatch(root, item.id, item.claimToken, unknown), /Unexpected/);
  await rejects(
    saveQueueBatch(root, item.id, item.claimToken, { ...response(item), segments: {} }),
    /No translated segments/,
  );
  expect((await listQueue(root))[0].draft.segments).toEqual({});
  expect((await verifyQueue(root))[0].status).toBe('in_progress');
});

test('recovery fences an interrupted worker without discarding saved text or stealing live work', async () => {
  const root = await project();
  const { leaf } = await source(root);
  await enqueueManual(root, leaf);
  const first = await task(root, 'old-worker', 1);
  await saveQueueBatch(root, first.id, first.claimToken, response(first));
  const interrupted = await task(root, 'old-worker', 1);
  expect((await task(root, 'old-worker', 99, first.id)).claimToken).toBe(interrupted.claimToken);
  await rejects(nextQueueTask(root, 'new-worker', 1, first.id), /cannot be claimed/);
  await rejects(
    releaseQueueTask(root, first.id, 'wrong-token', 'wrong worker'),
    /no longer current/,
  );
  await recoverQueueTask(root, first.id, 'Confirmed the previous worker has stopped.');
  const resumed = await task(root, 'new-worker', 1);
  expect(resumed.claimToken).not.toBe(interrupted.claimToken);
  expect(resumed.request.segments[0].id).toBe(interrupted.request.segments[0].id);
  expect(resumed.savedSegments).toBe(1);
  await rejects(
    saveQueueBatch(root, interrupted.id, interrupted.claimToken, response(interrupted)),
    /no longer current/,
  );
  await releaseQueueTask(root, resumed.id, resumed.claimToken, 'Needs investigation.', true);
  expect(await nextQueueTask(root, 'third-worker')).toBeNull();
  expect((await verifyQueue(root))[0].status).toBe('blocked');
  await recoverQueueTask(root, resumed.id, 'Issue resolved.');
  expect((await task(root)).savedSegments).toBe(1);
});

test('review corrections are checkpointed and invalidate a previous review record', async () => {
  const root = await project();
  const item = await translated(root);
  await review(root, item);
  const job = (await listQueue(root))[0];
  await saveQueueBatch(root, item.id, item.claimToken, {
    ...job.draft,
    segments: { s0001: '修正済みの名前' },
  });
  const revised = await task(root);
  expect(revised.phase).toBe('review');
  expect(revised.draftSha256).not.toBe(item.draftSha256);
  await rejects(completeQueueTask(root, revised.id, revised.claimToken), /semantic review/);
  await review(root, revised);
  await completeQueueTask(root, revised.id, revised.claimToken);
  await rm(join(root, item.manual, 'translation/review.md'));
  await rejects(verifyQueue(root), /semantic review/);
});

test('changed IR requires a new job and blocking the old job preserves its draft', async () => {
  const root = await project();
  const { leaf } = await source(root);
  const original = await enqueueManual(root, leaf);
  const first = await task(root, 'worker', 1);
  await saveQueueBatch(root, first.id, first.claimToken, response(first));
  const ir = await loadIR(root, leaf);
  ir.ir.extraction.warnings.push('Additional source extraction check.');
  await writeFile(join(leaf, 'ir.json'), json(ir.ir));
  await rejects(nextQueueTask(root, 'worker'), /source or IR changed/);
  await releaseQueueTask(
    root,
    original.id,
    undefined,
    'IR superseded; preserve the old draft.',
    true,
  );
  const replacement = await enqueueManual(root, leaf);
  expect(replacement.id).not.toBe(original.id);
  expect(
    Object.keys((await listQueue(root)).find((j) => j.id === original.id)?.draft.segments ?? {}),
  ).toHaveLength(1);
  expect(await verifyQueue(root)).toHaveLength(2);
  expect((await task(root)).id).toBe(replacement.id);
  await writeFile(join(leaf, 'source.html'), 'tampered');
  await rejects(verifyQueue(root), /SHA-256/);
});

test('a separately accepted translation is never overwritten by queue completion', async () => {
  const root = await project();
  const item = await translated(root);
  await review(root, item);
  const other = structuredClone((await listQueue(root))[0].draft);
  other.segments.s0001 = '別の翻訳';
  const path = join(root, item.manual, 'translation/ja.json');
  await writeFile(path, json(other));
  await rejects(completeQueueTask(root, item.id, item.claimToken), /refusing to overwrite/);
  expect(JSON.parse(await readFile(path, 'utf8'))).toEqual(other);
  expect((await listQueue(root))[0].status).toBe('in_progress');
});

test('completion can resume after rendering fails without marking the job done early', async () => {
  const root = await project();
  const item = await translated(root);
  await review(root, item);
  const other = await source(root, 'other');
  await writeFile(join(other.leaf, 'source.html'), 'tampered');
  await rejects(completeQueueTask(root, item.id, item.claimToken), /SHA-256/);
  expect((await listQueue(root))[0].status).toBe('in_progress');
  await writeFile(join(other.leaf, 'source.html'), other.html);
  expect((await completeQueueTask(root, item.id, item.claimToken)).status).toBe('done');
});

test('queue locks and symlinks cannot redirect writes or be bypassed by another command', async () => {
  const root = await project();
  const { leaf } = await source(root);
  await enqueueManual(root, leaf);
  const lock = join(root, 'translation-queue/.lock');
  await writeFile(lock, 'live queue command');
  await rejects(nextQueueTask(root, 'worker'), /Another queue command/);
  expect(await readFile(lock, 'utf8')).toBe('live queue command');
  await rm(lock);
  await rejects(nextQueueTask(root, 'worker', 0), /too_small|Too small/);
  await rejects(nextQueueTask(root, 'worker', 1, '../escape'), /pattern/);
  const other = await project();
  await symlink(join(root, 'translation-queue'), join(other, 'translation-queue'));
  await rejects(nextQueueTask(other, 'worker'), /real directory/);
});

const cliPath = fileURLToPath(new URL('../../tools/manual/queue-cli.ts', import.meta.url));
async function cli(root: string, ...args: string[]) {
  const child = Bun.spawn([process.execPath, cliPath, ...args], {
    cwd: root,
    stdout: 'pipe',
    stderr: 'pipe',
  });
  const [output, error, code] = await Promise.all([
    new Response(child.stdout).text(),
    new Response(child.stderr).text(),
    child.exited,
  ]);
  return { output, error, code };
}

test('CLI registers a source, emits a bounded task and saves a batch across processes', async () => {
  const root = await project();
  const { leaf } = await source(root);
  const added = await cli(
    root,
    'add',
    '--file',
    join(root, 'demo.html'),
    '--format',
    'html',
    '--provider',
    'gnu',
    '--product',
    'tools',
    '--version',
    '1.0',
    '--variant',
    'default',
    '--section',
    '1',
    '--name',
    'demo',
  );
  expect(added.code).toBe(0);
  const first = await cli(root, 'next', '--worker', 'cli-worker', '--max-segments', '1');
  expect(first.code).toBe(0);
  const item = JSON.parse(first.output) as Task;
  expect(item.request.segments).toHaveLength(1);
  const file = join(root, 'batch.json');
  await writeFile(file, json(response(item)));
  expect(
    (await cli(root, 'save', '--id', item.id, '--claim', item.claimToken, '--file', file)).code,
  ).toBe(0);
  expect(JSON.parse((await cli(root, 'list')).output)[0].savedSegments).toBe(1);
  expect((await cli(root, 'verify')).code).toBe(0);
  expect((await cli(root, 'add', '--manual', leaf, '--url', 'https://example.org')).code).toBe(1);
  expect((await cli(root, 'next', '--worker', 'cli-worker', '--extra', 'invalid')).code).toBe(1);
  expect((await cli(root, 'next', '--worker', 'a', '--worker', 'b')).code).toBe(1);
});

test('two CLI workers cannot claim the same pending job concurrently', async () => {
  const root = await project();
  const { leaf } = await source(root);
  await enqueueManual(root, leaf);
  const results = await Promise.all(
    ['worker-a', 'worker-b'].map((worker) => cli(root, 'next', '--worker', worker)),
  );
  const claimed = results.filter((r) => r.code === 0 && JSON.parse(r.output) !== null);
  expect(claimed).toHaveLength(1);
  for (const result of results)
    if (result.code !== 0) expect(result.error).toContain('Another queue command');
  expect((await verifyQueue(root))[0].status).toBe('in_progress');
});
