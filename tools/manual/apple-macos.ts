import { execFile } from 'node:child_process';
import { readFile, realpath } from 'node:fs/promises';
import { promisify } from 'node:util';
import { fetchSource, ingest, sha256 } from './core';
import type { Manifest } from './schema';

const execFileAsync = promisify(execFile);

export const APPLE_MACOS_RELEASE = {
  platform: {
    name: 'macOS' as const,
    version: '26.6.2',
    build: '25G83',
    releasedAt: '2026-08-17',
    releaseUrl: 'https://developer.apple.com/news/releases/?id=08172026j',
  },
  distribution: {
    release: 'macOS 26.0',
    repository: 'apple-oss-distributions/distribution-macOS',
    commit: '4e290a9b9d3723c65d2a606223d41eb90ecdbf99',
    path: 'release.json',
    sha256: '8d1e504492c4ac0f071a6dd8187f5cb98f60b3e3ca17be769e31310fa4497232',
  },
  commands: {
    find: {
      installedPath: '/usr/share/man/man1/find.1',
      expectedInstalledSha256: '72de98371bbac79f8dc59b50e4d506c23fc82add3da9c5bd60a36f8bacc0cf25',
      component: { name: 'shell_cmds', version: 'shell_cmds-326' },
      github: {
        project: 'shell_cmds',
        tag: 'shell_cmds-326',
        commit: 'b33f386ac431f17d4799b5662f20ff2ddf0773b9',
        path: 'find/find.1',
        sha256: '72de98371bbac79f8dc59b50e4d506c23fc82add3da9c5bd60a36f8bacc0cf25',
      },
    },
    osascript: {
      installedPath: '/usr/share/man/man1/osascript.1',
      expectedInstalledSha256: 'aca3abc5c3d0641ea7dd33d2d1604b9de2fa7400d0f42433faaaaa72879397da',
      component: { name: 'osascript', version: 'macOS 26.6.2 system manual' },
      availability:
        'No matching project or manual source is listed in the pinned macOS 26.0 Apple Open Source release manifest.',
    },
    osacompile: {
      installedPath: '/usr/share/man/man1/osacompile.1',
      expectedInstalledSha256: '1c0ec408575316d5c299aadfaa5faf562c95ffbf9c9fe89104db6f4c0ad3c131',
      component: { name: 'osacompile', version: 'macOS 26.6.2 system manual' },
      availability:
        'No matching project or manual source is listed in the pinned macOS 26.0 Apple Open Source release manifest.',
    },
    launchctl: {
      installedPath: '/usr/share/man/man1/launchctl.1',
      expectedInstalledSha256: 'cf8752dd8eb8c3370c7d03b333430aa68a665c907c475ea407cb1b6542083ae2',
      component: { name: 'launchd', version: 'macOS 26.6.2 system manual' },
      availability:
        'launchd is absent from the pinned macOS 26.0 release manifest; the older public GitHub manual is not presented as the current macOS manual.',
    },
    tclsh: {
      installedPath: '/usr/share/man/man1/tclsh.1tcl',
      expectedInstalledSha256: '198e1ed330b79b5958d96ecff53816fcbda3fa617b644d1fbd22322c0cec6786',
      component: { name: 'Tcl', version: '8.5.9' },
      github: {
        project: 'tcl',
        tag: 'tcl-149',
        commit: '2f1630a601bb1b1312035fe6279c89950e5a0a7c',
        path: 'tcl/tcl/doc/tclsh.1',
        sha256: 'd63f0514a4947a7135ba88885cbb35bfc4782df4032e7ea1dc79cc86caf11143',
        license: {
          path: 'tcl/tcl/license.terms',
          sha256: '69da730bc55e01b735e71493993f716f8fad7978c8880024f8ed6138f2683a1f',
        },
      },
    },
    tar: {
      installedPath: '/usr/share/man/man1/tar.1',
      expectedInstalledSha256: 'e7e0f61433da7fd2002d1c8b9dadb7bf497302eede7b488828d136b4a117a553',
      component: { name: 'bsdtar / libarchive', version: '3.5.3 / 3.7.4' },
      github: {
        project: 'libarchive',
        tag: 'libarchive-158',
        commit: '3136a5066323506878093401fd85827643f5289f',
        path: 'libarchive/tar/bsdtar.1',
        sha256: 'e7e0f61433da7fd2002d1c8b9dadb7bf497302eede7b488828d136b4a117a553',
        license: {
          path: 'libarchive/COPYING',
          sha256: 'b2cdf763345de2de34cebf54394df3c61a105c3b71288603c251f2fa638200ba',
        },
      },
    },
    swift: {
      installedPath: '/Library/Developer/CommandLineTools/usr/share/man/man1/swift.1',
      expectedInstalledSha256: '28bbf6a0c380baa8f31d674fa6fe5641d1b31f1cbaa9bdd5e4ea11809921cc8b',
      developerTools: true,
      component: {
        name: 'Apple Swift',
        version: '6.3.3 (swiftlang-6.3.3.1.3, swift-driver 1.148.6)',
      },
      availability:
        'The installed Command Line Tools manual has no matching file in the pinned macOS Apple Open Source release manifest.',
    },
    sqlite3: {
      installedPath: '/usr/share/man/man1/sqlite3.1',
      expectedInstalledSha256: 'd6c2da94222035f9cf16a72a91e204e0b325067ee1d68a149c86f7b8859cb8ef',
      component: { name: 'SQLite', version: '3.51.0' },
      availability:
        'No SQLite project or sqlite3 manual source is listed in the pinned macOS 26.0 Apple Open Source release manifest.',
    },
  },
} as const;

