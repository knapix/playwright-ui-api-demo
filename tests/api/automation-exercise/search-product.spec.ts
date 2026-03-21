import {expect, test} from "@playwright/test";
import {AutomationExerciseClient} from "../../../clients/AutomationExerciseClient";

test('should search product', async ({request}) => {
    const client = new AutomationExerciseClient(request);

    const response = await client.searchProducts('top');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('products');
    expect(body.products.length).toBeGreaterThan(0);
});