import { test as base } from '@playwright/test';
import { initPage } from '../pages/base.page';

export const test = base.extend({
  page: async ({ page }, use) => {
    initPage(page);
    await use(page);
  }
});