import {APIRequestContext} from "@playwright/test";

export class AutomationExerciseClient {
    constructor(private request: APIRequestContext) {}

    async getAllProducts() {
        return this.request.get('https://automationexercise.com/api/productsList');
    }

    async searchProducts(search_product: string) {
        return this.request.post('https://automationexercise.com/api/searchProduct', {
            form: {
                search_product
            }
        });
    }
}