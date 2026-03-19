import {Page} from "@playwright/test";


export class ProductsPage {
    constructor(private page: Page) {}

    async addBackpackToCart() {
        await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async openCart() {
        await this.page.click('[data-test="shopping-cart-link"]');
    }

    cartItemName() {
        return this.page.locator('[data-test="inventory-item-name"]');
    }
}