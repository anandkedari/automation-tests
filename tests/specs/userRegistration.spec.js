// @ts-check
import { test, expect } from '../common/fixtures';
import { homePage } from '../pages/home.page';
import data from '../common/testdata';
import { dashboardPage } from '../pages/dashboard.page';

test.describe.serial("Customer ", async () => {
  let testData;

    test("is able to register", async({ page }) => {
      testData = data.randomizer(data.get.new_user);
      expect(await 
        (await (await (await homePage.navigateToHomePage())
            .navigateToRegistrationPage())
            .enterRegistrationsDetails(testData))
            .getRegistrationMessge())
      .toBe("Your account was created successfully. You are now logged in.");
      await dashboardPage.logOut();
    });

    test("is able to login after registration", async({ page }) => {
      // testData = data.get.registered_user;
      expect(await (await (await 
        homePage.navigateToHomePage())
        .login(testData))
        .isAccountTableVisible())
      .toBe(true);
    });
});