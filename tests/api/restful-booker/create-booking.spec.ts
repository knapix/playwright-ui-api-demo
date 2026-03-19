import {expect, test} from "@playwright/test";
import {RestfulBookerClient} from "../../../clients/RestfulBookerClient";
import {bookingData} from "../../../utils/restfulBookerData";

test('should create booking', async ({request}) => {
    const client = new RestfulBookerClient(request);

    const response = await client.createBooking(bookingData);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('bookingid');
    expect(body.booking.firstname).toBe(bookingData.firstname);
    expect(body.booking.lastname).toBe(bookingData.lastname);
});
