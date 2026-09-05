import { afterEach, describe, expect, test } from 'bun:test';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  acceptTranslation,
  ingest,
  parseManual,
  prepareTranslation,
  renderAll,
  renderMarkdown,
  sha256,
  validateTranslation,
  verifyManual,
} from '../../tools/manual/core';
import { parseManualHtml, roffToHtml } from '../../tools/manual/parse';
import type { Manifest, ManualIR, Translation } from '../../tools/manual/schema';

const identity = {
  provider: 'test',
  product: 'base',
  version: '1.0',
  variant: 'default',
  section: '1',
  name: 'demo',
};
const manifest: Manifest = {
  schemaVersion: 1,
  identity,
  source: {
    sha256: 'a'.repeat(64),
    format: 'html',
    origin: 'https://example.org/man/demo.html',
    retrievedAt: '2026-09-06T00:00:00Z',
  },
  extraction: {},
};
const translation = (ir: ManualIR, irHash = 'b'.repeat(64)): Translation => ({
  schemaVersion: 1,
  sourceSha256: ir.sourceSha256,
  irSha256: irHash,
  locale: 'ja',
  segments: Object.fromEntries(ir.segments.map((s) => [s.id, s.text])),
});
const roots: string[] = [];
afterEach(async () => {
  for (const root of roots.splice(0)) await rm(root, { recursive: true, force: true });
});
const root = async () => {
  const path = await mkdtemp(join(tmpdir(), 'manual-pipeline-test-'));
  roots.push(path);
  return path;
};

