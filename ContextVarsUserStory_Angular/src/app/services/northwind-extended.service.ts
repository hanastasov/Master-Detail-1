import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/northwind-extended/customer-dto';
import { OrderDetailDto } from '../models/northwind-extended/order-detail-dto';
import { OrderDto } from '../models/northwind-extended/order-dto';

const API_ENDPOINT = 'https://demodata.grapecity.com';

@Injectable({
  providedIn: 'root'
})
export class NorthwindExtendedService {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerDto(): Observable<CustomerDto[]> {
    return this.http.get<CustomerDto[]>(`${API_ENDPOINT}/northwind/api/v1/Customers`);
  }

  public getCustomerDto1(id: string = 'ALFKI'): Observable<CustomerDto> {
    return this.http.get<CustomerDto>(`${API_ENDPOINT}/northwind/api/v1/Customers/${id}`);
  }

  public getOrderDto(id: string = '10248'): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${API_ENDPOINT}/northwind/api/v1/Customers/${id}/Orders`);
  }

  public getOrderDetailDto(id: string = '10248'): Observable<OrderDetailDto[]> {
    return this.http.get<OrderDetailDto[]>(`${API_ENDPOINT}/northwind/api/v1/Orders/${id}/OrderDetails`);
  }
}
