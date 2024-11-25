import { test, expect } from '@playwright/test';
import { transactionsEndpoint } from '../endpoints/transactions.endpoint';

test('validate transaction amount search', async ({ request }) => {
    const response = await transactionsEndpoint.getTransactionsByAmount(request, '14010', '100');
    
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toContainEqual(expect.objectContaining({
        amount: 100
    }));

    expect(data[0]).toMatchObject({
        id: expect.any(Number),
        accountId: expect.any(Number),
        type: expect.any(String),
        date: expect.any(String),
        amount: expect.any(Number),
        description: expect.any(String)
    });
});