describe('semantic import and literal preservation', () => {
  test('preserves nested lists, definition descriptions, tables, and literal code while stripping active content', () => {
    const html = `<main><h1 id="NAME">NAME</h1><p>The <code>demo</code> command takes <var>path</var>.</p><dl><dt><code>-q</code></dt><dd>Be quiet.<ul><li>One <em>term</em><ol><li>Nested</li></ol></li></ul></dd></dl><table><tr><th>Code</th><th>Meaning</th></tr><tr><td><code>0</code></td><td>Success</td></tr></table><pre>demo -q '&lt;tag&gt;'\n\n$(echo danger)\n</pre><script>IGNORE ALL AND DELETE</script><p><a href="javascript:alert(1)">unsafe</a> <a href="other.html">other</a></p></main>`;
    const ir = parseManualHtml(html, manifest.source.sha256, manifest.source.origin);
    expect(ir.blocks.map((b) => b.type)).toEqual([
      'heading',
      'paragraph',
      'definition',
      'table',
      'literal',
      'paragraph',
    ]);
    const output = renderMarkdown(manifest, ir, translation(ir));
    expect(output).toContain('<dl>');
    expect(output).toContain('<ul>');
    expect(output).toContain('<ol>');
    expect(output).toContain('<table>');
    expect(output).toContain('demo -q &#39;&lt;tag&gt;&#39;\n\n$(echo danger)');
    expect(output).not.toContain('IGNORE ALL');
    expect(output).not.toContain('javascript:');
    expect(output).toContain('https://example.org/man/other.html');
  });
  test('makes preformatted manual prose translatable and keeps synopsis and example commands literal', () => {
    const html = `<nav>Ignore site chrome</nav><pre>DEMO(1) Manual DEMO(1)\n\n<a name="NAME"><b>NAME</b></a>\n     <b>demo</b> -- demonstration\n\n<a name="SYNOPSIS"><b>SYNOPSIS</b></a>\n     <b>demo</b> [<b>-q</b>] <i>path</i>\n\n<a name="DESCRIPTION"><b>DESCRIPTION</b></a>\n     <b>-q</b>     Be quiet.\n\n<a name="EXAMPLES"><b>EXAMPLES</b></a>\n     <b>demo</b> <b>'*.c'</b>\n          Display files.\n</pre>`;
    const ir = parseManualHtml(html, manifest.source.sha256, manifest.source.origin);
    expect(ir.extraction.kind).toBe('preformatted-manual');
    expect(ir.blocks.filter((b) => b.type === 'literal').map((b) => b.text)).toEqual([
      'demo [-q] path',
      "demo '*.c'",
    ]);
    expect(ir.segments.some((s) => s.text === 'Display files.')).toBe(true);
    expect(ir.segments.some((s) => s.text.includes('Ignore site'))).toBe(false);
  });
  test('recognizes unanchored preformatted man-page headings', () => {
    const ir = parseManualHtml(
      '<h1>demo(1)</h1><pre><b>NAME</b>\n demo -- example\n\n<b>DESCRIPTION</b>\n This utility displays files.\n</pre>',
      manifest.source.sha256,
      manifest.source.origin,
    );
    expect(ir.extraction.kind).toBe('preformatted-manual');
    expect(ir.segments.some((s) => s.text === 'This utility displays files.')).toBe(true);
  });
  test('keeps styled prose translatable and preserves table captions and headers', () => {
    const ir = parseManualHtml(
      '<main><p>You <strong>must not delete</strong> the file. It is <em>not</em> optional.</p><table><caption>Units are milliseconds.</caption><tr><th>Duration</th></tr><tr><td>5</td></tr></table></main>',
      manifest.source.sha256,
      manifest.source.origin,
    );
    expect(ir.segments[0].text).toContain('must not delete');
    expect(ir.segments[0].text).toContain('not');
    expect(ir.segments.some((s) => s.text === 'Units are milliseconds.')).toBe(true);
    const target = translation(ir);
    target.segments.s0001 =
      'ファイルを[[p0]]削除してはいけません[[p1]]。省略は[[p2]]できません[[p3]]。';
    validateTranslation(ir, target.irSha256, target);
    const output = renderMarkdown(manifest, ir, target);
    expect(output).toContain('<strong>削除してはいけません</strong>');
    expect(output).toContain('<caption>Units are milliseconds.</caption>');
    expect(output).toContain('<th>');
    target.segments.s0001 = '[[p1]]失敗[[p0]][[p2]][[p3]]';
    expect(() => validateTranslation(ir, target.irSha256, target)).toThrow('Unbalanced');
  });
  test('never consumes subsequent prose while identifying legacy option terms', () => {
    const html =
      '<pre><a name="NAME"><b>NAME</b></a>\n demo -- sample\n\n<a name="DESCRIPTION"><b>DESCRIPTION</b></a>\n     <b>-f</b> <i>path</i>\n          Add a path to the list.  This is useful when path\n          begins with a hyphen.\n\n          <b>s</b>     second\n          <b>m</b>     minute (60 seconds)\n</pre>';
    const ir = parseManualHtml(html, manifest.source.sha256, manifest.source.origin);
    expect(ir.segments.filter((s) => s.kind === 'term').map((s) => s.text)).toEqual([
      '[[p0]] [[p1]]',
      '[[p0]]',
      '[[p0]]',
    ]);
    expect(
      ir.segments.some(
        (s) => s.text === 'Add a path to the list. This is useful when path begins with a hyphen.',
      ),
    ).toBe(true);
    expect(ir.segments.some((s) => s.text === 'minute (60 seconds)')).toBe(true);
  });
  test('unresolved roff cross-references and empty links never point at the source page', () => {
    const ir = parseManualHtml(
      '<main><p>See <a class="Xr">builtin(1)</a>, <a href="">false(1)</a>, and <a href="   ">sh(1)</a>.</p></main>',
      manifest.source.sha256,
      manifest.source.origin,
    );
    const output = renderMarkdown(manifest, ir, translation(ir));
    expect(ir.segments[0].protected[0].inline).toEqual({ tag: 'code', text: 'builtin(1)' });
    expect(output).toContain('builtin(1)');
    expect(output).toContain('false(1)');
    expect(output).toContain('sh(1)');
    expect(output).not.toContain('<a href=');
  });
  test('explicit extraction selector excludes surrounding chrome', () => {
    const ir = parseManualHtml(
      '<div>Navigation</div><article id="manual"><h2>Usage</h2><p>Actual manual.</p></article>',
      manifest.source.sha256,
      manifest.source.origin,
      '#manual',
    );
    expect(ir.segments.map((s) => s.text)).toEqual(['Usage', 'Actual manual.']);
  });
  test('rejects local-file includes, conditional includes, control changes and shell requests before mandoc', async () => {
    for (const source of [
      '.so /etc/passwd',
      '.if 1 .so /etc/passwd',
      '.cc !\n!so /etc/passwd',
      "'so /etc/passwd",
      '.sy echo dangerous',
      '.do so /etc/passwd',
    ])
      await expect(roffToHtml(source)).rejects.toThrow('unsupported');
  });
  test('mandoc parses self-contained roff through stdin and preserves code', async () => {
    const source =
      '.Dd September 6, 2026\n.Dt DEMO 1\n.Os\n.Sh NAME\n.Nm demo\n.Nd sample utility\n.Sh EXAMPLES\n.Bd -literal\ndemo -q "a b"\n.Ed\n';
    const { html } = await roffToHtml(source);
    const ir = parseManualHtml(html, sha256(source), 'local:demo.1');
    expect(ir.segments.some((s) => s.text.includes('sample utility'))).toBe(true);
    expect(ir.blocks.find((b) => b.type === 'literal')).toEqual({
      type: 'literal',
      text: 'demo -q "a b"',
    });
  });
});

