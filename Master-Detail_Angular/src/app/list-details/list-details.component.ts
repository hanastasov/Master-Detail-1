import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer, NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { DataService } from '../services/data.service';

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
  public selectedCustomerData: any = [];

  @Input()
  private defCustomerId: string; // bound from data context in route
  private dataLoaded = new EventEmitter();

  constructor(private northwindService: NorthwindService,
    private dataService: DataService) { }

  ngOnInit() {
    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
      // this.dataService.customerID - obtained through an injected service
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
