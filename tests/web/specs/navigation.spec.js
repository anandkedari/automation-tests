// @ts-check
import { test, expect } from '../../common/fixtures';
import { homePage } from '../pages/home.page';
import data from '../../common/testdata';
import { dashboardPage } from '../pages/dashboard.page';

test.describe("Navigation - Customer ", () => {
    let testData = data.get.registered_user;
    test("is redirected to respective page on clicking navigation menu", async({ page }) => {
        expect(await (await (await (await 
            homePage.navigateToHomePage())
            .login(testData))
            .clickHomeIcon())
            .isAccServicesSectionVisible()).toBe(true);
        expect(await (await 
            dashboardPage.clickOnAboutUsIcon())
            .isAboutUsSectionVisible()).toBe(true);
        expect(await (await 
            dashboardPage.clickOnContactIcon())
            .isContactFormVisible()).toBe(true); 
        await dashboardPage.logOut();
    });
});