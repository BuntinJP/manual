const legacyProviders = new Set(['isync', 'megacmd', 'wrangler']);

export function providerForPage(id: string, provider?: string): string | undefined {
  if (provider) return provider;
  const directory = id.split('/')[0] ?? '';
  return legacyProviders.has(directory) ? directory : undefined;
}

export function providerLabel(provider: string): string {
  const labels: Record<string, string> = {
    freebsd: 'FreeBSD',
    gnu: 'GNU',
    isync: 'isync',
    megacmd: 'MEGAcmd',
    wrangler: 'Wrangler',
  };
  return labels[provider] ?? provider;
}
