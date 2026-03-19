import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import {users} from "../../utils/testData";

test('login success', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await expect(page).toHaveURL(/inventory/);

});