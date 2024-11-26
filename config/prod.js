module.exports = {
  //sample usage of configs
  url: 'https://parabank.parasoft.com',
  timeouts: {
    pageLoad: 30000,
    element: 10000,
    api: 5000
  },
  browser: {
    viewport: { width: 1920, height: 1080 },
    headless: false
  },
  reporting: {
    video: false,
    screenshots: 'only-on-failure'
  },
  retries: {
    web: 0,
    api: 1
  },
  logLevel: 'info'
}