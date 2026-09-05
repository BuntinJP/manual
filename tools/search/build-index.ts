import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { parseHTML } from 'linkedom';
import type { SearchDocument, SubstringIndex } from './core';

const omitted = new Set([
  'SCRIPT',
  'STYLE',
  'NAV',
  'HEADER',
  'FOOTER',
  'FORM',
  'BUTTON',
  'TEMPLATE',
]);
const blocks = new Set([
  'P',
  'DIV',
  'SECTION',
  'ARTICLE',
  'MAIN',
  'PRE',
  'UL',
  'OL',
  'DL',
  'LI',
  'DT',
  'DD',
  'TABLE',
  'TR',
  'TD',
  'TH',
  'BLOCKQUOTE',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'BR',
]);
type ContentNode = {
  nodeType: number;
  textContent: string | null;
  tagName?: string;
  childNodes: ArrayLike<ContentNode>;
  hasAttribute?: (name: string) => boolean;
};
const extractText = (node: ContentNode): string => {
  if (node.nodeType === 3) return node.textContent ?? '';
  if (
    omitted.has(node.tagName ?? '') ||
    node.hasAttribute?.('data-pagefind-ignore') ||
    node.hasAttribute?.('hidden')
  )
    return '';
  const content = Array.from(node.childNodes).map(extractText).join('');
  return blocks.has(node.tagName ?? '') ? `\n${content}\n` : content;
};

export function extractSearchDocument(html: string, url: string): SearchDocument | undefined {
  const { document } = parseHTML(html);
  const bodies = Array.from(document.querySelectorAll('[data-pagefind-body]'));
  if (!bodies.length) return undefined;
  const text = bodies.map(extractText).join('\n').replace(/\s+/g, ' ').trim();
  if (!text) return undefined;
  const title = document.querySelector('h1')?.textContent?.trim() || document.title || url;
  return { url, title, text };
}

export async function buildSubstringIndex(outputDirectory: string): Promise<SubstringIndex> {
  const directory = resolve(outputDirectory);
  const documents: SearchDocument[] = [];
  const walk = async (path: string) => {
    for (const item of await readdir(path, { withFileTypes: true })) {
      const file = join(path, item.name);
      if (item.isSymbolicLink()) continue;
      if (item.isDirectory()) {
        if (!['pagefind', '_astro'].includes(item.name)) await walk(file);
      } else if (item.name.endsWith('.html') && item.name !== '404.html') {
        const relativePath = relative(directory, file).split(sep).join('/');
        const url = `/${relativePath.replace(/(?:^|\/)index\.html$/, '/').replace(/^\//, '')}`;
        const document = extractSearchDocument(await readFile(file, 'utf8'), url);
        if (document) documents.push(document);
      }
    }
  };
  await walk(directory);
  documents.sort((a, b) => a.url.localeCompare(b.url));
  const index: SubstringIndex = { schemaVersion: 1, documents };
  const target = join(directory, 'pagefind', 'manual-substrings.json');
  await mkdir(join(directory, 'pagefind'), { recursive: true });
  await writeFile(target, `${JSON.stringify(index)}\n`);
  return index;
}

if (import.meta.main) {
  const index = await buildSubstringIndex(process.argv[2] ?? 'dist');
  console.log(`Local substring search index: ${index.documents.length} pages.`);
}
