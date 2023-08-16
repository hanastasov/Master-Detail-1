import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Northwind } from './northwind';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';
export interface Customer {
  "customerID": string,
  "companyName": string,
  "contactName": string,
  "contactTitle": string,
  "address": string,
  "city": string,
  "region": null,
  "postalCode": string,
  "country": string,
  "phone": string,
  "fax": string,
  "orders": [],
  "customerTypes": []
}

export interface Employees {
  "employeeID": number,
  "lastName": string,
  "firstName": string,
  "title": string,
  "titleOfCourtesy": string,
  "birthDate": string,
  "hireDate": string,
  "address": {
    "street": string,
    "city": string,
    "region": string,
    "postalCode": string,
    "country": string,
    "phone": string
  },
  "managerID": number,
  "notes": string,
  "avatarUrl": string
}

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  constructor(private http: HttpClient) { }

  public getEmployees(tableName: string): Observable<any> {
    return of(Northwind[tableName]);
  }

  public getCustomers(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customers`);
  }

  public getEmployee(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/employee`);
  }

  public getAllOrders(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/orders`);
  }

  public getCustomerOrdersResult(customerId: string): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_orders/${customerId}`);
  }

  public getAllOrdersDetails(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/order_details`);
  }

  public getCustOrdersDetailResult(orderId: string): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_order_details/${orderId}`);
  }
}
