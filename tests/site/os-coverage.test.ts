import { expect, test } from 'bun:test';
import type { CatalogEntry } from '../../src/lib/catalog';
import { buildOsCoverage, isManPage } from '../../src/lib/os-coverage';
const manual = (overrides: Partial<CatalogEntry> = {}): CatalogEntry => ({
  id: 'one',
  href: '/one/',
  name: 'cut',
  section: '1',
  provider: 'freebsd',
  product: 'base',
  version: '14',
  variant: 'default',
  description: '',
  sourceFormat: 'roff',
  ...overrides,
});
test('only formal man sources enter coverage, never Texinfo or general web docs', () => {
  expect(isManPage(manual())).toBe(true);
  expect(
    isManPage(manual({ sourceFormat: 'html', sourceUrl: 'https://man.openbsd.org/cut.1' })),
  ).toBe(true);
  expect(
    isManPage(
      manual({
        sourceFormat: 'html',
        sourceUrl: 'https://www.gnu.org/software/coreutils/manual/html_node/cut-invocation.html',
      }),
    ),
  ).toBe(false);
  expect(isManPage(manual({ section: 'cli', sourceFormat: 'roff' }))).toBe(false);
});
test('distinguishes translation, untranslated original and unregistered source without OS inference', () => {
  const rows = buildOsCoverage(
    [manual(), manual()],
    [
      manual({ provider: 'apple', sourceUrl: 'https://example.com/cut.1' }),
      manual({ provider: 'ibm', product: 'aix' }),
    ],
    ['diff'],
  );
  expect(rows.map((row) => row.name)).toEqual(['cut', 'diff']);
  const cells = rows[0].cells;
  expect(cells.find((cell) => cell.id === 'freebsd')?.translations).toHaveLength(1);
  expect(cells.find((cell) => cell.id === 'apple')?.originals[0].sourceUrl).toBe(
    'https://example.com/cut.1',
  );
  expect(cells.find((cell) => cell.id === 'aix')?.sourcePresent).toBe(true);
  expect(cells.find((cell) => cell.id === 'linux-bsd')?.sourcePresent).toBe(false);
  expect(rows[1].cells.every((cell) => !cell.sourcePresent && !cell.translations.length)).toBe(
    true,
  );
});

test('classifies only explicitly identified Linux BSD-derived formal manuals', () => {
  const col = manual({
    name: 'col',
    provider: 'util-linux',
    product: 'bsd-utils',
    variant: 'linux-upstream',
  });
  const cell = (entries: CatalogEntry[], sources: CatalogEntry[] = []) =>
    buildOsCoverage(entries, sources, ['col'])[0].cells.find((item) => item.id === 'linux-bsd');
  expect(cell([col])?.translations).toEqual([col]);
  expect(cell([], [col])?.sourcePresent).toBe(true);
  for (const overrides of [
    { product: 'util-linux' },
    { variant: 'default' },
    { provider: 'freebsd' },
    { provider: 'openbsd' },
    { provider: 'apple' },
    { section: 'cli' },
    { sourceFormat: 'html', sourceUrl: 'https://example.com/col-guide' },
  ]) {
    const other = { ...col, ...overrides } as CatalogEntry;
    expect(cell([other], [other])?.translations).toHaveLength(0);
    expect(cell([other], [other])?.sourcePresent).toBe(false);
  }
});
