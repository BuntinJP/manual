import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import catalog from './src/data/manual-catalog.json';
import type { CatalogEntry } from './src/lib/catalog';
import { activeProviders, manualProviders, providerHomeHref } from './src/lib/providers';

const manuals = catalog as CatalogEntry[];
const manualGroups = activeProviders([
  ...manuals.map((entry) => entry.provider),
  ...manualProviders.filter((provider) => provider.legacyDirectory).map((provider) => provider.id),
]).map((provider) => ({
  label: provider.label,
  collapsed: provider.collapsed ?? false,
  items: [
    ...(provider.legacyDirectory
      ? [{ autogenerate: { directory: provider.legacyDirectory, collapsed: true } }]
      : [{ label: 'HOME', link: providerHomeHref(provider.id) }]),
    ...manuals
      .filter((entry) => entry.provider === provider.id)
      .map((entry) => ({
        label: `${entry.name}(${entry.section}) · ${entry.version}`,
        link: entry.href,
      })),
  ],
}));

// Keep preload and @font-face URLs identical. Content hashes invalidate the
// long-lived font cache whenever the bundled font bytes change.
const cicaFonts = [
  { name: 'Regular', weight: 400 },
  { name: 'Bold', weight: 700 },
].map(({ name, weight }) => {
  const path = `/fonts/cica/Cica-${name}.woff2`;
  const hash = createHash('sha256')
    .update(readFileSync(new URL(`./public${path}`, import.meta.url)))
    .digest('hex')
    .slice(0, 12);
  return { href: `${path}?v=${hash}`, weight };
});
export default defineConfig({
  site: 'https://manual.buntin.dev',
  markdown: {
    processor: satteri({ features: { headingAttributes: true, smartPunctuation: false } }),
  },
  integrations: [
    starlight({
      title: 'manual',
      defaultLocale: 'root',
      locales: { root: { label: '日本語', lang: 'ja' } },
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/Header.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/Empty.astro',
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
      },
      head: [
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
        ...cicaFonts.map(({ href }) => ({
          tag: 'link' as const,
          attrs: { rel: 'preload', href, as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        })),
        {
          tag: 'style',
          content: cicaFonts
            .map(
              ({ href, weight }) =>
                `@font-face{font-family:Cica;src:url("${href}") format("woff2");font-style:normal;font-weight:${weight};font-display:block}`,
            )
            .join('\n'),
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: false,
      sidebar: [
        {
          label: 'マニュアルを探す',
          link: '/',
        },
        ...manualGroups,
        { label: 'このサイトについて', link: '/about/' },
      ],
    }),
  ],
});
