import { expect, test } from 'bun:test';
import { translatedManualCount } from '../../src/lib/manual-counts';
import { activeProviders } from '../../src/lib/providers';

test('counts translated editions once and excludes HOME, indexes and non-document files', () => {
  const catalog = [
    { provider: 'apple', href: '/apple/one/' },
    { provider: 'apple', href: '/apple/one/' },
    { provider: 'apple', href: '/apple/two/' },
    { provider: 'aws', href: '/aws/one/' },
  ];
  expect(translatedManualCount('apple', catalog)).toBe(2);
  expect(translatedManualCount('gnu', catalog)).toBe(0);
  expect(
    translatedManualCount('isync', catalog, [
      'home.md',
      'index.mdx',
      'command.md',
      'nested/page.mdx',
      'nested/home.md',
      'nested',
      'file.json',
      'command.md',
    ]),
  ).toBe(2);
});

test('active providers prioritize Apple, FreeBSD and AWS independent of input order', () => {
  expect(
    activeProviders(['gnu', 'aws', 'megacmd', 'freebsd', 'apple']).map((provider) => provider.id),
  ).toEqual(['apple', 'freebsd', 'aws', 'gnu', 'megacmd']);
  expect(activeProviders(['gnu', 'aws']).map((provider) => provider.id)).toEqual(['aws', 'gnu']);
});
