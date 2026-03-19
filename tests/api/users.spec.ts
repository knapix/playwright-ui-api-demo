import { test, expect } from '@playwright/test';
import {ApiClient} from "../../utils/apiClient";

test('get users list', async ({ request }) => {
  const apiClient = new ApiClient(request);

  const response = await apiClient.getUsers()

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('email');
});