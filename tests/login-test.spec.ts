import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test('standard user logs in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
});