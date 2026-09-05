#!/usr/bin/env bun
import { relative, resolve } from 'node:path';
import {
  acceptTranslation,
  discoverManuals,
  ingest,
  parseManual,
  prepareTranslation,
  renderAll,
  verifyManual,
} from './core';
import type { Identity } from './schema';

const help = `Manual translation pipeline (offline after ingest)
  ingest --file SOURCE | --url URL --format roff|html
    --provider NAME --product NAME --version VERSION --variant VARIANT --section SECTION --name NAME
    [--origin URL] [--selector CSS]
  parse --manual manuals/.../HASH
  translate --manual manuals/.../HASH [--accept translated.json]
  render
  verify [--manual manuals/.../HASH]

All identity components are explicit, lowercase ASCII slugs. The preserved source
SHA-256 adds an immutable revision directory. --origin records the URL when a
previously downloaded local file is imported. No AI API or credential is needed:
use translation/request.ja.json with your AI, then accept its JSON response.
`;
async function main() {
  const [command, ...args] = process.argv.slice(2);
  const flags: Record<string, string> = {};
  if (!command || command === '--help' || command === 'help') {
    console.log(help);
    return;
  }
  for (let index = 0; index < args.length; index++) {
    const flag = args[index];
    if (!flag.startsWith('--') || !args[index + 1] || args[index + 1].startsWith('--'))
      throw new Error(`Expected --key value, got ${flag}`);
    if (flags[flag.slice(2)] !== undefined) throw new Error(`Duplicate flag ${flag}`);
    flags[flag.slice(2)] = args[++index];
  }
  const root = process.cwd();
  const required = (key: string) => {
    if (!flags[key]) throw new Error(`Missing --${key}`);
    return flags[key];
  };
  const allowed: Record<string, string[]> = {
    ingest: [
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
    ],
    parse: ['manual'],
    translate: ['manual', 'accept'],
    render: [],
    verify: ['manual'],
  };
  if (!allowed[command]) throw new Error(`Unknown command ${command}`);
  for (const key of Object.keys(flags))
    if (!allowed[command].includes(key)) throw new Error(`Unknown flag --${key} for ${command}`);
  if (command === 'ingest') {
    const identity = Object.fromEntries(
      ['provider', 'product', 'version', 'variant', 'section', 'name'].map((key) => [
        key,
        required(key),
      ]),
    ) as Identity;
    const format = required('format');
    if (format !== 'roff' && format !== 'html') throw new Error('--format must be roff or html.');
    const path = await ingest(root, {
      identity,
      format,
      file: flags.file,
      url: flags.url,
      origin: flags.origin,
      selector: flags.selector,
    });
    console.log(relative(root, path));
  } else if (command === 'parse') {
    const ir = await parseManual(root, required('manual'));
    console.log(
      JSON.stringify({ segments: ir.segments.length, extraction: ir.extraction }, null, 2),
    );
  } else if (command === 'translate') {
    const path = required('manual');
    if (flags.accept) {
      const result = await acceptTranslation(root, path, flags.accept);
      console.log(`Accepted ${Object.keys(result.segments).length} Japanese segments.`);
    } else {
      const result = await prepareTranslation(root, path);
      console.log(
        `${relative(root, resolve(root, path))}/translation/request.ja.json (${result.segments.length} segments)`,
      );
    }
  } else if (command === 'render')
    console.log(`Rendered ${(await renderAll(root)).length} Japanese manuals.`);
  else {
    const paths = flags.manual ? [flags.manual] : await discoverManuals(root);
    for (const path of paths) console.log(JSON.stringify(await verifyManual(root, path)));
  }
}
main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
