import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { test, Browser, Page, expect } from "@playwright/test";
import { loginPO } from "../../pages/loginPO";



test('has title', async ({ page }) => {
   let browser:Browser;  
   setDefaultTimeout(60 * 1000);
   const login = new loginPO(page);
   Given('User navigates to the application',  async function () { 
    await login.goto();
   });
  
  
  
   Given('User enter the username as {string}', async function () {
    await login.enteruser();
   });
  
   Given('User enter the password as {string}', async function () {
    await login.enterpass();
   });
  
  
   When('User click on the login button', async function () {
    await login.enterpass();
   });
  
   Then('Login should be success', async function () {
     const text = await page.locator("p.oxd-userdropdown-name").textContent();
     console.log ("Username :" + text);
     await browser.close();
    });
  
    When('Login should fail', async function () {
      const failureMessage = await page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text");
      await expect(failureMessage).toBeVisible();
      await browser.close();
    });
})