export type AppleManualName = keyof typeof APPLE_MACOS_RELEASE.commands;
export const APPLE_MANUAL_NAMES = Object.keys(APPLE_MACOS_RELEASE.commands) as AppleManualName[];

type Fetcher = (url: string) => Promise<{ bytes: Uint8Array; origin: string }>;

const rawUrl = (repository: string, commit: string, path: string) =>
  `https://raw.githubusercontent.com/${repository}/${commit}/${path}`;

const checkedFetch = async (fetcher: Fetcher, url: string, expectedSha256: string) => {
  const result = await fetcher(url);
  const actual = sha256(result.bytes);
  if (actual !== expectedSha256)
    throw new Error(`Pinned Apple source SHA-256 mismatch for ${url}: ${actual}`);
  return result;
};

export function parseAppleManualNames(value: string): AppleManualName[] {
  const names = value.split(',').map((name) => name.trim());
  if (!names.length || names.some((name) => !name))
    throw new Error('--commands requires a comma-separated command list.');
  const unknown = names.filter((name) => !APPLE_MANUAL_NAMES.includes(name as AppleManualName));
  if (unknown.length) throw new Error(`Unsupported Apple manual command: ${unknown.join(', ')}`);
  if (new Set(names).size !== names.length) throw new Error('--commands contains a duplicate.');
  return names as AppleManualName[];
}

export async function installedMacosVersion() {
  const { stdout: version } = await execFileAsync('/usr/bin/sw_vers', ['-productVersion']);
  const { stdout: build } = await execFileAsync('/usr/bin/sw_vers', ['-buildVersion']);
  return { version: version.trim(), build: build.trim() };
}

