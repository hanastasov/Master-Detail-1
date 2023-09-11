import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from './customer.service';

const API_ENDPOINT = 'https://demodata.grapecity.com/northwind/api/v1';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  constructor(private http: HttpClient, private customerService: CustomerService) {
    this.getCustomer(this.customerService.customerId).pipe(take(1)).subscribe(c => this.customer = c);
  }
  
  public customer: Customer | undefined;

  public getCustomer(id: string) {
    return this.http.get<Customer>(`${API_ENDPOINT}/Customers/${id}`);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_ENDPOINT}/Customers`);
  }
}
