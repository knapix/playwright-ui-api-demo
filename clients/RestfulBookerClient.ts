import {APIRequestContext} from "@playwright/test";


export class RestfulBookerClient {
    constructor(private request: APIRequestContext) {
    }

    async createToken(username: string, password: string) {
        return this.request.post('https://restful-booker.herokuapp.com/auth', {
            data: {username, password},
        });
    }

    async createBooking(payload: {
        firstname: string;
        lastname: string;
        totalprice: number;
        depositpaid: boolean;
        bookingdates: {
            checkin: string;
            checkout: string;
        };
        additionalneeds?: string;
    }) {
        return this.request.post('https://restful-booker.herokuapp.com/booking', {
            data: payload
        });
    }

    async getBooking(id: number) {
        return this.request.get(`https://restful-booker.herokuapp.com/booking/${id}`);
    }

    async updateBooking(id: number, token: string, payload: unknown) {
        return this.request.put(`https://restful-booker.herokuapp.com/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data: payload
        });
    }

    async updateBookingWithoutAuth(id: number, payload: unknown) {
        return this.request.put('https://restful-booker.herokuapp.com/booking', {
            data: payload
        });
    }

    async deleteBooking(id: number, token: string) {
        return this.request.delete(`https://restful-booker.herokuapp.com/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`
            }
        });
    }

}