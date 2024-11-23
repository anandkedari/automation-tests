// @ts-check
import { test } from '../common/fixtures';
import { homePage } from '../pages/home.page';
import data from '../common/testdata';

test.describe("Customer ", () => {
  let testData = data.randomizer(data.get.new_user);
    test("is able to register", async({ page }) => {
      await (await (await 
        homePage.navigateToHomePage())
            .navigateToRegistrationPage())
                .enterRegistrationsDetails(testData);
        //TODO: add assertions
    });

    test("is able to login after registration", async() => {
       //TODO: Add implementations
    });
});