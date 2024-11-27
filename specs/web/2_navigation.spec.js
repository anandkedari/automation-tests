// @ts-check
import { test, expect } from '../../common/fixtures';
import { homePage } from '../../pages/home.page'
import data from '../../common/testdata';
import { dashboardPage } from '../../pages/dashboard.page';

test.describe("Navigation - Customer ", () => {
    test("is redirected to respective page on clicking navigation menu", async({ page, sharedData }) => {
        expect(await (await (await (await 
            homePage.navigateToHomePage())
            .login(await sharedData.get('username'), await sharedData.get('password')))
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