const { defineConfig, devices } = require('@playwright/test');
const env = process.env.ENV || 'prod';
const config = require(`./config/${env}`);

module.exports = defineConfig({
  testDir: './tests/specs/',
  fullyParallel: false,
  // testConfig: {
  //   mode: 'serial'
  // },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  timeout: config.timeouts.pageLoad,
  retries: config.retries.web,

  projects: [
    {
      name: 'web',
      testDir: 'tests/web/specs',
      use: {
        browserName: process.env.BROWSER || 'chromium',
        baseURL: config.urls.web
      }
    },
    {
      name: 'api',
      testDir: './tests/api/specs',
      use: { baseURL: config.urls.api }
    },
  ],
});

