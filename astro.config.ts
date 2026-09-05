import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import catalog from './src/data/manual-catalog.json';
import type { CatalogEntry } from './src/lib/catalog';

const manuals = catalog as CatalogEntry[];
const manualGroups = [...new Set(manuals.map((entry) => entry.provider))]
  .sort()
  .map((provider) => ({
    label: provider,
    items: manuals
      .filter((entry) => entry.provider === provider)
      .map((entry) => ({
        label: `${entry.name}(${entry.section}) · ${entry.version}`,
        link: entry.href,
      })),
  }));
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
      head: [{ tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } }],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: false,
      sidebar: [
        {
          label: 'マニュアルを探す',
          link: '/',
        },
        ...manualGroups,
        {
          label: 'isync',
          items: [{ autogenerate: { directory: 'isync' } }],
        },
        {
          label: 'MEGAcmd',
          collapsed: true,
          items: [{ autogenerate: { directory: 'megacmd', collapsed: true } }],
        },
        { label: 'Wrangler', items: [{ autogenerate: { directory: 'wrangler' } }] },
        { label: 'このサイトについて', link: '/about/' },
      ],
    }),
  ],
});
