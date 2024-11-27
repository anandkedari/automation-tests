// @ts-check
import { test, expect } from '../../common/fixtures';
import { homePage } from '../../pages/home.page'
import data from '../../common/testdata';
import { dashboardPage } from '../../pages/dashboard.page';

test.describe("Account Services - Customer ", () => {
    let newAccountNo;
    test("is able to open new account and validate account balances", async({ page, sharedData }) => {
        newAccountNo = await (await (await 
            homePage.navigateToHomePage())
            .login(await sharedData.get('username'), await sharedData.get('password')))
            .openNewAccount();
        console.log("New account number - " + newAccountNo);
        sharedData.set('newAccountNo', newAccountNo);
        let accBalance = (await dashboardPage.getAccountBalance(newAccountNo))?.trim();
        let availableBal = (await dashboardPage.getAvailableBalance(newAccountNo))?.trim();
        expect(accBalance).toMatch(/\$\d+.00/);
        expect(availableBal).toMatch(/\$\d+.00/);
    });
    test("is able to transfer funds from newly created account", async({ page, sharedData }) => {
        let transferAmount = "11";
        let successMessage = await (await (await (await (await 
                                homePage.navigateToHomePage())
                                .login(await sharedData.get('username'), await sharedData.get('password')))
                                .navigateToFundTransfer())
                                .transferFunds(transferAmount, newAccountNo)).successMessage();
        
        expect(successMessage)
        .toContain(`$${transferAmount}.00 has been transferred from account #${newAccountNo} to account #`);
    });
    test("is able to pay bills from newly created account", async({ page, sharedData }) => {
        let billpayData = data.get.billpayment;
        sharedData.set('amount', `${billpayData.amount}`);
        let successMessage = await (await (await (await (await 
                                homePage.navigateToHomePage())
                                .login(await sharedData.get('username'), await sharedData.get('password')))
                                .navigateToBillPay())
                                .payBill(billpayData, newAccountNo))
                                .successMessage();
        expect(successMessage)
        .toContain(`Bill Payment to TestName in the amount of $5.00 from account ${newAccountNo} was successful`);
    });
});