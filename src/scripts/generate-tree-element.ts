#!/usr/bin/env bun

import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

const CONTENT_ROOT_DIR = 'src/content/docs';

const RE_MDX = /\.(mdx|md)$/i;
const RE_HOME = /^home\.(mdx|md)$/i;
const RE_TOP = /^top\.(mdx|md)$/i;
const RE_HIDDEN = /^[._]/;
const MARKER_START = /<!--\s*TREE_START:([^>]+)\s*-->/g;
const MARKER_END = /<!--\s*TREE_END\s*-->/g;

const caches = {
  files: new Map<string, string[]>(),
  hasHome: new Map<string, boolean>(),
  hasTop: new Map<string, boolean>(),
};

const htmlEscape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m] || m,
  );

const toUrl = (relPath: string, fileName?: string) => {
  const segments = [relPath, fileName]
    .filter(Boolean)
    .join('/')
    .replace(RE_MDX, '')
    .toLowerCase()
    .replace(/\/+/g, '/')
    .replace(/^\/+|\/+$/g, '');
  return `/${segments}/`;
};

const getFiles = async (dirPath: string): Promise<string[]> => {
  if (caches.files.has(dirPath)) return caches.files.get(dirPath) || [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && RE_MDX.test(e.name) && !RE_HIDDEN.test(e.name))
      .map((e) => e.name)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    caches.files.set(dirPath, files);
    return files;
  } catch {
    caches.files.set(dirPath, []);
    return [];
  }
};

const getDirs = async (dirPath: string): Promise<string[]> => {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && !RE_HIDDEN.test(e.name))
      .map((e) => e.name)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  } catch {
    return [];
  }
};

const hasFileType = async (dirPath: string, pattern: RegExp): Promise<boolean> => {
  const cache = pattern === RE_HOME ? caches.hasHome : caches.hasTop;
  if (cache.has(dirPath)) return cache.get(dirPath) || false;

  try {
    const files = await getFiles(dirPath);
    const result = files.some((f) => pattern.test(f));
    cache.set(dirPath, result);
    return result;
  } catch {
    cache.set(dirPath, false);
    return false;
  }
};

const buildPaths = (rootDir: string, targetDir = '') => {
  const absRoot = path.resolve(rootDir);
  const absTarget = path.resolve(absRoot, targetDir);
  const relTarget = path.relative(absRoot, absTarget).replace(/\\/g, '/');
  return { absRoot, absTarget, relTarget: relTarget === '.' ? '' : relTarget };
};

type TreeNode = {
  name: string;
  isDir: boolean;
  absPath: string;
  relPath: string;
  children?: TreeNode[];
  hasHome?: boolean;
  hasTop?: boolean;
};

const buildTree = async (absPath: string, relPath: string): Promise<TreeNode> => {
  const root: TreeNode = {
    name: path.basename(absPath),
    isDir: true,
    absPath,
    relPath,
    children: [],
    hasHome: await hasFileType(absPath, RE_HOME),
    hasTop: await hasFileType(absPath, RE_TOP),
  };

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || !current.isDir) continue;

    const [dirs, files] = await Promise.all([getDirs(current.absPath), getFiles(current.absPath)]);

    current.children = [];

    for (const dirName of dirs) {
      const childAbs = path.join(current.absPath, dirName);
      const childRel = [current.relPath, dirName].filter(Boolean).join('/');
      const childNode: TreeNode = {
        name: dirName,
        isDir: true,
        absPath: childAbs,
        relPath: childRel,
        children: [],
        hasHome: await hasFileType(childAbs, RE_HOME),
        hasTop: await hasFileType(childAbs, RE_TOP),
      };

      current.children.push(childNode);
      queue.push(childNode);
    }

    for (const fileName of files) {
      if (RE_HOME.test(fileName) || RE_TOP.test(fileName)) continue;

      const childAbs = path.join(current.absPath, fileName);
      current.children.push({
        name: fileName,
        isDir: false,
        absPath: childAbs,
        relPath: current.relPath,
      });
    }
  }

  return root;
};

