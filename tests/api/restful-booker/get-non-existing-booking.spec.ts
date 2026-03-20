import {expect, test} from "@playwright/test";
import {RestfulBookerClient} from "../../../clients/RestfulBookerClient";

test('should return 404 for non-existing booking', async ({request}) => {
    const  client = new RestfulBookerClient(request);

    const response = await client.getBooking(999999999);
    expect(response.status()).toBe(404);
});
