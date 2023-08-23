import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public get customerID() {
    return "ANTON";
  }
}
