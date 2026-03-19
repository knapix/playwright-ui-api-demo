import {expect, test} from "@playwright/test";
import {RestfulBookerClient} from "../../../clients/RestfulBookerClient";
import {restfulBookerCredentials} from "../../../utils/restfulBookerData";

test('should create auth token', async ({request}) => {
    const client = new RestfulBookerClient(request);

    const response = await client.createToken(
        restfulBookerCredentials.username,
        restfulBookerCredentials.password
    );

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('token')
})