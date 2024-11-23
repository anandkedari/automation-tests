import { getPage } from './base.page';
import {registrationPage} from "./registration.page";

const SELECTORS = {
  REGISTER_LINK: '#loginPanel > p:nth-child(3) > a',
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

};

export default homePage;
