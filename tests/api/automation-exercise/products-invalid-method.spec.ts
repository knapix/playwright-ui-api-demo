import {expect, test} from "@playwright/test";

test('should return error for invalid HTTP method on products list', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/productsList');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toContain('This request method is not supported')
});