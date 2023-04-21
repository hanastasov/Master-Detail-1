import { Component, OnInit } from '@angular/core';
import { ICustomer, NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  public northwindCustomers: ICustomer[] | null = null;
  public northwindOrders: any = null;
  public northwindOrderDetails: any = null;
  public detailsAreLoading = true;
  public selectedCustomerData: any = [
    {
      "customerID": "BLAUS",
      "companyName": "Blauer See Delikatessen",
      "contactName": "Hanna Moos",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "Forsterstr. 57",
        "city": "Mannheim",
        "region": null,
        "postalCode": "68306",
        "country": "Germany",
        "phone": "0621-08460"
      }
    }
  ];

  public selectedOrdersData: any = [
    {
      "orderID": null,
      "customerID": null,
      "employeeID": null,
      "orderDate": null,
      "requiredDate": null,
      "shippedDate": null,
      "shipVia": null,
      "freight": null,
      "shipName": null,
      "shipAddress": {
        "street": null,
        "city": null,
        "region": null,
        "postalCode": null,
        "country": null
      }
    }
  ];

  public selectedOrdersDetails: any = [
    {
      "orderID": null,
      "productID": null,
      "unitPrice": null,
      "quantity": null,
      "discount": null,
      "order": null,
      "product": null
    }
  ];


  constructor(
    private northwindService: NorthwindService,
  ) { }

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('Orders').subscribe(data => this.northwindOrders = data);
    this.northwindService.getData('order_details').subscribe(data => this.northwindOrderDetails = data);
  }

  onItemClicked(item: any) {
    this.selectedCustomerData = new Array;
    this.selectedCustomerData.push(item);
    this.selectedOrdersData = this.northwindOrders.filter(el => el.customerID === this.selectedCustomerData[0].customerID);
    this.detailsAreLoading = false;
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    this.detailsAreLoading = true;
    this.selectedOrdersDetails = this.northwindOrderDetails.filter(el => el.orderID === orderID.newSelection[0]);
    this.detailsAreLoading = false;
  }
}
