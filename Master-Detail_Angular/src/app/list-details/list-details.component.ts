import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer, NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit, OnDestroy {
  public northwindCustomers: Customer[] | null = null;
  public detailsAreLoading = true;
  public selectedOrdersData: any = [];
  public selectedOrdersDetails: any = [];
  public selectedRows = [10355];
  public selectedCustomerData: any = [
    // {
    //   "customerID": "AROUT",
    //   "companyName": "Around the Horn",
    //   "contactName": "Thomas Hardy",
    //   "contactTitle": "Sales Representative",
    //   "address": "120 Hanover Sq.",
    //   "city": "London",
    //   "region": null,
    //   "postalCode": "WA1 1DP",
    //   "country": "UK",
    //   "phone": "(171) 555-7788",
    //   "fax": "(171) 555-6750",
    //   "orders": [],
    //   "customerTypes": []
    // }
  ];

  @Input()
  private defCustomerId: string;
  private dataLoaded = new EventEmitter();

  constructor(private northwindService: NorthwindService) { }

  ngOnInit() {
    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
      const defCustomer = this.northwindCustomers.find(c => c.customerID === this.defCustomerId);
      this.selectedCustomerData.push(defCustomer);
      this.dataLoaded.emit();
    });

    this.dataLoaded.subscribe(() => {
      this.northwindService.getCustomerOrdersResult(this.selectedCustomerData[0].customerID).subscribe(data => {
        this.selectedOrdersData = data.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
      });

      this.northwindService.getCustOrdersDetailResult(this.selectedRows[0].toString()).subscribe(data => {
        this.selectedOrdersDetails = data;
      });
    });
  }

  ngOnDestroy() {
    this.dataLoaded.unsubscribe();
  }

  onItemClicked(item: any) {
    this.northwindService.getCustomerOrdersResult(item.customerID).subscribe(data => {
      this.selectedCustomerData = new Array;
      this.selectedCustomerData.push(item);
      this.selectedOrdersData = data.filter(el => el.customerID === this.selectedCustomerData[0]?.customerID);
      this.selectedOrdersDetails = [];
    });
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    this.northwindService.getCustOrdersDetailResult(orderID.newSelection[0].toString()).subscribe(data => {
      this.selectedOrdersDetails = data;
    });
  }
}
