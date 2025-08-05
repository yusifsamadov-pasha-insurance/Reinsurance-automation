import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/tests',
  timeout: 60 * 1000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});

