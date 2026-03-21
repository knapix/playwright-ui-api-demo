import {expect, test} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import {ProductsPage} from "../../pages/ProductsPage";
import {products, users} from "../../utils/testData";

test('add product to cart', async ({page}) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await productsPage.addBackpackToCart();
    await productsPage.openCart();

    await expect(productsPage.cartItemName()).toContainText(products.backpack);
});