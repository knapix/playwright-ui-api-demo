
import {APIRequestContext} from "@playwright/test";


export class ApiClient {
    constructor(private request: APIRequestContext) {}

    async getUsers() {
        return this.request.get('https://jsonplaceholder.typicode.com/users');
    }

    async createPost(payload: {title: string; body: string; userId: number}) {
        return this.request.post('https://jsonplaceholder.typicode.com/posts', {
            data: payload
        });
    }
}