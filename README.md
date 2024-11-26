# Playwright Test Automation Framework
Boilerplate for Playwright with Javascript parabank.parasoft.com

## Setup
1. Install dependencies: `npm install`
2. Configure environments in `playwright.config.js`


## Running Tests
-  Web
   All web tests on specific browser (Chrome, Safari, Mozilla): 
      `npm run web:chrome` or `npm run web:safari` or `npm run web:firefox`
-  API
   All api tests :`npm run api`
-  Both
   All web and api tests (Ensure tests are not dependent): 
      `npm run test`

## Framework Structure
- `/tests` - Test specs
- `/pages` - Page objects
- `/fixtures` - Test fixtures
- `/utils` - Helper functions

