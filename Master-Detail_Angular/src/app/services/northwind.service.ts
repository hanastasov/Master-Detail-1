import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Northwind } from './northwind';
import { HttpClient } from '@angular/common/http';

export interface Customer {
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

  public getData(tableName: string): Observable<any> {
    return of(Northwind[tableName]);
  }
}
