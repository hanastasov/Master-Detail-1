import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { DataService } from '../services/data.service';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit, OnDestroy, OnChanges {
  public northwindCustomers: Customer[] | null = null;
  public detailsAreLoading = true;
  public selectedOrdersData: any = [];
  public selectedOrdersDetails: any = [];
  public selectedRows = [10355];
  public selectedCustomerData: any;
  public dynamicProperty = 'Static property value, not reset in ngOnInit';
  public gridPage = 1;

  @Input()
  private customerId: string;
  private dataLoaded = new EventEmitter();

  constructor(private northwindService: NorthwindService,
    private dataService: DataService,
    private router: Router) { }

  ngOnChanges(changedProperties: SimpleChanges) {
    // reset every other local variable
  }

  ngOnInit() {
    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
      // this.dataService.customerID - obtained through an injected service
      const targetCustomer = this.northwindCustomers.find(c => c.customerID === this.customerId);
      this.selectedCustomerData = targetCustomer;
      this.dataLoaded.emit();
    });

    this.dataLoaded.subscribe(() => {
      this.northwindService.getCustomerOrders(this.selectedCustomerData.customerID).subscribe(data => {
        this.selectedOrdersData = data.filter(el => el.customerID === this.selectedCustomerData?.customerID);
      });

      this.northwindService.getCustomerOrderDetails(this.selectedRows[0]).subscribe(data => {
        this.selectedOrdersDetails = data;
      });
    });

    this.dynamicProperty = 'Dynamic property value, set in ngOnInit ' + this.customerId;
  }

  ngOnDestroy() {
    this.dataLoaded.unsubscribe();
  }

  onItemClicked(item: any) {
    this.northwindService.getCustomerOrders(item.customerID).subscribe(data => {
      this.selectedCustomerData = item;
      this.selectedOrdersData = data.filter(el => el.customerID === this.selectedCustomerData?.customerID);
      this.selectedOrdersDetails = [];
    });
  }

  public orderSelected(args: IRowSelectionEventArgs) {
    this.router.navigate(['list-details', this.selectedCustomerData.customerID, 'order-details', args.newSelection[0].orderID]);
    // this.northwindService.getCustomerOrderDetails(args.newSelection[0].orderID.toString()).subscribe(data => {
    //   this.selectedOrdersDetails = data;
    // });
  }
}
