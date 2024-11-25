export const transactionsEndpoint = {
    async getTransactionsByAmount(request, accountId, amount) {
        return request.get(`/services_proxy/bank/accounts/${accountId}/transactions/amount/${amount}`, {
            headers: {
                'Cookie': 'JSESSIONID=2999877E9F37AE41DEC16D1255929A76',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
    }
};