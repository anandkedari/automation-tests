import { getPage, waitForVisible } from "./base.page";
import {homePage} from "./home.page";
import {billpayPage} from "./billpay.page";

const SELECTORS = {
  TOPNAVIGATION_HOME_ICON: 'div[id="headerPanel"] ul li[class="home"]',
  TOPNAVIGATION_ABOUTUS_ICON: 'div[id="headerPanel"] ul li[class="aboutus"]',
  TOPNAVIGATION_CONTACT_ICON: 'div[id="headerPanel"] ul li[class="contact"]',
  SECTION_ACCOUNT_SERVICES: 'ul[class="services"]',
  SECTION_ABOUT_US: 'h1[class="title"]:has-text("ParaSoft Demo Website")',
  SECTION_CONTACT_FORM: 'form[id="contactForm"]',
  SECTION_ACCOUNT_OVERVIEW_TABLE : 'div[id="rightPanel"] table[id="accountTable"]',
  LOGOUT_LINK: 'div[id="leftPanel"] a:has-text("Log Out")',
  LEFT_OPEN_NEW_ACCOUNT_LINK : 'div[id="leftPanel"] li:has-text("Open New Account")',
  LEFT_ACCOUNT_OVERVIEW_LINK : 'div[id="leftPanel"] li:has-text("Accounts Overview")',
  LEFT_TRANSFER_FUNDS_LINK : 'div[id="leftPanel"] li:has-text("Transfer Funds")',
  LEFT_BILLPAY_LINK : 'div[id="leftPanel"] li:has-text("Bill Pay")',
  EXISTING_ACCOUNT_DROPDOWN : 'select[id="fromAccountId"]',
  OPEN_ACCOUNT_BUTTON : 'div[id="openAccountForm"] input[value="Open New Account"]',  
  NEW_ACCOUNTNO_LABEL : 'div[id="openAccountResult"] a[id="newAccountId"]',
  ACCOUNT_BALANCE_LABEL : (accountNo) => {
    return `table[id="accountTable"] td:has(> a[href="activity.htm?id=${accountNo}"]) + td`
  },
  ACCOUNT_AVAILABLE_BALANCE_LABEL : (accountNo) => {
    return `table[id="accountTable"] td:has(> a[href="activity.htm?id=${accountNo}"]) + td + td`
  },
};

export const dashboardPage = {
    async isAccountTableVisible(){
        return await getPage().locator(SELECTORS.SECTION_ACCOUNT_OVERVIEW_TABLE).isVisible();
    },
    async isAccServicesSectionVisible(){
        return await getPage().locator(SELECTORS.SECTION_ACCOUNT_SERVICES).isVisible();
    },
    async isAboutUsSectionVisible(){
        return await getPage().locator(SELECTORS.SECTION_ABOUT_US).isVisible();
    },
    async isContactFormVisible(){
        return await getPage().locator(SELECTORS.SECTION_CONTACT_FORM).isVisible();
    },
    async clickHomeIcon(){
        await (getPage().locator(SELECTORS.TOPNAVIGATION_HOME_ICON).click());
        return this;
    },
    async logOut(){
        await (getPage().locator(SELECTORS.LOGOUT_LINK).click());
        return homePage;
    },
    async clickOnHomeIcon(){
        await (getPage().locator(SELECTORS.TOPNAVIGATION_HOME_ICON).click());
        return this;
    },
    async clickOnAboutUsIcon(){
        await (getPage().locator(SELECTORS.TOPNAVIGATION_ABOUTUS_ICON).click());
        return this;
    },
    async clickOnContactIcon(){
        await (getPage().locator(SELECTORS.TOPNAVIGATION_CONTACT_ICON).click());
        return this;
    },
    async openNewAccount(){
        await (getPage().locator(SELECTORS.LEFT_OPEN_NEW_ACCOUNT_LINK).click());        
        await getPage().locator(SELECTORS.EXISTING_ACCOUNT_DROPDOWN).waitFor({ state: 'attached' });
        await getPage().waitForFunction((selector) => document.querySelector(selector).options.length > 0, SELECTORS.EXISTING_ACCOUNT_DROPDOWN);

        await (getPage().locator(SELECTORS.OPEN_ACCOUNT_BUTTON).click());
        await waitForVisible(SELECTORS.NEW_ACCOUNTNO_LABEL);
        return await (getPage().locator(SELECTORS.NEW_ACCOUNTNO_LABEL).textContent());
    },
    async getAccountBalance(accountNo){
        await (getPage().locator(SELECTORS.LEFT_ACCOUNT_OVERVIEW_LINK).click());
        await waitForVisible(SELECTORS.ACCOUNT_BALANCE_LABEL(accountNo));
        return await (getPage().locator(SELECTORS.ACCOUNT_BALANCE_LABEL(accountNo)).textContent());
    },
    async getAvailableBalance(accountNo){
        await waitForVisible(SELECTORS.ACCOUNT_AVAILABLE_BALANCE_LABEL(accountNo));
        return await (getPage().locator(SELECTORS.ACCOUNT_AVAILABLE_BALANCE_LABEL(accountNo)).textContent());
    },
    async navigateToBillPay(){
        await waitForVisible(SELECTORS.LEFT_BILLPAY_LINK);
        await (getPage().locator(SELECTORS.LEFT_BILLPAY_LINK).click());        
        return billpayPage;
    },    
};

export default dashboardPage;


