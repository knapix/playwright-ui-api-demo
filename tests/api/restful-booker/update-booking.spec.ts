import { expect, test } from "@playwright/test";
import { RestfulBookerClient } from "../../../clients/RestfulBookerClient";
import { bookingData, restfulBookerCredentials } from "../../../utils/restfulBookerData";

test('should update booking', async ({ request }) => {
    const client = new RestfulBookerClient(request);

    const authResponse = await client.createToken(
        restfulBookerCredentials.username,
        restfulBookerCredentials.password
    );
    expect(authResponse.status()).toBe(200);
    const authBody = await authResponse.json();
    const token = authBody.token;

    const createResponse = await client.createBooking(bookingData);
    expect(createResponse.status()).toBe(200);
    const created = await createResponse.json();
    const bookingId = created.bookingid;

    const updatedPayload = {
        ...bookingData,
        firstname: 'Adam',
        lastname: 'Nowak'
    };

    const updateResponse = await client.updateBooking(bookingId, token, updatedPayload);
    expect(updateResponse.status()).toBe(200);

    const updated = await updateResponse.json();
    expect(updated.firstname).toBe('Adam');
    expect(updated.lastname).toBe('Nowak');
});