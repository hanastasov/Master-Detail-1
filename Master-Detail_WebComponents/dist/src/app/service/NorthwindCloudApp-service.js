const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';
export default class NorthwindCloudAppService {
    constructor() {
        this.getOrder = async () => {
            const response = await fetch(`${API_ENDPOINT}/api/orders`);
            if (!response.ok) {
                return Promise.resolve(null);
            }
            return response.json();
        };
        this.getCustomers = async () => {
            const response = await fetch(`${API_ENDPOINT}/api/customers`);
            if (!response.ok) {
                return Promise.resolve(null);
            }
            return response.json();
        };
        this.getOrder_Detail = async () => {
            const response = await fetch(`${API_ENDPOINT}/api/order_details`);
            if (!response.ok) {
                return Promise.resolve(null);
            }
            return response.json();
        };
    }
}
//# sourceMappingURL=NorthwindCloudApp-service.js.map