import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { Northwind } from './northwind';
import { HttpClient } from '@angular/common/http';

export interface ICustomer {
  "customerID": string;
  "companyName": string;
  "contactName": string;
  "contactTitle": string;
  "address": string;
  "city": string;
  "region": string | null;
  "postalCode": string;
  "country": string;
  "phone": string;
  "fax": string;
  "orders": unknown[];
  "customerTypes": unknown[];
}
const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  constructor(private http: HttpClient) { }

  public getData(tableName: string): Observable<any> {
    return of(Northwind[tableName]);
  }

  public getApiCustomerOrderDetailsOrderId(orderId: number): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customer_order_details/${orderId}`);
  }

  // public getSearchedItem(searchedResult: string) {
  //  observer.next(arr[idx]);
  // }
}
