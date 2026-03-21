import {expect, test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

test('login fail with invalid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match');
});