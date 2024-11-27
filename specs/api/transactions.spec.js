import { test, expect } from '../../common/fixtures';
import {getToken, getTransactionByAmount} from '../../endpoints/apis';

test.describe('API Tests - ', () => {
    test('Find transaction by amount', async ({ request, sharedData }) => {      
      const response = await request.get(`/parabank/services_proxy/bank/accounts/${await sharedData.get('newAccountNo')}/transactions/amount/${await sharedData.get('amount')}`, {
                Headers:{ 'Cookie': await getToken(request, await sharedData.get('username'), await sharedData.get('password')) }
            });
      const body = JSON.parse(await response.body());
      expect(response.status()).toBe(200);
      console.log("body[0].amount) - " + body[0].amount);
      expect((body[0].amount).toString()).toBe(await sharedData.get('amount'));
      expect(body[0].type).toBe("Debit");
      expect((body[0].accountId).toString()).toBe(await sharedData.get('newAccountNo'));
    });
});