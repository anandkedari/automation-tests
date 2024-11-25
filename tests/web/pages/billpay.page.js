import { getPage } from './base.page';
import {dashboardPage} from "./dashboard.page";

const SELECTORS = {
  PAYEE_NAME_INPUT: 'input[name="payee.name"]',
  ADDRESS_INPUT: 'input[name="payee.address.street"]',
  CITY_INPUT: 'input[name="payee.address.city"]',
  STATE_INPUT: 'input[name="payee.address.state"]',
  STATE_INPUT: 'input[name="payee.address.state"]',
  ZIP_INPUT: 'input[name="payee.address.zipCode"]',
  PHONE_INPUT: 'input[name="payee.phoneNumber"]',
  PAYEE_ACCOUNTNO_INPUT: 'input[name="payee.accountNumber"]',
  PAYEE_ACCOUNTNO_VERIFY_INPUT: 'input[name="verifyAccount"]',
  AMOUNT_INPUT: 'input[name="amount"]',
  FROM_ACCOUNT_DROPDOWN: 'select[name="fromAccountId"]',
  FROM_ACCOUNT_ITEM: 'select[name="fromAccountId"]',
  SEND_PAYMENT_BUTTON: 'input[value="Send Payment"]',
  SUCCESS_MESSAGE_LABEL: 'div[id="billpayResult"] p:has(span)',
};

export const billpayPage = {

    async payBill (data, fromAccount){
        await getPage().locator(SELECTORS.PAYEE_NAME_INPUT).fill(data.name);
        await getPage().locator(SELECTORS.ADDRESS_INPUT).fill(data.address);
        await getPage().locator(SELECTORS.CITY_INPUT).fill(data.city);
        await getPage().locator(SELECTORS.STATE_INPUT).fill(data.state);
        await getPage().locator(SELECTORS.ZIP_INPUT).fill(data.zip);
        await getPage().locator(SELECTORS.PHONE_INPUT).fill(data.phone);
        await getPage().locator(SELECTORS.PAYEE_ACCOUNTNO_INPUT).fill(data.accountno);
        await getPage().locator(SELECTORS.PAYEE_ACCOUNTNO_VERIFY_INPUT).fill(data.accountno);
        await getPage().locator(SELECTORS.AMOUNT_INPUT).fill(data.amount);
        await getPage().selectOption(SELECTORS.FROM_ACCOUNT_DROPDOWN, { value: fromAccount });
        await getPage().locator(SELECTORS.SEND_PAYMENT_BUTTON).click();
        return dashboardPage;
    },
    async successMessage(){
        await waitForVisible(SELECTORS.SUCCESS_MESSAGE_LABEL);
        return await (getPage().locator(SELECTORS.SUCCESS_MESSAGE_LABEL).textContent());
    }
};

export default billpayPage;



