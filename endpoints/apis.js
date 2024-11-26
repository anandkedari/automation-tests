export const getToken = async (request) => {
        const response = await request.post('https://parabank.parasoft.com/parabank/login.htm', {
            params: {
            username: 'illiam0',
            password: 'test@2024'
            }
        });
        let cookies = JSON.stringify(await response._initializer.url).replaceAll("",'').split(";")[1];
        console.log("Cookie - " + cookies.split("=")[1]);
        return cookies.split("=")[1];
};