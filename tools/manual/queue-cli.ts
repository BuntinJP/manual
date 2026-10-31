#!/usr/bin/env bun
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { ingest, json } from './core';
import {
  completeQueueTask,
  enqueueManual,
  listQueue,
  nextQueueTask,
  queueSummary,
  recoverQueueTask,
  releaseQueueTask,
  saveQueueBatch,
  verifyQueue,
} from './queue';
import type { Identity } from './schema';

const sourceFlags = [
  'file',
  'url',
  'format',
  'provider',
  'product',
  'version',
  'variant',
  'section',
  'name',
  'origin',
  'selector',
];
const allowed: Record<string, string[]> = {
  add: ['manual', ...sourceFlags],
  list: [],
  next: ['worker', 'max-segments', 'id'],
  save: ['id', 'claim', 'file', 'note'],
  release: ['id', 'claim', 'note'],
  block: ['id', 'claim', 'note'],
  recover: ['id', 'note'],
  complete: ['id', 'claim'],
  verify: [],
};
const help = `Persistent translation queue (no model/API invocation)
  add --manual manuals/.../HASH
  add --file SOURCE | --url URL --format roff|html
    --provider NAME --product NAME --version VERSION --variant VARIANT --section SECTION --name NAME
    [--origin URL] [--selector CSS]
  list
  next --worker NAME [--max-segments 20] [--id JOB_ID]
  save --id JOB_ID --claim TOKEN --file batch.json [--note TEXT]
  release --id JOB_ID --claim TOKEN --note TEXT
  block --id JOB_ID --note TEXT [--claim TOKEN]
  recover --id JOB_ID --note TEXT
  complete --id JOB_ID --claim TOKEN
  verify

next claims one bounded batch and prints its source, request and handoff commands.
save checkpoints validated segments and releases the claim. All segments saved is
not done: next returns a review task, then complete accepts and renders locally.
Stop an interrupted worker before recover. See docs/translation-queue.md.
`;

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (!command || command === '--help' || command === 'help') {
    console.log(help);
    return;
  }
  if (!allowed[command]) throw new Error(`Unknown queue command ${command}`);
  const flags: Record<string, string> = {};
  for (let index = 0; index < args.length; index++) {
    const flag = args[index];
    if (!flag.startsWith('--') || !args[index + 1] || args[index + 1].startsWith('--'))
      throw new Error(`Expected --key value, got ${flag}`);
    const key = flag.slice(2);
    if (!allowed[command].includes(key)) throw new Error(`Unknown flag ${flag} for ${command}`);
    if (Object.hasOwn(flags, key)) throw new Error(`Duplicate flag ${flag}`);
    flags[key] = args[++index];
  }
  const required = (key: string) => {
    if (!flags[key]) throw new Error(`Missing --${key}`);
    return flags[key];
  };
  const root = process.cwd();
  let result: unknown;
  if (command === 'add') {
    let manual = flags.manual;
    if (manual && sourceFlags.some((key) => Object.hasOwn(flags, key)))
      throw new Error('Use --manual alone, or supply a new source and identity.');
    if (!manual) {
      const format = required('format');
      if (format !== 'roff' && format !== 'html') throw new Error('--format must be roff or html.');
      const identity = Object.fromEntries(
        ['provider', 'product', 'version', 'variant', 'section', 'name'].map((key) => [
          key,
          required(key),
        ]),
      ) as Identity;
      manual = await ingest(root, {
        identity,
        format,
        file: flags.file,
        url: flags.url,
        origin: flags.origin,
        selector: flags.selector,
      });
    }
    result = queueSummary(await enqueueManual(root, manual));
  } else if (command === 'list') result = (await listQueue(root)).map(queueSummary);
  else if (command === 'next')
    result = await nextQueueTask(
      root,
      required('worker'),
      flags['max-segments'] === undefined ? 20 : Number(flags['max-segments']),
      flags.id,
    );
  else if (command === 'save')
    result = queueSummary(
      await saveQueueBatch(
        root,
        required('id'),
        required('claim'),
        JSON.parse(await readFile(resolve(root, required('file')), 'utf8')),
        flags.note,
      ),
    );
  else if (command === 'release' || command === 'block')
    result = queueSummary(
      await releaseQueueTask(
        root,
        required('id'),
        command === 'block' ? flags.claim : required('claim'),
        required('note'),
        command === 'block',
      ),
    );
  else if (command === 'recover')
    result = queueSummary(await recoverQueueTask(root, required('id'), required('note')));
  else if (command === 'complete')
    result = queueSummary(await completeQueueTask(root, required('id'), required('claim')));
  else result = await verifyQueue(root);
  console.log(json(result));
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
