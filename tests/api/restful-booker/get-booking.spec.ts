import {expect, test} from "@playwright/test";
import {RestfulBookerClient} from "../../../clients/RestfulBookerClient";
import {bookingData} from "../../../utils/restfulBookerData";

test('should create and fetch booking', async ({request}) => {
    const client = new RestfulBookerClient(request);

    const createResponse = await client.createBooking(bookingData);
    expect(createResponse.status()).toBe(200);

    const created = await createResponse.json();
    const bookingId = created.bookingid;

    const getResponse = await client.getBooking(bookingId);
    expect(getResponse.status()).toBe(200);

    const booking = await getResponse.json();
    expect(booking.firstname).toBe(bookingData.firstname);
    expect(booking.lastname).toBe(bookingData.lastname);
    expect(booking.totalprice).toBe(bookingData.totalprice);
});

