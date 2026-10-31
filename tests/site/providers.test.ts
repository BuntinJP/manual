import { expect, test } from 'bun:test';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { CatalogEntry } from '../../src/lib/catalog';
import {
  activeProviders,
  manualProviders,
  providerForPage,
  providerHomeHref,
  providerLabel,
} from '../../src/lib/providers';
import { renderProviderHomes } from '../../tools/manual/provider-homes';

test('provider registry keeps stable IDs, labels and home/search identities together', () => {
  const ids = manualProviders.map((provider) => provider.id);
  expect(new Set(ids).size).toBe(ids.length);
  expect(ids.every((id) => /^[a-z][a-z0-9-]*$/.test(id))).toBe(true);
  expect(providerLabel('apple')).toBe('Apple');
  expect(providerLabel('freebsd')).toBe('FreeBSD');
  expect(providerLabel('megacmd')).toBe('MEGAcmd');
  expect(providerForPage('apple/home')).toBe('apple');
  expect(providerForPage('openbsd/home')).toBe('openbsd');
  expect(providerHomeHref('freebsd')).toBe('/freebsd/home/');
  expect(activeProviders(['apple', 'freebsd']).map((provider) => provider.id)).toEqual([
    'apple',
    'freebsd',
  ]);
  expect(() => activeProviders(['unregistered'])).toThrow('src/data/manual-providers.json');
});

test('new provider HOME pages follow the catalog, preserve editions and remove only generated output', async () => {
  const root = await mkdtemp(join(tmpdir(), 'manual-provider-homes-'));
  const home = join(root, 'src/content/docs/openbsd/home.md');
  const entry: CatalogEntry = {
    id: 'openbsd/base/1.0/default/1/demo/aaaaaaaaaaaa',
    href: '/manuals/openbsd/base/1.0/default/1/demo/aaaaaaaaaaaa/',
    provider: 'openbsd',
    product: 'base',
    version: '1.0',
    variant: 'default',
    section: '1',
    name: 'demo',
    description: 'テスト用マニュアル',
  };
  try {
    const next = { ...entry, id: `${entry.id}-next`, href: '/next-edition/', version: '2.0' };
    await renderProviderHomes(root, [entry, next]);
    const first = await readFile(home, 'utf8');
    expect(first).toContain('title: HOME');
    expect(first).toContain('/search/?provider=openbsd');
    expect(first).toContain('## base / 1.0 / default');
    expect(first).toContain('## base / 2.0 / default');
    expect(first).toContain(`[demo(1)](${entry.href})`);
    expect(first).toContain('[demo(1)](/next-edition/)');
    await renderProviderHomes(root, [next, entry]);
    expect(await readFile(home, 'utf8')).toBe(first);
    await renderProviderHomes(root, []);
    await expect(readFile(home, 'utf8')).rejects.toThrow();
    await writeFile(home, 'Authored HOME\n');
    await expect(renderProviderHomes(root, [entry])).rejects.toThrow('authored provider HOME');
    expect(await readFile(home, 'utf8')).toBe('Authored HOME\n');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
