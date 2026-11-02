import {Page, Locator, expect} from "@playwright/test";

export class CatalogPage {
    readonly page: Page;
    readonly addToCartBtn: Locator;
    readonly shoppingCartLink: Locator;
    readonly removeBtn: Locator;
    readonly continueShoppingBtn: Locator;

constructor(page: Page) {
    this.page = page;
    this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.removeBtn = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]');
    }

async addItemToCart() {
    await this.addToCartBtn.click();
    }

async goToShoppingCart() {
    await this.shoppingCartLink.click();
    }

async removeItemFromCart() {
    await this.removeBtn.click();
    }

async continueShopping() {
    await this.continueShoppingBtn.click();
    }
}