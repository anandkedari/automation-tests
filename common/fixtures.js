import { test as base, expect as exp, request as req} from '@playwright/test';
import { initPage } from '../pages/base.page';
import fs from 'fs';
const SHARED_FILE = './shared-data.json';

export const test = base.extend({
  sharedData: {
  set: (key, value) => {
    const data = fs.existsSync(SHARED_FILE) ? JSON.parse(fs.readFileSync(SHARED_FILE, 'utf8')) : {};
    data[key] = value;
    fs.writeFileSync(SHARED_FILE, JSON.stringify(data));
  },
  get: (key) => {
    return JSON.parse(fs.readFileSync(SHARED_FILE, 'utf8'))[key];
  }
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