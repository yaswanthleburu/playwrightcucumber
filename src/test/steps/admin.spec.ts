import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { test, Browser, Page, expect, chromium } from "@playwright/test";

setDefaultTimeout (60*1000*2);
let browser:Browser;
let page: Page;

Given('User search for a {string}', async function (Admin) {
    
    await page.locator("input[placeholder='Search']").type(Admin);           
});

When('User click on the admin', async function () {
           
});

When('User click on the add', async function () {
           
});

Then('User click on the userRole dropdown', async function () {
           
           
});

Then('User click on the admin', async function () {
           
           
});

Then('User enter the Employee Name as {string}', async function (string) {
           
           
});

When('User click on the status dropdown', async function () {
           
           
});

Then('User click on the Enabled', async function () {
           
});

Then('User enter the userName as {string}', async function (string) {
           
});

Then('User enter the conform password as {string}', async function (string) {
           
});
       
When('User click on the save', async function () {
           
});

Then('User adding should be success', async function () {
           
           
});