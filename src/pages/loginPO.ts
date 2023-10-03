import { Browser, Locator, Page, chromium, expect } from '@playwright/test';

let browser:Browser;
let page:Page;

    export class loginPO {
        readonly page :Page;
        userInput: Locator;
        passwordInput: Locator;
        loginBtn: Locator;
        
       
    
        constructor(page : Page) {
            this.page=page;
            this.userInput = this.page.locator("input[name='username']");
            this.passwordInput = this.page.locator("input[type='password']");
            this.loginBtn = this.page.locator("button[type='submit']");
        }   
        
        async goto() {
            browser = await chromium.launch ({ headless:false });
            await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            await expect(this.page).toHaveTitle(/DEMOQA/);
        }
        
        async enteruser() {
            await this.userInput.type("Admin");
        }
        async enterpass() {    
            await this.passwordInput.type("admin123");
        }
        async login() {    
            await this.loginBtn.click();
        }
    
    }