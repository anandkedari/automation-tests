module.exports = {
  urls: {
    web: 'https://parabank.parasoft.com',
    api: 'https://parabank.parasoft.com/parabank',
  },
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
    test: 0,
    api: 1
  },
  logLevel: 'info'
}