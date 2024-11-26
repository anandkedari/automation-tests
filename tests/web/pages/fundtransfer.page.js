import { getPage, waitForVisible, selectItemFromDropdown } from './base.page';

const SELECTORS = {
  AMOUNT_INPUT: 'input[id="amount"]',
  FROM_ACCOUNT_DROPDOWN: 'select[id="fromAccountId"]',
  TO_ACCOUNT_DROPDOWN: 'select[id="toAccountId"]',
  TRANSFER_BUTTON: 'input[value="Transfer"]',
  SUCCESS_MESSAGE_LABEL: 'div[id="transferApp"] p:has(span)',
};

export const fundtransferPage = {

    async transferFunds (transferAmount, fromAccount){
        await waitForVisible(SELECTORS.AMOUNT_INPUT);
        await getPage().locator(SELECTORS.AMOUNT_INPUT).fill(transferAmount);
        await selectItemFromDropdown(SELECTORS.FROM_ACCOUNT_DROPDOWN, fromAccount);
        // await getPage().selectOption(SELECTORS.FROM_ACCOUNT_DROPDOWN, { value: toAccount });
        await getPage().locator(SELECTORS.TRANSFER_BUTTON).click();
        return this;
    },
    async successMessage(){
        await waitForVisible(SELECTORS.SUCCESS_MESSAGE_LABEL);
        let message =  await (getPage().locator(SELECTORS.SUCCESS_MESSAGE_LABEL).textContent());
        message = message.trim();
        return message;
    }
};

export default fundtransferPage;



