import definitions from '../data/manual-providers.json' with { type: 'json' };

export interface ManualProvider {
  id: string;
  label: string;
  description: string;
  legacyDirectory?: string;
  collapsed?: boolean;
}

export const manualProviders: ManualProvider[] = definitions;

export function activeProviders(ids: Iterable<string>): ManualProvider[] {
  const present = new Set(ids);
  for (const id of present) {
    if (!manualProviders.some((provider) => provider.id === id))
      throw new Error(`Unknown provider "${id}". Register it in src/data/manual-providers.json.`);
  }
  return manualProviders.filter((provider) => present.has(provider.id));
}

export const providerHomeHref = (id: string) => `/${id}/home/`;

export function providerForPage(id: string, provider?: string): string | undefined {
  if (provider) return provider;
  const directory = id.split('/')[0] ?? '';
  return manualProviders.find((item) => item.id === directory || item.legacyDirectory === directory)
    ?.id;
}

export function providerLabel(provider: string): string {
  return manualProviders.find((item) => item.id === provider)?.label ?? provider;
}
