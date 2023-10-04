import { Browser, Locator, Page, expect } from '@playwright/test';

    export class loginPO {
        public page :Page;
        readonly userInput: Locator;
        readonly passwordInput: Locator;
        readonly loginBtn: Locator;
        readonly loginsucess: Locator;
        readonly loginfail: Locator;
        
        constructor(page : Page) {
            this.page=page;
            this.userInput = this.page.locator("input[name='username']");
            this.passwordInput = this.page.locator("input[type='password']");
            this.loginBtn = this.page.locator("button[type='submit']");
            this.loginsucess = this.page.locator("p.oxd-userdropdown-name");
            this.loginfail = this.page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text");
        }   
        
        async goto() {
            await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        }
        
        
        async filluserName(name: string) {
            await this.userInput.textContent();
            await this.userInput.fill(name);
        }
    
        async fillpassword(password: string) {
            await this.passwordInput.textContent();
            await this.passwordInput.fill(password);
        }

        async submitBtn() {
            await this.loginBtn.isEnabled();
            await this.loginBtn.click({ force: true });
        } 

        async loginsuc() {
        const text = await this.loginsucess.textContent();
        console.log ("Username :" + text);
        }
        
        async loginfai() {
        const failureMessage = this.loginfail;
        await expect(failureMessage).toBeVisible();
        }
    }