import { test as base, expect as exp} from '@playwright/test';
import { initPage } from '../web/pages/base.page';

export const test = base.extend({
  page: async ({ page }, use) => {
    initPage(page);
    await use(page);
  }
});

test.describe.configure({ mode: 'serial' });

export const expect = exp;
