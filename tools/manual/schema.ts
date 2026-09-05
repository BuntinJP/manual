import { z } from 'zod';

export const identitySchema = z
  .object({
    provider: z.string(),
    product: z.string(),
    version: z.string(),
    variant: z.string(),
    section: z.string(),
    name: z.string(),
  })
  .strict();
export type Identity = z.infer<typeof identitySchema>;
const sha = z.string().regex(/^[a-f0-9]{64}$/);
export const manifestSchema = z
  .object({
    schemaVersion: z.literal(1),
    identity: identitySchema,
    source: z
      .object({
        sha256: sha,
        format: z.enum(['roff', 'html']),
        origin: z.string(),
        retrievedAt: z.string(),
      })
      .strict(),
    extraction: z.object({ selector: z.string().optional() }).strict(),
  })
  .strict();
export type Manifest = z.infer<typeof manifestSchema>;
export type Inline =
  | { tag: 'text'; text: string }
  | { tag: 'code' | 'em' | 'strong'; text: string }
  | { tag: 'link'; text: string; href: string }
  | { tag: 'br' }
  | { tag: 'style-open' | 'style-close'; style: 'strong' | 'em' };
export const inlineSchema: z.ZodType<Inline> = z.discriminatedUnion('tag', [
  z.object({ tag: z.literal('text'), text: z.string() }).strict(),
  z.object({ tag: z.enum(['code', 'em', 'strong']), text: z.string() }).strict(),
  z.object({ tag: z.literal('link'), text: z.string(), href: z.string() }).strict(),
  z.object({ tag: z.literal('br') }).strict(),
  z
    .object({ tag: z.enum(['style-open', 'style-close']), style: z.enum(['strong', 'em']) })
    .strict(),
]);
export const segmentSchema = z
  .object({
    id: z.string().regex(/^s\d{4,}$/),
    kind: z.string(),
    text: z.string(),
    protected: z.array(
      z.object({ token: z.string().regex(/^\[\[p\d+\]\]$/), inline: inlineSchema }).strict(),
    ),
  })
  .strict();
export type Segment = z.infer<typeof segmentSchema>;
export type Block =
  | { type: 'heading'; level: number; anchor: string; segment: string }
  | { type: 'paragraph'; segment: string }
  | { type: 'literal'; text: string }
  | { type: 'list'; ordered: boolean; items: Block[][] }
  | { type: 'definition'; entries: { term: string; body: Block[] }[] }
  | { type: 'table'; rows: Block[][][]; caption?: string; headers?: boolean[][] }
  | { type: 'quote'; blocks: Block[] };
export const blockSchema: z.ZodType<Block> = z.lazy(() =>
  z.discriminatedUnion('type', [
    z
      .object({
        type: z.literal('heading'),
        level: z.number().int().min(2).max(6),
        anchor: z.string(),
        segment: z.string(),
      })
      .strict(),
    z.object({ type: z.literal('paragraph'), segment: z.string() }).strict(),
    z.object({ type: z.literal('literal'), text: z.string() }).strict(),
    z
      .object({
        type: z.literal('list'),
        ordered: z.boolean(),
        items: z.array(z.array(blockSchema)),
      })
      .strict(),
    z
      .object({
        type: z.literal('definition'),
        entries: z.array(z.object({ term: z.string(), body: z.array(blockSchema) }).strict()),
      })
      .strict(),
    z
      .object({
        type: z.literal('table'),
        rows: z.array(z.array(z.array(blockSchema))),
        caption: z.string().optional(),
        headers: z.array(z.array(z.boolean())).optional(),
      })
      .strict(),
    z.object({ type: z.literal('quote'), blocks: z.array(blockSchema) }).strict(),
  ]),
);
export const irSchema = z
  .object({
    schemaVersion: z.literal(1),
    parserVersion: z.literal(1),
    sourceSha256: sha,
    extraction: z
      .object({
        selector: z.string(),
        kind: z.enum(['semantic-html', 'preformatted-manual']),
        warnings: z.array(z.string()),
      })
      .strict(),
    segments: z.array(segmentSchema),
    blocks: z.array(blockSchema),
  })
  .strict();
export type ManualIR = z.infer<typeof irSchema>;
export const translationSchema = z
  .object({
    schemaVersion: z.literal(1),
    sourceSha256: sha,
    irSha256: sha,
    locale: z.literal('ja'),
    segments: z.record(z.string(), z.string()),
  })
  .strict();
export type Translation = z.infer<typeof translationSchema>;

export const glossarySchema = z
  .object({ locale: z.literal('ja'), terms: z.record(z.string(), z.string()) })
  .strict();
