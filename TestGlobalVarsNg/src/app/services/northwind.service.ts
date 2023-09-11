import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Customer } from '../models/customer';
import { Order } from '../models/order';
import { Northwind } from './northwind';
import { CustomerService } from './customer.service';

const API_ENDPOINT = 'https://demodata.grapecity.com/northwind/api/v1';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  constructor(private http: HttpClient, private customerService: CustomerService) {
    this.getCustomer(this.customerService.customerId).pipe(take(1)).subscribe(c => this.customer = c);
  }
  
  public customer!: Customer;

  public getData(tableName: string): Observable<any> {
    return of(Northwind[tableName]);
  }

  public getCustomer(id: string) {
    return this.http.get<Customer>(`${API_ENDPOINT}/Customers/${id}`);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_ENDPOINT}/Customers`);
  }

  public getCustomerOrders(customerId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${API_ENDPOINT}/Customers/${customerId}/Orders`);
  }
}
