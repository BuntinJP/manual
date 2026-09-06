export type SearchDocument = { url: string; title: string; text: string; provider?: string };
export type SubstringIndex = { schemaVersion: 1; documents: SearchDocument[] };
export type SearchHit = { url: string; title: string; excerpt: string; provider?: string };

export const normalizeSearchText = (value: string) =>
  value.normalize('NFKC').toLocaleLowerCase('ja').replace(/\s+/g, ' ').trim();

/** Small, exact-substring fallback for terms split differently by Japanese tokenizers. */
export function searchSubstringIndex(
  index: SubstringIndex,
  input: string,
  provider = '',
): SearchHit[] {
  const query = normalizeSearchText(input);
  if (!query) return [];
  return index.documents.flatMap((document) => {
    if (provider && document.provider !== provider) return [];
    const text = normalizeSearchText(document.text);
    const position = text.indexOf(query);
    const titleMatches = normalizeSearchText(document.title).includes(query);
    if (position < 0 && !titleMatches) return [];
    // Slice in the same coordinate system used to find the match. NFKC may
    // expand ligatures or shrink halfwidth kana, so normalized offsets cannot
    // index the original text. Preserve source casing for literal matches.
    const literalPosition = document.text.indexOf(input.trim());
    const excerptSource = literalPosition >= 0 ? document.text : text;
    const excerptPosition = literalPosition >= 0 ? literalPosition : position;
    const start = Math.max(0, excerptPosition - 55);
    const end = Math.min(excerptSource.length, Math.max(excerptPosition, 0) + query.length + 110);
    return [
      {
        url: document.url,
        title: document.title,
        provider: document.provider,
        excerpt: `${start ? '…' : ''}${excerptSource.slice(start, end)}${end < excerptSource.length ? '…' : ''}`,
      },
    ];
  });
}

export function validateSubstringIndex(value: unknown): SubstringIndex {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('schemaVersion' in value) ||
    value.schemaVersion !== 1 ||
    !('documents' in value) ||
    !Array.isArray(value.documents)
  )
    throw new Error('Invalid local search index.');
  const documents: SearchDocument[] = [];
  for (const item of value.documents) {
    if (
      typeof item !== 'object' ||
      item === null ||
      !['url', 'title', 'text'].every((key) => typeof item[key] === 'string') ||
      (item.provider !== undefined && typeof item.provider !== 'string') ||
      !item.url.startsWith('/') ||
      item.url.startsWith('//')
    )
      throw new Error('Invalid document in local search index.');
    documents.push({ url: item.url, title: item.title, text: item.text, provider: item.provider });
  }
  return { schemaVersion: 1, documents };
}
