// @ts-check

import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://manual.buntin.dev',
  integrations: [
    starlight({
      title: 'manual',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/BuntinJP/manual',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'MANUAL TOP',
          link: '/top/',
        },
        {
          label: 'isync(mbsync)',
          autogenerate: { directory: 'isync' },
        },
        {
          label: 'MEGAcmd',
          collapsed: false,
          autogenerate: { directory: 'megacmd', collapsed: true },
        },
      ],
    }),
  ],
});