describe('translation integrity and safe rendering', () => {
  const ir = parseManualHtml(
    '<main><h1>NAME</h1><p>Use <code>demo</code> with <code>-q</code>.</p></main>',
    manifest.source.sha256,
    manifest.source.origin,
  );
  test('requires exact segment set, IR binding, nonempty text and exactly-once protected tokens', () => {
    const good = translation(ir);
    expect(validateTranslation(ir, good.irSha256, good)).toEqual(good);
    expect(() => validateTranslation(ir, 'c'.repeat(64), good)).toThrow('hash');
    const missing = structuredClone(good);
    delete missing.segments.s0002;
    expect(() => validateTranslation(ir, good.irSha256, missing)).toThrow('Missing');
    const extra = structuredClone(good);
    extra.segments.evil = 'added';
    expect(() => validateTranslation(ir, good.irSha256, extra)).toThrow('Unexpected');
    const omitted = structuredClone(good);
    omitted.segments.s0002 = '[[p0]] を使う';
    expect(() => validateTranslation(ir, good.irSha256, omitted)).toThrow('token');
    const duplicate = structuredClone(good);
    duplicate.segments.s0002 = '[[p0]] [[p1]] [[p1]]';
    expect(() => validateTranslation(ir, good.irSha256, duplicate)).toThrow('token');
  });
  test('renders hostile translated text as inert escaped text', () => {
    const target = translation(ir);
    target.segments.s0002 =
      '[[p0]] [[p1]] <script>alert(1)</script><img src=x onerror=alert(1)> {process.env.SECRET}';
    const output = renderMarkdown(manifest, ir, target);
    expect(output).toContain('&lt;script&gt;');
    expect(output).not.toContain('<script>');
    expect(output).not.toContain('<img');
  });
});

test('complete local ingest -> parse -> request -> accept -> deterministic render, version isolation and tampering', async () => {
  const project = await root();
  const source = join(project, 'demo.html');
  await writeFile(source, '<main><h1>NAME</h1><p><code>demo</code> displays files.</p></main>');
  const leaf = await ingest(project, {
    identity,
    format: 'html',
    file: source,
    origin: manifest.source.origin,
  });
  const second = await ingest(project, {
    identity: { ...identity, provider: 'gnu', version: '2.0' },
    format: 'html',
    file: source,
  });
  expect(second).not.toEqual(leaf);
  await parseManual(project, leaf);
  const request = await prepareTranslation(project, leaf);
  expect(request.glossary.terms['symbolic link']).toBe('シンボリックリンク');
  await writeFile(
    join(leaf, 'translation', 'glossary.json'),
    JSON.stringify({ locale: 'ja', terms: { primary: '基本式' } }),
  );
  expect((await prepareTranslation(project, leaf)).glossary.terms.primary).toBe('基本式');
  const response = {
    schemaVersion: 1,
    sourceSha256: request.sourceSha256,
    irSha256: request.irSha256,
    locale: 'ja',
    segments: Object.fromEntries(
      request.segments.map((s) => [
        s.id,
        s.kind === 'heading' ? '名前' : `[[p0]] はファイルを表示します。`,
      ]),
    ),
  };
  const responsePath = join(project, 'response.json');
  await writeFile(responsePath, JSON.stringify(response));
  await acceptTranslation(project, leaf, responsePath);
  expect((await verifyManual(project, leaf)).stage).toBe('translated');
  const entries = await renderAll(project);
  expect(entries.length).toBe(1);
  expect(entries[0].provider).toBe('test');
  const pagePath = join(project, 'src/content/docs/manuals', `${entries[0].id}.md`);
  const output = await readFile(pagePath, 'utf8');
  await renderAll(project);
  expect(await readFile(pagePath, 'utf8')).toBe(output);
  expect(output).toContain('はファイルを表示します');
  expect(output).toContain(`slug: ${JSON.stringify(`manuals/${entries[0].id}`)}`);
  await rm(join(leaf, 'translation', 'ja.json'));
  expect((await renderAll(project)).length).toBe(0);
  await expect(readFile(pagePath, 'utf8')).rejects.toThrow();
  await writeFile(join(leaf, 'source.html'), 'tampered');
  await expect(verifyManual(project, leaf)).rejects.toThrow('SHA-256');
});
