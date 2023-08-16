import { CustomerDto } from '../models/northwind-extended/customer-dto';
import { OrderDto } from '../models/northwind-extended/order-dto';
import { OrderDetailDto } from '../models/northwind-extended/order-detail-dto';

const API_ENDPOINT = 'https://demodata.grapecity.com';

export default class NorthwindExtendedService {
	public getCustomerDto = async (): Promise<CustomerDto[]> => {
		const response = await fetch(`${API_ENDPOINT}/northwind/api/v1/Customers`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getCustomerDto1 = async (id: string = 'ALFKI'): Promise<CustomerDto> => {
		const response = await fetch(`${API_ENDPOINT}/northwind/api/v1/Customers/${id}`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getOrderDto = async (id: string = 'ALFKI'): Promise<OrderDto[]> => {
		const response = await fetch(`${API_ENDPOINT}/northwind/api/v1/Customers/${id}/Orders`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getOrderDetailDto = async (id: string = '10248'): Promise<OrderDetailDto[]> => {
		const response = await fetch(`${API_ENDPOINT}/northwind/api/v1/Orders/${id}/OrderDetails`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}
}
