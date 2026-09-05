import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parseHTML } from 'linkedom';
import type { Block, Inline, ManualIR, Segment } from './schema';

type NodeLike = {
  nodeType: number;
  textContent: string | null;
  childNodes: ArrayLike<NodeLike>;
  tagName?: string;
  getAttribute?: (name: string) => string | null;
  innerHTML?: string;
  querySelectorAll?: (selector: string) => ArrayLike<NodeLike>;
};
const discarded = new Set([
  'SCRIPT',
  'STYLE',
  'IFRAME',
  'OBJECT',
  'EMBED',
  'FORM',
  'INPUT',
  'BUTTON',
  'NAV',
  'HEADER',
  'FOOTER',
  'NOSCRIPT',
  'TEMPLATE',
  'SVG',
  'MATH',
]);
const blockTags = new Set([
  'P',
  'DIV',
  'SECTION',
  'ARTICLE',
  'MAIN',
  'PRE',
  'UL',
  'OL',
  'DL',
  'TABLE',
  'BLOCKQUOTE',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'HR',
]);
const normalize = (text: string) => text.replace(/[\s\u00a0]+/g, ' ').trim();
export function safeHref(raw: string, origin: string): string | undefined {
  if (!raw.trim()) return undefined;
  if (/^#[^\s]*$/.test(raw)) return raw;
  try {
    const url = new URL(raw, /^https?:/.test(origin) ? origin : undefined);
    return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

export async function roffToHtml(source: string): Promise<{ html: string; diagnostics: string }> {
  // mandoc supports .so inclusion. Reject requests even inside conditional/macro bodies,
  // and reject control-character changes that could disguise a later request.
  if (
    /(?:^|[ \t])['.][ \t]*(?:so|mso|sy|pso|pi|open|opena|write|writem|cf|nx|cc|c2|do)(?:[ \t\r\n]|$)/m.test(
      source,
    )
  ) {
    throw new Error(
      'External roff inclusion, file access, shell and control-character requests are unsupported. Supply a self-contained source.',
    );
  }
  const cwd = await mkdtemp(join(tmpdir(), 'manual-mandoc-'));
  try {
    const proc = Bun.spawn(['/usr/bin/mandoc', '-Thtml'], {
      cwd,
      stdin: new Blob([source]),
      stdout: 'pipe',
      stderr: 'pipe',
      env: { PATH: '/usr/bin:/bin', LANG: 'en_US.UTF-8' },
    });
    const timer = setTimeout(() => proc.kill(), 15_000);
    try {
      const [html, diagnostics, code] = await Promise.all([
        new Response(proc.stdout).text(),
        new Response(proc.stderr).text(),
        proc.exited,
      ]);
      if (code > 1 || !html.includes('<'))
        throw new Error(`mandoc failed (${code}): ${diagnostics.slice(0, 1000)}`);
      return { html, diagnostics };
    } finally {
      clearTimeout(timer);
    }
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
}

export function parseManualHtml(
  html: string,
  sourceSha256: string,
  origin: string,
  selector?: string,
): ManualIR {
  const { document } = parseHTML(
    html.includes('<html') ? html : `<html><body>${html}</body></html>`,
  );
  const hasLegacyHeadings = (node: { innerHTML: string }) =>
    (
      node.innerHTML.match(
        /(?:^|\n)[ \t]*<(?:b|strong)(?:\s[^>]*)?>[A-Z][A-Z0-9 _-]+<\/(?:b|strong)>/g,
      ) ?? []
    ).length >= 2;
  const legacy = Array.from(document.querySelectorAll('pre')).find(
    (node) => node.querySelector('a[name]') || hasLegacyHeadings(node),
  );
  const selected = selector
    ? document.querySelector(selector)
    : (document.querySelector('.manual-text') ??
      legacy ??
      document.querySelector('main, article, [role="main"]') ??
      document.body);
  if (!selected)
    throw new Error(`No manual content found${selector ? ` for selector ${selector}` : ''}.`);
  const selectedName =
    selector ??
    (selected === legacy
      ? 'pre:has(a[name])'
      : selected.classList.contains('manual-text')
        ? '.manual-text'
        : selected.tagName.toLowerCase());
  const segments: Segment[] = [];
  const anchors = new Set<string>();
  const makeAnchor = (candidate: string) => {
    const base =
      candidate.replace(/[^\p{L}\p{N}_-]/gu, '-').replace(/^-+|-+$/g, '') ||
      `section-${anchors.size + 1}`;
    let value = base;
    for (let index = 2; anchors.has(value); index++) value = `${base}-${index}`;
    anchors.add(value);
    return value;
  };
  const inline = (node: NodeLike, heading = false): Inline[] => {
    if (node.nodeType === 3) return [{ tag: 'text', text: node.textContent ?? '' }];
    const tag = node.tagName ?? '';
    if (
      discarded.has(tag) ||
      (node.getAttribute?.('hidden') !== null && node.getAttribute?.('hidden') !== undefined)
    )
      return [];
    const text = normalize(node.textContent ?? '');
    if (tag === 'BR') return [{ tag: 'br' }];
    if (tag === 'A' && !heading && !node.getAttribute?.('class')?.includes('permalink')) {
      const href = safeHref(node.getAttribute?.('href') ?? '', origin);
      if (href && text) return [{ tag: 'link', text, href }];
      if (text && node.getAttribute?.('class')?.split(/\s+/).includes('Xr'))
        return [{ tag: 'code', text }];
    }
    if (
      !heading &&
      (['STRONG', 'EM'].includes(tag) ||
        (selected.tagName !== 'PRE' && ['B', 'I'].includes(tag) && /\s/.test(text))) &&
      text
    ) {
      const style = ['EM', 'I'].includes(tag) ? 'em' : 'strong';
      return [
        { tag: 'style-open', style },
        ...Array.from(node.childNodes).flatMap((child) => inline(child)),
        { tag: 'style-close', style },
      ];
    }
    if (!heading && ['CODE', 'VAR', 'KBD', 'SAMP', 'B', 'STRONG', 'I', 'EM'].includes(tag) && text)
      return [
        {
          tag: ['I', 'EM', 'VAR'].includes(tag)
            ? 'em'
            : ['B', 'STRONG'].includes(tag)
              ? 'strong'
              : 'code',
          text,
        },
      ];
    return Array.from(node.childNodes).flatMap((child) => inline(child, heading));
  };
  const addSegment = (nodes: NodeLike[], kind: string, heading = false): string => {
    const tokens: Segment['protected'] = [];
    let value = '';
    for (const item of nodes.flatMap((node) => inline(node, heading))) {
      if (item.tag === 'text') {
        // Options, formatting conversions and literal template delimiters in plain prose
        // are protected too; source markup is not required to preserve these tokens.
        value += item.text.replace(
          /\[\[p\d+\]\]|(?<![\w-])--?[A-Za-z][A-Za-z0-9_-]*|%[-+#0-9.]*[A-Za-z%]/g,
          (match) => {
            const token = `[[p${tokens.length}]]`;
            tokens.push({ token, inline: { tag: 'code', text: match } });
            return token;
          },
        );
      } else {
        const token = `[[p${tokens.length}]]`;
        tokens.push({ token, inline: item });
        value += token;
      }
    }
    const id = `s${String(segments.length + 1).padStart(4, '0')}`;
    segments.push({ id, kind, text: normalize(value), protected: tokens });
    return id;
  };
  const children = (node: NodeLike): Block[] => {
    const result: Block[] = [];
    let pending: NodeLike[] = [];
    const flush = () => {
      if (normalize(pending.map((item) => item.textContent ?? '').join('')))
        result.push({ type: 'paragraph', segment: addSegment(pending, 'paragraph') });
      pending = [];
    };
    for (const child of Array.from(node.childNodes)) {
      if (discarded.has(child.tagName ?? '')) continue;
      if (blockTags.has(child.tagName ?? '')) {
        flush();
        result.push(...convert(child));
      } else pending.push(child);
    }
    flush();
    return result;
  };
  const convert = (node: NodeLike): Block[] => {
    const tag = node.tagName ?? '';
    if (discarded.has(tag)) return [];
    if (/^H[1-6]$/.test(tag))
      return [
        {
          type: 'heading',
          level: Math.min(6, Number(tag.slice(1)) + 1),
          anchor: makeAnchor(node.getAttribute?.('id') ?? normalize(node.textContent ?? '')),
          segment: addSegment(Array.from(node.childNodes), 'heading', true),
        },
      ];
    if (tag === 'PRE')
      return [{ type: 'literal', text: (node.textContent ?? '').replace(/^\n|\n$/g, '') }];
    if (tag === 'UL' || tag === 'OL')
      return [
        {
          type: 'list',
          ordered: tag === 'OL',
          items: Array.from(node.childNodes)
            .filter((item) => item.tagName === 'LI')
            .map(children),
        },
      ];
    if (tag === 'DL') {
      const entries: { term: string; body: Block[] }[] = [];
      for (const item of Array.from(node.childNodes)) {
        if (item.tagName === 'DT')
          entries.push({ term: addSegment(Array.from(item.childNodes), 'term'), body: [] });
        if (item.tagName === 'DD') {
          if (!entries.length) entries.push({ term: addSegment([], 'term'), body: [] });
          entries[entries.length - 1].body.push(...children(item));
        }
      }
      return [{ type: 'definition', entries }];
    }
    if (tag === 'TABLE') {
      const rows = Array.from(node.querySelectorAll?.('tr') ?? []).map((row) =>
        Array.from(row.childNodes).filter((cell) => ['TD', 'TH'].includes(cell.tagName ?? '')),
      );
      const caption = Array.from(node.childNodes).find((child) => child.tagName === 'CAPTION');
      return [
        {
          type: 'table',
          rows: rows.map((row) => row.map(children)),
          headers: rows.map((row) => row.map((cell) => cell.tagName === 'TH')),
          ...(caption ? { caption: addSegment(Array.from(caption.childNodes), 'caption') } : {}),
        },
      ];
    }
    if (tag === 'BLOCKQUOTE') return [{ type: 'quote', blocks: children(node) }];
    return children(node);
  };
  const warnings: string[] = [];
  let blocks: Block[];
  if (
    selected.tagName === 'PRE' &&
    (selected.querySelector('a[name]') || hasLegacyHeadings(selected))
  ) {
    warnings.push(
      'Legacy preformatted HTML: visual line wrapping is normalized in prose. Original HTML remains available for fidelity review.',
    );
    const fragment = (markup: string) => {
      const element = parseHTML(
        `<html><body><div>${markup}</div></body></html>`,
      ).document.querySelector('div');
      if (!element) throw new Error('Cannot parse manual HTML fragment.');
      return element;
    };
    blocks = [];
    let section = '';
    const legacyMarkup = selected.innerHTML.replace(
      /(?:^|\n)[ \t]*<(b|strong)(?:\s[^>]*)?>([A-Z][A-Z0-9 _-]+)<\/\1>[ \t]*(?=\n|$)/g,
      (_, tag, title) => `\n<a name="${title.replace(/ /g, '_')}"><${tag}>${title}</${tag}></a>`,
    );
    const chunks = legacyMarkup.split(/(<a\s+[^>]*name=["'][^"']+["'][^>]*>[\s\S]*?<\/a>)/i);
    for (const chunk of chunks) {
      if (!chunk.trim()) continue;
      const heading = /^<a\s+[^>]*name=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>$/i.exec(chunk);
      if (heading) {
        section = heading[1];
        const element = fragment(heading[2]);
        blocks.push({
          type: 'heading',
          level: 2,
          anchor: makeAnchor(section),
          segment: addSegment(Array.from(element.childNodes), 'heading', true),
        });
        continue;
      }
      if (!section) continue; // The running page header is outside the manual sections.
      for (const raw of chunk.split(/\n[ \t]*\n/)) {
        if (!raw.trim()) continue;
        const lines = raw.replace(/^\n+|\n+$/g, '').split('\n');
        if (section === 'SYNOPSIS') {
          blocks.push({
            type: 'literal',
            text: (fragment(raw).textContent ?? '')
              .replace(/^\n+/, '')
              .replace(/^ {5}/gm, '')
              .trimEnd(),
          });
          continue;
        }
        // A leading command line in EXAMPLES is literal. Following indented prose
        // remains a separate segment instead of accidentally translating shell code.
        if (section === 'EXAMPLES' && /^\s*<(?:b|code)>/i.test(lines[0])) {
          blocks.push({
            type: 'literal',
            text: (fragment(lines.shift() ?? '').textContent ?? '').trim(),
          });
        }
        const markup = lines.join('\n');
        if (!normalize(fragment(markup).textContent ?? '')) continue;
        const unitRows = lines
          .filter((line) => line.trim())
          .map((line) => /^\s*(<(?:b|code)>[^<]+<\/(?:b|code)>)[ \t]+(.+)$/.exec(line));
        if (unitRows.length > 1 && unitRows.every((row) => row !== null)) {
          blocks.push({
            type: 'definition',
            entries: unitRows.map((row) => {
              if (!row) throw new Error('Invalid legacy definition row.');
              const term = fragment(row[1]);
              const body = fragment(row[2]);
              return {
                term: addSegment(Array.from(term.childNodes), 'term'),
                body: [
                  {
                    type: 'paragraph',
                    segment: addSegment(Array.from(body.childNodes), 'paragraph'),
                  },
                ],
              };
            }),
          });
          continue;
        }
        const firstLine = (lines[0] ?? '').trimStart();
        const delimiter = /(?: {2,}|\t+)/.exec(firstLine);
        const candidate = delimiter ? firstLine.slice(0, delimiter.index) : firstLine;
        // Only the first physical line can contain a definition term. Never let
        // a multiline HTML regex consume prose in search of a later delimiter.
        const candidateNode = fragment(candidate);
        const outsideText = Array.from(candidateNode.childNodes)
          .filter((node) => node.nodeType === 3)
          .map((node) => node.textContent ?? '')
          .join('');
        const isTerm =
          /^<(?:b|code)>/i.test(candidate) && /^[\s.,;:|()[\]{}+-]*$/.test(outsideText);
        if (isTerm) {
          const bodyMarkup = [
            delimiter ? firstLine.slice(delimiter.index + delimiter[0].length) : '',
            ...lines.slice(1),
          ].join('\n');
          const body = fragment(bodyMarkup);
          blocks.push({
            type: 'definition',
            entries: [
              {
                term: addSegment(Array.from(candidateNode.childNodes), 'term'),
                body: normalize(body.textContent ?? '')
                  ? [
                      {
                        type: 'paragraph',
                        segment: addSegment(Array.from(body.childNodes), 'paragraph'),
                      },
                    ]
                  : [],
              },
            ],
          });
        } else {
          const element = fragment(markup);
          blocks.push({
            type: 'paragraph',
            segment: addSegment(Array.from(element.childNodes), 'paragraph'),
          });
        }
      }
    }
  } else blocks = convert(selected);
  if (!blocks.length || !segments.some((segment) => segment.text))
    throw new Error(
      'The selected document contains no translatable manual text. Specify --selector.',
    );
  return {
    schemaVersion: 1,
    parserVersion: 1,
    sourceSha256,
    extraction: {
      selector: selectedName,
      kind:
        selected.tagName === 'PRE' &&
        (selected.querySelector('a[name]') || hasLegacyHeadings(selected))
          ? 'preformatted-manual'
          : 'semantic-html',
      warnings,
    },
    segments,
    blocks,
  };
}
