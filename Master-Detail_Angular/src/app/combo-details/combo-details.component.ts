import { Component, OnInit } from '@angular/core';
import { Customer, NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-combo-details',
  templateUrl: './combo-details.component.html',
  styleUrls: ['./combo-details.component.scss']
})
export class ComboDetailsComponent implements OnInit {
  public northwindCustomers: Customer[] | null = null;
  public iGNorthwindAPICustomerInputModel: any = null;
  public northwindOrders: any = null;
  public detailsAreLoading = true;
  public selectedCustomer: any;
  public northwindOrderDetails: any = null;
  public selectedOrdersData: any = [];
  public selectedOrdersDetails: any = [];
  public selectedCustomerData: any = [
    {
      "customerID": "AROUT",
      "companyName": "Around the Horn",
      "contactName": "Thomas Hardy",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "120 Hanover Sq.",
        "city": "London",
        "region": null,
        "postalCode": "WA1 1DP",
        "country": "UK",
        "phone": "(171) 555-7788"
      }
    }
  ];

  constructor(private northwindService: NorthwindService) { }

  ngOnInit() {
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('Orders').subscribe(data => this.northwindOrders = data);
    this.northwindService.getData('order_details').subscribe(data => this.northwindOrderDetails = data);
    this.selectedCustomer = this.northwindCustomers[0].customerID;
    this.selectedOrdersData = this.northwindOrders.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
  }

  handleSelection() {
    this.selectedCustomerData = new Array;
    this.selectedCustomerData.push(this.northwindCustomers.filter(el => el.customerID === this.selectedCustomer)[0]);
    this.selectedOrdersData = this.northwindOrders.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
    this.detailsAreLoading = false;
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    this.detailsAreLoading = true;
    this.selectedOrdersDetails = this.northwindOrderDetails.filter(el => el.orderID === orderID.newSelection[0]);
    this.detailsAreLoading = false;
  }
}
