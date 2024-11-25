export const transactionsEndpoint = {
    async getTransactionsByAmount(request, accountId, amount) {
        return request.get(`/services_proxy/bank/accounts/${accountId}/transactions/amount/${amount}`, {
            headers: {
                'Cookie': 'JSESSIONID=AE95539E11B0DCDFAC04FD2FA4041D5C'
            }
        });
    }
};