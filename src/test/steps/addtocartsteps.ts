import { Given, Then, When } from "@cucumber/cucumber";
import {  Browser, Page, expect, chromium } from "@playwright/test";

let browser:Browser;
let page:Page;
// import { pagefixture } from "../../hooks/pagefixture";



Given('User search for a {string}', async function (book) {
    await page.locator ("input[type='search']").type(book);
    await page.locator ("mat-option[role='option']").click();
});

When('User add the book to the cart', async function () {
    await page.locator ("button[color='primary']").click();
});

Then('the cart badge should get updated', async function () {
    const badgecount = await page.locator ("#mat-badge-content-0").textContent();
    expect (Number(badgecount)).toBeGreaterThan(0);
});
