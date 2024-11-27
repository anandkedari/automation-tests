export const getToken = async (request, _username, _password) => {
        const response = await request.post('/parabank/login.htm', {
            params: {
            username: _username,
            password: _password
            }
        });
        let cookies = JSON.stringify(await response._initializer.url).replaceAll("",'').split(";")[1];
        console.log("Cookie - " + cookies.split("=")[1]);
        return cookies.split("=")[1];
};