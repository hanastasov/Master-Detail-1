import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-combo-details',
  templateUrl: './combo-details.component.html',
  styleUrls: ['./combo-details.component.scss']
})
export class ComboDetailsComponent implements OnInit {
  public northwindCustomers: any = null;
  public iGNorthwindAPICustomerInputModel: any = null;
  public northwindOrders: any = null;
  public northwindProducts: any = null;
  public detailsAreLoading = true;
  public selected = [];
  public northwindOrderDetails: any = null;
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
      "orderID": 10271,
      "customerID": "SPLIR",
      "employeeID": 6,
      "orderDate": "1996-08-01T00:00:00.000",
      "requiredDate": "1996-08-29T00:00:00.000",
      "shippedDate": "1996-08-30T00:00:00.000",
      "shipVia": 2,
      "freight": 4.54,
      "shipName": "Split Rail Beer & Ale",
      "shipAddress": {
          "street": "P.O. Box 555",
          "city": "Lander",
          "region": "WY",
          "postalCode": "82520",
          "country": "USA"
      }
    },
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

  constructor(private northwindService: NorthwindService) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('Orders').subscribe(data => this.northwindOrders = data);
    this.northwindService.getData('order_details').subscribe(data => this.northwindOrderDetails = data);
  }

  handleClosed() {
    this.selectedCustomerData = new Array;
    this.selectedCustomerData.push(this.northwindCustomers.filter(el => el.customerID === this.selected)[0]);
    this.selectedOrdersData = this.northwindOrders.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
    this.detailsAreLoading = false;
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    this.detailsAreLoading = true;
    this.selectedOrdersDetails = this.northwindOrderDetails.filter(el => el.orderID === orderID.newSelection[0]);
    this.detailsAreLoading = false;
  }
}
