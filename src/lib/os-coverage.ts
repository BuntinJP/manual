import type { CatalogEntry } from './catalog';

export const osColumns = [
  { id: 'gnu', label: 'Linux (GNU)' },
  { id: 'linux-bsd', label: 'Linux (BSD)' },
  { id: 'apple', label: 'Apple' },
  { id: 'freebsd', label: 'FreeBSD' },
  { id: 'openbsd', label: 'OpenBSD' },
  { id: 'aix', label: 'AIX' },
] as const;

type Manual = Pick<CatalogEntry, 'provider' | 'name' | 'section' | 'sourceFormat' | 'sourceUrl'> & {
  product?: string;
};
export function isManPage(entry: Manual): boolean {
  return (
    /^[1-9][a-z0-9]*$/i.test(entry.section) &&
    (entry.sourceFormat === 'roff' ||
      (entry.sourceFormat === 'html' &&
        /(?:man\.freebsd\.org|man\.openbsd\.org|\/man\.cgi|\.[1-9]\w*\.html(?:$|[?#]))/.test(
          entry.sourceUrl ?? '',
        )))
  );
}

/** Provider is provenance, never infer an OS from a command's portability. */
export function buildOsCoverage(
  catalog: CatalogEntry[],
  sources: Manual[] = [],
  indexedNames: string[] = [],
) {
  const names = [
    ...new Set([
      ...indexedNames,
      ...[...catalog, ...sources].filter(isManPage).map((entry) => entry.name),
    ]),
  ].sort((a, b) => a.localeCompare(b, 'en'));
  return names.map((name) => ({
    name,
    cells: osColumns.map(({ id }) => {
      const matchesColumn = (entry: Manual) =>
        entry.provider === id ||
        (id === 'aix' && entry.provider === 'ibm' && entry.product === 'aix');
      const translations = catalog
        .filter((entry) => isManPage(entry) && entry.name === name && matchesColumn(entry))
        .filter(
          (entry, index, entries) =>
            entries.findIndex((other) => other.href === entry.href) === index,
        )
        .sort((a, b) => a.section.localeCompare(b.section) || a.version.localeCompare(b.version));
      const originals = sources.filter(
        (entry) => isManPage(entry) && entry.name === name && matchesColumn(entry),
      );
      return { id, translations, sourcePresent: originals.length > 0, originals };
    }),
  }));
}
