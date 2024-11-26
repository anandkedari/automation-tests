export const ENVIRONMENT = (process.env.ENV || 'prod').toLowerCase();
export const TESTFOLDER = (process.env.SPECFOLDER || 'tests/specs/web');
export const crossTestSharedData = {
    username:'',
    password:'',
    newAccountNo:'',
    transferAmount:''
};
