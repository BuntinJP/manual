export interface CatalogEntry {
  id: string;
  href: string;
  name: string;
  section: string;
  provider: string;
  product: string;
  version: string;
  variant: string;
  sourceSha256?: string;
  sourceUrl?: string;
  description: string;
  sourceFormat?: string;
}

export function parseCommandQuery(value: string): { name: string; section?: string } {
  const query = value.trim().toLowerCase();
  const man = query.match(/^man\s+(?:(\d\w*)\s+)?([^\s]+)$/);
  if (man) return { name: man[2] ?? '', ...(man[1] ? { section: man[1] } : {}) };
  const sectioned = query.match(/^([^\s()]+)\((\d\w*)\)$/);
  if (sectioned) return { name: sectioned[1] ?? '', section: sectioned[2] };
  return { name: query };
}

export function searchCatalog(
  entries: CatalogEntry[],
  query: string,
  provider = '',
): CatalogEntry[] {
  const parsed = parseCommandQuery(query);
  return entries
    .filter((entry) => {
      if (provider && entry.provider !== provider) return false;
      if (parsed.section && entry.section.toLowerCase() !== parsed.section) return false;
      if (!parsed.name) return true;
      const text = [
        entry.name,
        entry.provider,
        entry.product,
        entry.version,
        entry.variant,
        entry.description,
      ]
        .join(' ')
        .toLowerCase();
      return parsed.name.split(/\s+/).every((word) => text.includes(word));
    })
    .sort((a, b) => {
      const exactA = a.name.toLowerCase() === parsed.name ? 0 : 1;
      const exactB = b.name.toLowerCase() === parsed.name ? 0 : 1;
      return (
        exactA - exactB ||
        a.name.localeCompare(b.name, 'en') ||
        a.provider.localeCompare(b.provider, 'en') ||
        a.version.localeCompare(b.version, 'en')
      );
    });
}
