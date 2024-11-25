// @ts-check
import { test, expect } from '../common/fixtures';
import { homePage } from '../pages/home.page';
import data from '../common/testdata';
import { dashboardPage } from '../pages/dashboard.page';

test.describe("Account Services - Customer ", () => {
    let testData = data.get.registered_user;
    let newAccountNo;
    test("is able to open new account and validate account balances", async({ page }) => {
        newAccountNo = await (await (await 
            homePage.navigateToHomePage())
            .login(testData))
            .openNewAccount();
        console.log("New account number - " + newAccountNo);
        console.log("Balance - " + await dashboardPage.getAccountBalance(newAccountNo) + 
        ", AvailableBalance - " + await dashboardPage.getAvailableBalance(newAccountNo));
    });
    // test("is able to transfer funds from newly created account", async({ page }) => {
    // });
    // test("is able to pay bills from newly created account", async({ page }) => {
    // });
});