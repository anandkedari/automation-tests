export const ENVIRONMENT = (process.env.ENV || 'prod').toLowerCase();
export const TESTFOLDER = (process.env.SPECFOLDER || 'tests/specs/web');
export const BROWSER_NAME = (process.env.BROWSER || 'chromium');