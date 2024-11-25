import { test, expect } from '@playwright/test';
import { transactionsEndpoint } from '../endpoints/transactions.endpoint';

test('validate transaction amount search', async ({ request }) => {
    //Untested as the api and website is down
    const response = await transactionsEndpoint.getTransactionsByAmount(request, '14010', '11');

    const data = await response;
    console.log(data);
    expect(response.status()).toBe(200);
    // expect(data).toContainEqual(expect.objectContaining({
    //     amount: 100
    // }));
    expect(data.something).toHaveProperty("amount", "11");
});