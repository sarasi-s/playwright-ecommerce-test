import { Page, Locator, expect } from "@playwright/test";  

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;


constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    }

async goToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
    }

async login(uSeR: string, pAsS: string) {
    await this.username.fill(uSeR);
    await this.password.fill(pAsS);
    await this.loginBtn.click();
    }

async verifyLoginSuccess() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}