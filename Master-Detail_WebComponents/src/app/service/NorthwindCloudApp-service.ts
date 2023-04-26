import {Northwind} from '../static-data/northwind';
const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

export default class NorthwindCloudAppService {
  public getOrder = async (): Promise<any> => {
    const response = await fetch(`${API_ENDPOINT}/api/orders`);
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getCustomers = async (): Promise<any> => {
    const response = await fetch(`${API_ENDPOINT}/api/customers`);
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getEmployees = async (): Promise<any> => {
    return Northwind.Employees;
  }

  public getOrder_Detail = async (): Promise<any> => {
    const response = await fetch(`${API_ENDPOINT}/api/order_details`);
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }
}
