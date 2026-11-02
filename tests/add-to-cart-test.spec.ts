import test, { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CatalogPage } from "../pages/CatalogPage";

test('Add item to cart and remove it', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();

    const catalogPage = new CatalogPage(page);
    await catalogPage.addItemToCart();
    await catalogPage.goToShoppingCart();
    await catalogPage.removeItemFromCart();
    await catalogPage.continueShopping();
});