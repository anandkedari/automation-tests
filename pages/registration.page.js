import { getPage } from "./base.page";

const SELECTORS = {
  FIRST_NAME_INPUT: 'input[id="customer.firstName"]',
  LAST_NAME_INPUT: 'input[id="customer.lastName"]',
  ADDRESS_INPUT: 'input[id="customer.address.street"]',
  CITY_INPUT: 'input[id="customer.address.city"]',
  STATE_INPUT: 'input[id="customer.address.state"]',
  ZIP_INPUT: 'input[id="customer.address.zipCode"]',
  PHONE_INPUT: 'input[id="customer.phoneNumber"]',
  SSN_INPUT: 'input[id="customer.ssn"]',
  USERNAME_INPUT: 'input[id="customer.username"]',
  PASSWORD_INPUT: 'input[id="customer.password"]',
  PASSWORD_CONFIRM_INPUT: 'input[id="repeatedPassword"]',
  REGISTER_BUTTON: 'input[type="submit"][value="Register"]',
  REGISTER_MESSAGE_LABEL: 'div[id="rightPanel"] p',
};

export const registrationPage = {
    async enterRegistrationsDetails (data){
        await getPage().locator(SELECTORS.FIRST_NAME_INPUT).fill(data.firstName);
        await getPage().locator(SELECTORS.LAST_NAME_INPUT).fill(data.lastName);
        await getPage().locator(SELECTORS.ADDRESS_INPUT).fill(data.address);
        await getPage().locator(SELECTORS.CITY_INPUT).fill(data.city);
        await getPage().locator(SELECTORS.STATE_INPUT).fill(data.state);
        await getPage().locator(SELECTORS.ZIP_INPUT).fill(data.zip);
        await getPage().locator(SELECTORS.PHONE_INPUT).fill(data.phone);
        await getPage().locator(SELECTORS.SSN_INPUT).fill("1");
        await getPage().locator(SELECTORS.USERNAME_INPUT).fill(data.username);
        await getPage().locator(SELECTORS.PASSWORD_INPUT).fill(data.password);
        await getPage().locator(SELECTORS.PASSWORD_CONFIRM_INPUT).fill(data.password);
        await getPage().locator(SELECTORS.REGISTER_BUTTON).click();
        console.log('First name -', data.firstName, ' , lastName  -', data.lastName);
        console.log('Registering with username -', data.username, ' , password -', data.password);
        return this;
    },
    async getRegistrationMessge(){
        return await (getPage().locator(SELECTORS.REGISTER_MESSAGE_LABEL).textContent());
    }
};

export default registrationPage;


