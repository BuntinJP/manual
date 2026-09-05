import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildSubstringIndex, extractSearchDocument } from '../../tools/search/build-index';
import { searchSubstringIndex, validateSubstringIndex } from '../../tools/search/core';

test('Japanese compound terms match the literal body independently of word segmentation', () => {
  const index = {
    schemaVersion: 1 as const,
    documents: [
      {
        url: '/find/',
        title: 'find(1)',
        text: 'シンボリックリンクを辿ります。SYMLINK の文字は維持します。',
      },
      { url: '/other/', title: 'other', text: 'シンボリックという語だけです。' },
    ],
  };
  const results = searchSubstringIndex(index, 'シンボリックリンク');
  expect(results).toHaveLength(1);
  expect(results[0].url).toBe('/find/');
  expect(results[0].excerpt).toContain('シンボリックリンク');
  expect(results[0].excerpt).toContain('SYMLINK');
  expect(searchSubstringIndex(index, '存在しない文字列')).toEqual([]);
  expect(searchSubstringIndex(index, '   ')).toEqual([]);
  expect(searchSubstringIndex(index, 'ＦＩＮＤ')[0].url).toBe('/find/');
});

test('fallback extraction follows pagefind body and ignore boundaries without adding chrome', () => {
  const document = extractSearchDocument(
    '<html><body><nav>ナビゲーション</nav><main data-pagefind-body><h1>find(1)</h1><p>シンボリック<em>リンク</em>。</p><p data-pagefind-ignore>除外する語</p><script>悪意ある内容</script></main></body></html>',
    '/find/',
  );
  expect(document?.text).toContain('シンボリックリンク');
  expect(document?.text).not.toContain('ナビゲーション');
  expect(document?.text).not.toContain('除外する語');
  expect(document?.text).not.toContain('悪意');
  expect(
    extractSearchDocument('<html><body><h1>Search</h1></body></html>', '/search/'),
  ).toBeUndefined();
});

test('rejects malformed or external fallback index URLs', () => {
  expect(() =>
    validateSubstringIndex({
      schemaVersion: 1,
      documents: [{ url: 'https://example.com', title: 'x', text: 'y' }],
    }),
  ).toThrow();
  expect(() =>
    validateSubstringIndex({
      schemaVersion: 1,
      documents: [{ url: '//example.com', title: 'x', text: 'y' }],
    }),
  ).toThrow();
  expect(() =>
    validateSubstringIndex({
      schemaVersion: 1,
      documents: [{ url: '/find/', title: 4, text: 'y' }],
    }),
  ).toThrow();
});

test('build output is deterministic and preserves exact dotted release paths', async () => {
  const root = await mkdtemp(join(tmpdir(), 'manual-search-test-'));
  try {
    const path = join(root, 'manuals/15.quarterly/find');
    await mkdir(path, { recursive: true });
    await writeFile(
      join(path, 'index.html'),
      '<html><body><main data-pagefind-body><h1>find(1)</h1><p>シンボリックリンク</p></main></body></html>',
    );
    const index = await buildSubstringIndex(root);
    expect(index.documents[0].url).toBe('/manuals/15.quarterly/find/');
    const first = await readFile(join(root, 'pagefind/manual-substrings.json'), 'utf8');
    await buildSubstringIndex(root);
    expect(await readFile(join(root, 'pagefind/manual-substrings.json'), 'utf8')).toBe(first);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('NFKC length changes cannot move excerpts away from the match', () => {
  const index = {
    schemaVersion: 1 as const,
    documents: [
      {
        url: '/unicode/',
        title: 'Unicode',
        text: `${'㍿'.repeat(80)}シンボリックリンク と ｶﾞ が続きます。`,
      },
    ],
  };
  expect(searchSubstringIndex(index, 'シンボリックリンク')[0].excerpt).toContain(
    'シンボリックリンク',
  );
  expect(searchSubstringIndex(index, 'ガ')[0].excerpt).toContain('ガ');
});
