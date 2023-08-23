export interface Employee {
    "employeeID": number,
    "lastName": string,
    "firstName": string,
    "title": string,
    "titleOfCourtesy": string,
    "birthDate": Date,
    "hireDate": Date,
    "address": string,
    "city": string,
    "region": string | null,
    "postalCode": string,
    "country": string,
    "homePhone": string,
    "extension": string,
    "notes": string,
    "reportsTo": number,
    "photoPath": string
  }
  