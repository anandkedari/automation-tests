// @ts-check
import { test, expect } from '../../common/fixtures';
import { homePage } from '../../pages/home.page'
import data from '../../common/testdata';
import { dashboardPage } from '../../pages/dashboard.page';

let testData;
test.describe("Registration - Customer ", async () => {
    test("is able to register", async({ page, sharedData }) => {
      testData = data.randomizer(data.get.new_user);
      sharedData.set('username', testData.username);
      sharedData.set('password', testData.password);
      expect(await 
        (await (await (await homePage.navigateToHomePage())
            .navigateToRegistrationPage())
            .enterRegistrationsDetails(testData))
            .getRegistrationMessge())
      .toBe("Your account was created successfully. You are now logged in.");
      await dashboardPage.logOut();
    });
    test("is able to login after registration", async({ page, sharedData }) => {
      expect(await (await (await 
        homePage.navigateToHomePage())
        .login(await sharedData.get('username'), await sharedData.get('password')))
        .isLoggedIn(testData))
      .toBe(true);
    });
});