export async function acquireAppleMacosManuals(
  root: string,
  names: AppleManualName[],
  options: { fetcher?: Fetcher; platform?: { version: string; build: string } } = {},
) {
  if (!names.length) throw new Error('Select at least one Apple manual command.');
  const platform = options.platform ?? (await installedMacosVersion());
  if (
    platform.version !== APPLE_MACOS_RELEASE.platform.version ||
    platform.build !== APPLE_MACOS_RELEASE.platform.build
  )
    throw new Error(
      `This route is pinned to macOS ${APPLE_MACOS_RELEASE.platform.version} (${APPLE_MACOS_RELEASE.platform.build}); found ${platform.version} (${platform.build}).`,
    );
  const fetcher = options.fetcher ?? fetchSource;
  const distributionUrl = rawUrl(
    APPLE_MACOS_RELEASE.distribution.repository,
    APPLE_MACOS_RELEASE.distribution.commit,
    APPLE_MACOS_RELEASE.distribution.path,
  );
  const distribution = await checkedFetch(
    fetcher,
    distributionUrl,
    APPLE_MACOS_RELEASE.distribution.sha256,
  );
  const releaseData = JSON.parse(new TextDecoder().decode(distribution.bytes));
  if (
    releaseData.release !== APPLE_MACOS_RELEASE.distribution.release ||
    !Array.isArray(releaseData.projects)
  )
    throw new Error('Pinned Apple release manifest declares an unexpected release.');
  const releaseProjects = new Map(
    releaseData.projects.map((item: unknown) => {
      if (
        !item ||
        typeof item !== 'object' ||
        typeof (item as { project?: unknown }).project !== 'string' ||
        typeof (item as { tag?: unknown }).tag !== 'string'
      )
        throw new Error('Pinned Apple release manifest has an invalid project entry.');
      return [(item as { project: string }).project, (item as { tag: string }).tag] as const;
    }),
  );

  const results: { name: AppleManualName; path: string; sourceKind: string }[] = [];
  for (const name of names) {
    const spec = APPLE_MACOS_RELEASE.commands[name];
    const installedPath = spec.installedPath;
    const resolvedInstalledPath = await realpath(installedPath);
    const installedBytes = new Uint8Array(await readFile(resolvedInstalledPath));
    const installedSha256 = sha256(installedBytes);
    if (installedSha256 !== spec.expectedInstalledSha256)
      throw new Error(
        `Installed ${name}(1) SHA-256 does not match the pinned macOS 26.6.2 snapshot: ${installedSha256}`,
      );
    const materials: Parameters<typeof ingest>[1]['materials'] = [
      {
        role: 'release-manifest',
        path: 'provenance/distribution-release.json',
        bytes: distribution.bytes,
        origin: distribution.origin,
      },
    ];
    let sourceBytes: Uint8Array = installedBytes;
    let sourceOrigin = `installed:${installedPath}`;
    let sourceKind: NonNullable<Manifest['provenance']>['sourceKind'] =
      'developerTools' in spec && spec.developerTools
        ? 'installed-apple-developer-tools-manual'
        : 'installed-apple-manual';
    let exactInstalledBytes: boolean | undefined;
    let githubOrigin: string | undefined;
    if ('github' in spec) {
      if (releaseProjects.get(spec.github.project) !== spec.github.tag)
        throw new Error(
          `Pinned Apple release manifest does not map ${spec.github.project} to ${spec.github.tag}.`,
        );
      githubOrigin = rawUrl(
        `apple-oss-distributions/${spec.github.project}`,
        spec.github.commit,
        spec.github.path,
      );
      const githubSource = await checkedFetch(fetcher, githubOrigin, spec.github.sha256);
      exactInstalledBytes = sha256(githubSource.bytes) === installedSha256;
      if (exactInstalledBytes) {
        sourceBytes = githubSource.bytes;
        sourceOrigin = githubSource.origin;
        sourceKind = 'apple-oss-github-exact';
      } else {
        materials.push({
          role: 'upstream-candidate',
          path: 'provenance/apple-oss-source.roff',
          bytes: githubSource.bytes,
          origin: githubSource.origin,
        });
      }
      if ('license' in spec.github && spec.github.license) {
        const licenseOrigin = rawUrl(
          `apple-oss-distributions/${spec.github.project}`,
          spec.github.commit,
          spec.github.license.path,
        );
        const license = await checkedFetch(fetcher, licenseOrigin, spec.github.license.sha256);
        materials.push({
          role: 'license',
          path: `licenses/${spec.github.license.path.split('/').at(-1)}`,
          bytes: license.bytes,
          origin: license.origin,
        });
      }
    }
    const github = 'github' in spec ? spec.github : undefined;
    const availability =
      'availability' in spec
        ? spec.availability
        : exactInstalledBytes
          ? 'The pinned Apple Open Source manual is byte-identical to the installed manual.'
          : 'The pinned Apple Open Source source is retained as related material; the installed manual is the macOS 26.6.2 source.';
    const path = await ingest(root, {
      identity: {
        provider: 'apple',
        product: 'macos',
        version: APPLE_MACOS_RELEASE.platform.version,
        variant: APPLE_MACOS_RELEASE.platform.build.toLowerCase(),
        section: '1',
        name,
      },
      format: 'roff',
      bytes: sourceBytes,
      origin: sourceOrigin,
      provenance: {
        sourceKind,
        platform: APPLE_MACOS_RELEASE.platform,
        component: spec.component,
        installedPath,
        resolvedInstalledPath,
        appleOpenSource: {
          distributionRelease: APPLE_MACOS_RELEASE.distribution.release,
          distributionCommit: APPLE_MACOS_RELEASE.distribution.commit,
          ...(github
            ? {
                project: github.project,
                tag: github.tag,
                commit: github.commit,
                path: github.path,
                exactInstalledBytes,
              }
            : {}),
          availability,
        },
        notes: [
          'macOS 26.6.2 and the Apple Open Source macOS 26.0 publication are separate version facts.',
          ...(githubOrigin && !exactInstalledBytes
            ? ['The GitHub candidate is not labeled as the current installed manual.']
            : []),
        ],
      },
      materials,
    });
    results.push({ name, path, sourceKind });
  }
  return results;
}
