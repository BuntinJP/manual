import { describe, expect, test } from 'bun:test';
import {
  APPLE_MACOS_RELEASE,
  APPLE_MANUAL_NAMES,
  parseAppleManualNames,
} from '../../tools/manual/apple-macos';

describe('pinned Apple macOS manual selection', () => {
  test('requires an explicit supported command set without duplicates or an all shortcut', () => {
    expect(parseAppleManualNames('find,tar')).toEqual(['find', 'tar']);
    expect(() => parseAppleManualNames('')).toThrow('requires');
    expect(() => parseAppleManualNames('all')).toThrow('Unsupported');
    expect(() => parseAppleManualNames('find,find')).toThrow('duplicate');
    expect(() => parseAppleManualNames('find,curl')).toThrow('curl');
  });

  test('pins all and only the requested collection commands to one OS build', () => {
    expect([...APPLE_MANUAL_NAMES].sort().join(',')).toBe(
      ['find', 'launchctl', 'osacompile', 'osascript', 'sqlite3', 'swift', 'tar', 'tclsh']
        .sort()
        .join(','),
    );
    expect(APPLE_MACOS_RELEASE.platform).toMatchObject({ version: '26.6.2', build: '25G83' });
    for (const command of APPLE_MANUAL_NAMES)
      expect(APPLE_MACOS_RELEASE.commands[command].expectedInstalledSha256).toMatch(
        /^[a-f0-9]{64}$/,
      );
    expect(APPLE_MACOS_RELEASE.commands.find.github.sha256).toBe(
      APPLE_MACOS_RELEASE.commands.find.expectedInstalledSha256,
    );
    expect(APPLE_MACOS_RELEASE.commands.tar.github.sha256).toBe(
      APPLE_MACOS_RELEASE.commands.tar.expectedInstalledSha256,
    );
    expect(APPLE_MACOS_RELEASE.commands.tclsh.github.sha256).not.toBe(
      APPLE_MACOS_RELEASE.commands.tclsh.expectedInstalledSha256,
    );
  });
});
