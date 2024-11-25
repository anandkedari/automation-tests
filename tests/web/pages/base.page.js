/** @typedef {import('@playwright/test').Page} Page */
let page;

export const initPage = (p) => { 
    page = p 
};

/** @returns {Page} */
export const getPage = () => page;

export const waitForVisible = async (selector, timeout = 5000) => {
  await getPage().locator(selector).waitFor({ 
    state: 'visible',
    timeout 
  });
};