import {expect, test} from "@playwright/test";
import {ApiClient} from "../../utils/apiClient";

test('create post', async ({request}) => {
    const apiClient = new ApiClient(request);

    const response = await apiClient.createPost({
        title: 'Playwright test',
        body: 'This is a sample API POST test',
        userId: 1
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('Playwright test');
    expect(body.userId).toBe(1);
    expect(body).toHaveProperty('id');

    console.log(body);
});