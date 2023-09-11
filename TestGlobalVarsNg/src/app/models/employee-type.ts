import { AddressType } from "./address-type";

export interface EmployeeType {
    "employeeID": number,
    "lastName": string,
    "firstName": string,
    "title": string,
    "titleOfCourtesy": string,
    "birthDate": string,
    "hireDate": string,
    "address": AddressType,
    "managerID": number,
    "notes": string,
    "avatarUrl": string
  }
  