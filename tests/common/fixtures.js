import { test as base, expect as exp, request as req} from '@playwright/test';
import { initPage } from '../pages/base.page';

export const test = base.extend({
  sharedData: {
    username:"",
    password:"",
    newAccountNo:"",
    findTransactionAmount:""
  },

  request: async ({}, use) => {
    const context = await request.newContext();
    await use(context);
  },

  page: async ({ page }, use) => {
    initPage(page);
    await use(page);
  }
});

test.describe.configure({ mode: 'serial' });

export const expect = exp;
export const request = req;