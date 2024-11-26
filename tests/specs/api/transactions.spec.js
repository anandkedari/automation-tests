import { test, expect } from '../../common/fixtures';
import {getToken, getTransactionByAmount} from '../../endpoints/apis';
import {crossTestSharedData} from '../../common/constants';

test.describe('API Tests - ', () => {
    test('Find transaction by amount', async ({ request, sharedData }) => {
      // console.log('sharedData - ' + JSON.stringify(await sharedData));
      const response = await request.get('https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/16674/transactions/amount/11', {
                Headers:{ 'Cookie': await getToken(request) }
            });
      const body = await response.json();
      expect(response.status()).toBe(200);
      expect(body).toHaveProperty('amount');
      expect(body.amount).toBe('100.00');
    });
});