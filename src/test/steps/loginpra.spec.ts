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
    
});
  
Then('User enter the username as {string}', async function (username) {
    await loginpage.filluserName(username);
});
  
Then('User enter the password as {string}', async function (password) {
    await loginpage.fillpassword(password);
});
  
  
When('User click on the login button', async function () {
    await loginpage.submitBtn();
});

Then('Login should be success', async function () {
     const text = await page.locator("p.oxd-userdropdown-name").textContent();
     console.log ("Username :" + text);
     
});
  
Then('Login should fail', async function () {
      const failureMessage = await page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text");
      await expect(failureMessage).toBeVisible();
      
});
  
  