const renderTree = (node: TreeNode, prefix = '', isRoot = true, isLast = true): string[] => {
  const lines: string[] = [];
  const connector = isRoot ? '' : isLast ? '└── ' : '├── ';
  const linePrefix = isRoot ? '' : prefix;

  let displayName: string;
  let url: string | undefined;

  if (node.isDir) {
    if (isRoot && node.relPath === '') {
      displayName = 'TOP';
      url = node.hasTop ? toUrl('top') : undefined;
    } else {
      displayName = node.name;
      url = node.hasHome ? toUrl(node.relPath, 'home') : undefined;
    }
  } else {
    const baseName = node.name.replace(RE_MDX, '');
    displayName = baseName;
    url = toUrl(node.relPath, baseName);
  }

  lines.push(
    `${linePrefix}${connector}${url ? `<a href="${url}">${htmlEscape(displayName)}</a>` : htmlEscape(displayName)}`,
  );

  const children = node.children ?? [];
  if (children.length > 0) {
    const nextPrefix = isRoot ? '' : prefix + (isLast ? '    ' : '│   ');
    children.forEach((child, idx) => {
      const childIsLast = idx === children.length - 1;
      lines.push(...renderTree(child, nextPrefix, false, childIsLast));
    });
  }

  return lines;
};

const collectDirs = (node: TreeNode, predicate: (n: TreeNode) => boolean): string[] => {
  const result: string[] = [];
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) continue;

    if (current.isDir && predicate(current)) {
      result.push(current.relPath);
    }

    if (current.children) {
      queue.push(...current.children.filter((c) => c.isDir));
    }
  }

  return [...new Set(result)];
};

const _generateAllTrees = async (rootDir: string, targetDir = '', sections: string[] = ['all']) => {
  const { absTarget, relTarget } = buildPaths(rootDir, targetDir);
  const tree = await buildTree(absTarget, relTarget);
  const output: string[] = [];

  if (sections.includes('all')) {
    output.push('<!-- Tree: all -->', '<pre>', ...renderTree(tree), '</pre>');
  }

  if (sections.includes('home')) {
    const homeDirs = collectDirs(tree, (n) => n.hasHome || false);
    const { absRoot } = buildPaths(rootDir);

    for (const homeDir of homeDirs) {
      const homeAbs = path.resolve(absRoot, homeDir);
      const homeTree = await buildTree(homeAbs, homeDir);
      output.push(
        `<!-- Tree: home-level @ /${homeDir} -->`,
        '<pre>',
        ...renderTree(homeTree),
        '</pre>',
      );
    }
  }

  if (sections.includes('top')) {
    const topDirs = collectDirs(tree, (n) => n.hasTop || false);
    const { absRoot } = buildPaths(rootDir);

    for (const topDir of topDirs) {
      const topAbs = path.resolve(absRoot, topDir);
      const topTree = await buildTree(topAbs, topDir);
      output.push(
        `<!-- Tree: top-level @ /${topDir} -->`,
        '<pre>',
        ...renderTree(topTree),
        '</pre>',
      );
    }
  }

  return output.join('\n');
};

const collectAllFiles = async (dirPath: string): Promise<string[]> => {
  const files: string[] = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (RE_HIDDEN.test(entry.name)) continue;
      const absEntry = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        files.push(...(await collectAllFiles(absEntry)));
      } else if (entry.isFile()) {
        files.push(absEntry);
      }
    }
  } catch {
    return [];
  }

  return files;
};

const normalizeMarkerPath = (markerPath: string) => {
  const trimmed = markerPath.trim();
  if (!trimmed || trimmed === '/') return '';
  return trimmed.replace(/^\/+|\/+$/g, '');
};

const buildTreeForMarker = async (rootDir: string, marker: string) => {
  const normalized = normalizeMarkerPath(marker);
  const { absRoot } = buildPaths(rootDir);
  const absTarget = path.resolve(absRoot, normalized);
  const relTargetRaw = path.relative(absRoot, absTarget);

  if (relTargetRaw.startsWith('..') || path.isAbsolute(relTargetRaw)) {
    throw new Error(`Marker path escapes root: ${marker}`);
  }

  const relTarget = relTargetRaw.replace(/\\/g, '/');

  try {
    const stat = await fs.stat(absTarget);
    if (!stat.isDirectory()) {
      throw new Error(`Marker path is not a directory: ${marker}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Unable to access marker path "${marker}": ${error.message}`);
    }
    throw error;
  }

  const tree = await buildTree(absTarget, relTarget === '.' ? '' : relTarget);
  const lines = renderTree(tree);
  return `<pre>\n${lines.join('\n')}\n</pre>`;
};

