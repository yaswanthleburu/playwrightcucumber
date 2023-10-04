import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { test, Browser, Page, expect, chromium } from "@playwright/test";
import { loginPO } from "../../pages/loginPO";

setDefaultTimeout (60*1000*2);
let browser:Browser;
let page: Page;
let loginpage: loginPO;

Given('User navigates to the application', async function () { 
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginpage = new loginPO(page);
    await loginpage.goto();    
})
  
Then('User enter the username as {string}', async function (username) {
    await loginpage.filluserName(username);
})
  
Then('User enter the password as {string}', async function (password) {
    await loginpage.fillpassword(password);
})
  
  
When('User click on the login button', async function () {
    await loginpage.submitBtn();
})

Then('Login should be success', async function () {
    await loginpage.loginsuc();
    await browser.close();     
})
  
Then('Login should fail', async function () {
    await loginpage.loginfai();
    await browser.close();
})
  
  