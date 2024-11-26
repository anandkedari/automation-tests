import { test, expect } from '../../common/fixtures';
import {getToken, getTransactionByAmount} from '../../endpoints/apis';
import {crossTestSharedData} from '../../common/constants';

test.describe('API Tests - ', () => {
    test('Find transaction by amount', async ({ request, sharedData }) => {
      console.log("sharedData - ", crossTestSharedData);
      const response = await request.get('https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/16674/transactions/amount/11', {
                Headers:{ 'Cookie': await getToken(request) }
            });

      console.log("JSON - response -====> " + await response.body());
    });
});