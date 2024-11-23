/** @typedef {import('@playwright/test').Page} Page */
let page;

export const initPage = (p) => { 
    page = p 
};

/** @returns {Page} */
export const getPage = () => page;


// // var globalPage;
// export const initPage = (page) => { 
//     globalPage = page 
// };
// export const getPage = () => globalPage;