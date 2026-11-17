import type { CatalogEntry } from './catalog';

/** Count translated pages, not HOME indexes or queued/untranslated source documents. */
export function translatedManualCount(
  provider: string,
  catalog: Pick<CatalogEntry, 'provider' | 'href'>[],
  legacyPaths: string[] = [],
): number {
  const editions = new Set(
    catalog.filter((entry) => entry.provider === provider).map((entry) => entry.href),
  );
  const legacy = new Set(
    legacyPaths.filter(
      (path) => /\.(md|mdx)$/.test(path) && !/(^|\/)(home|index)\.(md|mdx)$/i.test(path),
    ),
  );
  return editions.size + legacy.size;
}
