import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('login fail with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'wrong_password');

  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});