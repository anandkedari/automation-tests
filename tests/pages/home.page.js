import { getPage } from './base.page';
import {registrationPage} from "./registration.page";
import {dashboardPage} from "./dashboard.page";

const SELECTORS = {
  REGISTER_LINK: '#loginPanel > p:nth-child(3) > a',
  USERNAME_INPUT: 'input[name="username"]',
  PASSWORD_INPUT: 'input[name="password"]',
  LOGIN_BUTTON: 'input[value="Log In"]',
};

export const homePage = {

    async navigateToHomePage (){
        await getPage().goto('/');
        return this;
    },
    async isOnHomePage (){
        let title = await getPage().title();
        console.log("Title =====> ", title)
        return this;
    },
    async navigateToRegistrationPage (){
        await getPage().locator(SELECTORS.REGISTER_LINK).click();
        return registrationPage;
    },
    async login(data){
        await getPage().locator(SELECTORS.USERNAME_INPUT).fill(data.username);
        await getPage().locator(SELECTORS.PASSWORD_INPUT).fill(data.password);
        await getPage().locator(SELECTORS.LOGIN_BUTTON).click();
        return dashboardPage;
    }

};

export default homePage;






