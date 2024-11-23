// @ts-check
import { test } from '../common/fixtures';
import { homePage } from '../pages/home.page';
import data from '../common/testdata';

test.describe("Customer ", () => {
    test("is able to register", async({ page }) => {
      let testData = data.get.new_user;
      testData = 
      await (await (await 
        homePage.navigateToHomePage())
            .navigateToRegistrationPage())
                .enterRegistrationsDetails(testData);

    });

    test("is able to login after registration", async() => {
       let testData = data.get.registered_user;
       console.log(testData);
    });
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
