/** @typedef {import('@playwright/test').Page} Page */
let page;

export const initPage = (p) => { 
    page = p 
};

/** @returns {Page} */
export const getPage = () => page;

export const waitForVisible = async (selector, timeout = 5000) => {
  await getPage().waitForLoadState("domcontentloaded");
  await getPage().locator(selector).waitFor({ 
    state: 'visible',
    timeout 
  });
};

export const selectItemFromDropdown = async (selector, item, timeout = 5000) => {
    await getPage().waitForLoadState("domcontentloaded");
    await getPage().locator(selector).waitFor({ state: 'attached' });
    await getPage().waitForFunction((selector) => document.querySelector(selector).options.length > 0, selector);
    await getPage().selectOption(selector, { value: item });
};