type MarkerReplacement = {
  start: number;
  end: number;
  content: string;
};

const updateTreeMarkersInContent = async (
  filePath: string,
  content: string,
  rootDir: string,
): Promise<{ updated: string; changed: boolean }> => {
  const replacements: MarkerReplacement[] = [];
  const startRegex = new RegExp(MARKER_START.source, 'g');

  for (const match of content.matchAll(startRegex)) {
    const startIndex = match.index;
    const markerPath = match[1];
    const startMarker = match[0];

    const endRegex = new RegExp(MARKER_END.source, 'g');
    endRegex.lastIndex = startRegex.lastIndex;
    const endMatch = endRegex.exec(content);

    if (!endMatch) {
      console.warn(`Missing TREE_END marker for start marker in ${filePath}`);
      continue;
    }

    const endMarker = endMatch[0];
    const endIndex = endMatch.index + endMarker.length;

    let replacementSection: string | null = null;

    try {
      const body = await buildTreeForMarker(rootDir, markerPath);
      replacementSection = `${startMarker}\n${body}\n${endMarker}`;
    } catch (error) {
      console.warn(
        `Skipping marker in ${filePath}:`,
        error instanceof Error ? error.message : error,
      );
    }

    const existingSection = content.slice(startIndex, endIndex);

    if (replacementSection && existingSection !== replacementSection) {
      replacements.push({ start: startIndex, end: endIndex, content: replacementSection });
    }

    startRegex.lastIndex = endIndex;
  }

  if (replacements.length === 0) {
    return { updated: content, changed: false };
  }

  let updated = content;
  for (const { start, end, content: replacement } of replacements.sort(
    (a, b) => b.start - a.start,
  )) {
    updated = `${updated.slice(0, start)}${replacement}${updated.slice(end)}`;
  }

  return { updated, changed: true };
};

const updateTreeMarkers = async () => {
  const { absRoot } = buildPaths(CONTENT_ROOT_DIR);
  const files = await collectAllFiles(absRoot);
  const updatedFiles: string[] = [];

  for (const filePath of files) {
    let content: string;
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch {
      continue;
    }

    if (!content.includes('TREE_START')) continue;

    const { updated, changed } = await updateTreeMarkersInContent(
      filePath,
      content,
      CONTENT_ROOT_DIR,
    );

    if (!changed) continue;

    await fs.writeFile(filePath, updated, 'utf8');
    updatedFiles.push(path.relative(process.cwd(), filePath));
  }

  return updatedFiles;
};

async function main() {
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      target: { type: 'string', short: 't', default: '' },
      help: { type: 'boolean', short: 'h' },
    },
    strict: true,
    allowPositionals: true,
  });

  if (values.help) {
    console.log(`Usage: bun generate-tree-element.ts [options]
Options:
  -t, --target <dir>     Target directory under root (default: "")
  -r, --root <dir>       Root content directory (default: "${CONTENT_ROOT_DIR}")
  -s, --sections <list>  Sections to generate: all,home,top (default: "all,home,top")
  -h, --help             Show this help`);
    return;
  }

  // const output = 'output'; //await generateAllTrees(values.root || CONTENT_ROOT_DIR, values.target, sections);

  // // src/scripts/tree-output.htmlに出力
  // const outputPath = path.resolve('src/scripts/tree-output.html');
  // await fs.writeFile(outputPath, output, 'utf8');
  // console.log(`Tree output written to: ${outputPath}`);

  const updatedFiles = await updateTreeMarkers();
  if (updatedFiles.length > 0) {
    console.log('Updated tree markers in:');
    for (const f of updatedFiles) {
      console.log(`  - ${f}`);
    }
  } else {
    console.log('No tree marker updates needed.');
  }
}

if (process.argv[1] === import.meta.url.replace('file://', '')) {
  main();
}
