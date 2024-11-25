import { getPage } from "./base.page";
import {homePage} from "./home.page";

const SELECTORS = {
  TOPNAVIGATION_HOME_ICON: 'div[id="headerPanel"] ul li[class="home"]',
  TOPNAVIGATION_ABOUTUS_ICON: 'div[id="headerPanel"] ul li[class="aboutus"]',
  TOPNAVIGATION_CONTACT_ICON: 'div[id="headerPanel"] ul li[class="contact"]',
  TOPNAVIGATION_CONTACT_ICON: 'div[id="headerPanel"] ul li[class="contact"]',
  MAIN_CONTENT_ACCOUNT_SERVICES_LABEL: 'div[id="rightPanel"] li:has-text("Hello")',
  LOGOUT_LINK: 'div[id="leftPanel"] a:has-text("Log Out")',
};

export const dashboardPage = {
    async isAccountServicesVisible(){
        return await (getPage().locator(SELECTORS.MAIN_CONTENT_ACCOUNT_SERVICES_LABEL).isVisible());
    },
    async clickHomeIcon(){
        await (getPage().locator(SELECTORS.MAIN_CONTENT_ACCOUNT_SERVICES_LABEL).click());
        return this;
    },
    async logOut(){
        await (getPage().locator(SELECTORS.LOGOUT_LINK).click());
        await getPage().pause(100);
        return homePage;
    }
};

export default dashboardPage;


