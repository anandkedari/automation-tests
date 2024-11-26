// @ts-check
import { test, expect } from '../../common/fixtures';
import { homePage } from '../pages/home.page';
import data from '../../common/testdata';
import { dashboardPage } from '../pages/dashboard.page';

let testData;
test.describe.serial("Registration - Customer ", async () => {
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
      expect(await (await (await 
        homePage.navigateToHomePage())
        .login(testData))
        .isLoggedIn(testData))
      .toBe(true);
    });
});

test.describe.serial("Navigation - Customer ", () => {
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

test.describe.serial("Account Services - Customer ", () => {
    let newAccountNo;
    test("is able to open new account and validate account balances", async({ page }) => {
        newAccountNo = await (await (await 
            homePage.navigateToHomePage())
            .login(testData))
            .openNewAccount();
        console.log("New account number - " + newAccountNo);
        let accBalance = (await dashboardPage.getAccountBalance(newAccountNo))?.trim();
        let availableBal = (await dashboardPage.getAvailableBalance(newAccountNo))?.trim();
        expect(accBalance).toBe('$100.00');
        expect(availableBal).toBe('$100.00');
    });
    test("is able to transfer funds from newly created account", async({ page }) => {
        let transferAmount = "11";
        let successMessage = await (await (await (await (await 
                                homePage.navigateToHomePage())
                                .login(testData)).navigateToFundTransfer())
                                .transferFunds(transferAmount, newAccountNo)).successMessage();
        
        expect(successMessage)
        .toContain(`$${transferAmount}.00 has been transferred from account #${newAccountNo} to account #`);
    });
    test("is able to pay bills from newly created account", async({ page }) => {
        let billpayData = data.get.billpayment;
        let successMessage = await (await (await (await (await 
                                homePage.navigateToHomePage())
                                .login(testData)).navigateToBillPay())
                                .payBill(billpayData, newAccountNo))
                                .successMessage();
        expect(successMessage)
        .toContain(`Bill Payment to TestName in the amount of $11.00 from account ${newAccountNo} was successful`);
    });
});