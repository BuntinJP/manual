import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        manual: z
          .object({
            id: z.string(),
            href: z.string(),
            name: z.string(),
            section: z.string(),
            provider: z.string(),
            product: z.string(),
            version: z.string(),
            variant: z.string(),
            sourceSha256: z.string(),
            sourceUrl: z.string(),
            sourceFormat: z.string(),
            description: z.string(),
          })
          .optional(),
      }),
    }),
  }),
};
