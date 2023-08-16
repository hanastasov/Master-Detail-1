import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerOrderDetail } from '../models/customer-order-detail';
import { Employee } from '../models/employee';
import { Order } from '../models/order';
import { OrderDetail } from '../models/order-detail';
import { Northwind } from './northwind';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  constructor(private http: HttpClient) { }

  public getData(tableName: string): Observable<any> {
    return of(Northwind[tableName]);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_ENDPOINT}/api/customers`);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${API_ENDPOINT}/api/employees`);
  }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${API_ENDPOINT}/api/orders`);
  }

  public getCustomerOrders(customerId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${API_ENDPOINT}/api/customer_orders/${customerId}`);
  }

  public getOrderDetails(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(`${API_ENDPOINT}/api/order_details`);
  }

  public getCustomerOrderDetails(orderId: number): Observable<CustomerOrderDetail[]> {
    return this.http.get<CustomerOrderDetail[]>(`${API_ENDPOINT}/api/customer_order_details/${orderId}`);
  }
}
