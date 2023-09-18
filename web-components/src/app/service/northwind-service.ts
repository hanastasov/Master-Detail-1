import { Customer } from '../models/northwind/customer';
import { CustomerOrderDetail } from '../models/northwind/customer-order-detail';
import { Employee } from '../models/northwind/employee';
import { Order } from '../models/northwind/order';
import { OrderDetail } from '../models/northwind/order-detail';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

const API_ENDPOINT1 = 'https://demodata.grapecity.com';

class NorthwindService {
	public getOrder = async (): Promise<any> => {
		const response = await fetch(`${API_ENDPOINT}/api/orders`);
		if (!response.ok) {
			return Promise.resolve(null);
		}
		return response.json();
	}

	public getOrderFromApi = async (id: string = '10248'): Promise<Order> => {
		const response = await fetch(`${API_ENDPOINT1}/northwind/api/v1/Orders/${id}`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getCustomer = async (id: string = 'ALFKI') => {
		const response = await fetch(`${API_ENDPOINT1}/northwind/api/v1/Customers/${id}`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getCustomers = async (): Promise<Customer[]> => {
		const response = await fetch(`${API_ENDPOINT}/api/customers`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getEmployees = async (): Promise<Employee[]> => {
		const response = await fetch(`${API_ENDPOINT}/api/employees`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}


	public getOrders = async (): Promise<Order[]> => {
		const response = await fetch(`${API_ENDPOINT}/api/orders`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getCustomerOrders = async (customerId: string): Promise<Order[]> => {
		const response = await fetch(`${API_ENDPOINT}/api/customer_orders/${customerId}`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getOrderDetails = async (): Promise<OrderDetail[]> => {
		const response = await fetch(`${API_ENDPOINT}/api/order_details`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}

	public getCustomerOrderDetails = async (orderId: number): Promise<CustomerOrderDetail[]> => {
		const response = await fetch(`${API_ENDPOINT}/api/customer_order_details/${orderId}`);
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	}
}
export const northwindService: NorthwindService = new NorthwindService();
