import { describe, expect, test } from 'bun:test';
import { type CatalogEntry, parseCommandQuery, searchCatalog } from '../../src/lib/catalog';

const entries: CatalogEntry[] = [
  {
    id: 'bsd1',
    href: '/bsd1/',
    name: 'find',
    section: '1',
    provider: 'freebsd',
    product: 'base',
    version: '15.1',
    variant: 'release',
    description: 'ファイルを検索',
  },
  {
    id: 'gnu1',
    href: '/gnu1/',
    name: 'find',
    section: '1',
    provider: 'gnu',
    product: 'findutils',
    version: '4.10',
    variant: 'release',
    description: 'ファイルを検索',
  },
  {
    id: 'other',
    href: '/other/',
    name: 'find',
    section: '3',
    provider: 'other',
    product: 'library',
    version: '1',
    variant: 'release',
    description: 'API',
  },
];
describe('command lookup', () => {
  test('normalizes man syntax without conflating sections', () => {
    expect(parseCommandQuery(' man 1 find ')).toEqual({ name: 'find', section: '1' });
    expect(parseCommandQuery('find(3)')).toEqual({ name: 'find', section: '3' });
    expect(searchCatalog(entries, 'find(1)')).toHaveLength(2);
    expect(searchCatalog(entries, 'man 3 find')[0]?.id).toBe('other');
  });
  test('keeps variants and provider filters distinct', () => {
    expect(searchCatalog(entries, 'find')).toHaveLength(3);
    expect(searchCatalog(entries, 'find', 'gnu')[0]?.id).toBe('gnu1');
    expect(searchCatalog(entries, '15.1')[0]?.id).toBe('bsd1');
    expect(searchCatalog(entries, '存在しない')).toEqual([]);
  });
});
