import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { after, before } from "node:test";

let page: Page;
let browser: Browser;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

After(async () => {
    await page.close()
    await browser.close();
});