import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from './customer.service';

const API_ENDPOINT = 'https://demodata.grapecity.com/northwind/api/v1';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  constructor(private http: HttpClient, private customerService: CustomerService) { }

  private _customer$ = new BehaviorSubject<Customer | undefined>(undefined);

  public get customer(): BehaviorSubject<Customer | undefined> {
    if (!this._customer$.value) {
      // NOTE: this.customerService.customerId can be the value (in this case 'ALFKI') instead
      this.getCustomer(this.customerService.customerId).pipe(take(1)).subscribe(v => this._customer$.next(v));
    }

    return this._customer$;
  }

  public getCustomer(id: string) {
    return this.http.get<Customer>(`${API_ENDPOINT}/Customers/${id}`);
  }

  public getCustomerDto(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_ENDPOINT}/Customers`);
  }
}
