import {test, expect} from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage";
import {ProductsPage} from "../../pages/ProductsPage";
import {products, users} from "../../utils/testData";

test('add product to cart', async ({page}) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await productPage.addBackpackToCart();
    await productPage.openCart();

    await expect(productPage.cartItemName()).toContainText(products.backpack);

});