import {expect, test} from "@playwright/test";
import {RestfulBookerClient} from "../../../clients/RestfulBookerClient";
import {bookingData} from "../../../utils/restfulBookerData";

test('should not update booking without token', async ({request}) => {
    const client = new RestfulBookerClient(request);

    const createResponse = await client.createBooking(bookingData);
    expect(createResponse.status()).toBe(200);

    const created = await createResponse.json();
    const bookingId = created.bookingid;

    const updateResponse = await client.updateBookingWithoutAuth(bookingId, {
        ...bookingData,
        firstname: 'Unauthorized',
    });

    expect([403, 404]).toContain(updateResponse.status());
});