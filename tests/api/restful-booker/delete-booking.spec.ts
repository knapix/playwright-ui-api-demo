import {expect, test} from "@playwright/test";
import {RestfulBookerClient} from "../../../clients/RestfulBookerClient";
import {bookingData, restfulBookerCredentials} from "../../../utils/restfulBookerData";

test('should delete booking', async ({request}) => {
    const client = new RestfulBookerClient(request);

    //auth
    const authResponse = await client.createToken(
        restfulBookerCredentials.username,
        restfulBookerCredentials.password
    );
    expect(authResponse.status()).toBe(200);
    const authBody = await authResponse.json();
    const token = authBody.token;

    //create booking
    const createResponse = await client.createBooking(bookingData);
    expect(createResponse.status()).toBe(200);
    const created = await createResponse.json();
    const bookingId = created.bookingid;

    //delete booking
    const deleteResponse = await client.deleteBooking(bookingId, token);
    expect(deleteResponse.status()).toBe(201);

    //verify deletion
    const getResponse = await client.getBooking(bookingId);
    expect(getResponse.status()).toBe(404);

})