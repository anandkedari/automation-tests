import { ENVIRONMENT, TESTFOLDER, BROWSER_NAME } from './common/constants';
const { defineConfig } = require('@playwright/test');
const config = require(`./config/${ENVIRONMENT}`);

module.exports = defineConfig({
  fullyParallel: false,
  // testConfig: {
  //   mode: 'serial'
  // },
  testDir: TESTFOLDER,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL:  config.url,
  },
  timeout: config.timeouts.pageLoad,
  retries: config.retries.web,

  projects: [
    {
      name: 'test',
      use: {
        browserName: BROWSER_NAME
      }
    }
  ],
});

