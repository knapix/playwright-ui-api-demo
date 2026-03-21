import {Locator, Page} from "@playwright/test";


export class ProductsPage {
    readonly addBackpackButton: Locator;
    readonly cartLink: Locator;
    readonly cartItemNameLabel: Locator;

    constructor(private page: Page) {
        this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartItemNameLabel = page.locator('[data-test="inventory-item-name"]');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    cartItemName() {
        return this.cartItemNameLabel;
    }
}