import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  use: {
    baseURL: 'http://127.0.0.1:4322',
    browserName: 'chromium',
    channel: process.env.CI ? undefined : 'chrome',
    colorScheme: 'light',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'node tools/preview.mjs',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: !process.env.CI,
  },
});
