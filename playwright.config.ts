import { defineConfig } from '@playwright/test';

const externalTarget = process.env.MANUAL_TEST_BASE_URL;
const target = new URL(externalTarget || 'http://127.0.0.1:4322');
if (
  !['http:', 'https:'].includes(target.protocol) ||
  target.username ||
  target.password ||
  target.pathname !== '/' ||
  target.search ||
  target.hash
)
  throw new Error('MANUAL_TEST_BASE_URL must be an HTTP(S) origin without credentials or a path.');

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  use: {
    baseURL: target.origin,
    browserName: 'chromium',
    channel: process.env.CI ? undefined : 'chrome',
    colorScheme: 'light',
    screenshot: 'only-on-failure',
  },
  webServer: externalTarget
    ? undefined
    : {
        command: 'node tools/preview.mjs',
        url: 'http://127.0.0.1:4322',
        reuseExistingServer: !process.env.CI,
      },
});
