import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OrderDetailDto } from '../models/northwind-extended/order-detail-dto';
import { OrderDto } from '../models/northwind-extended/order-dto';
import { CustomerDto } from '../models/northwind-extended/customer-dto';
import { NorthwindExtendedService } from '../services/northwind-extended.service';
import { IRowSelectionEventArgs, ISimpleComboSelectionChangingEventArgs, IgxGridComponent } from 'igniteui-angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  public northwindExtendedCustomerDto!: CustomerDto[];
  public northwindExtendedCustomerDto1!: CustomerDto[];
  public northwindExtendedOrderDto!: OrderDto[];
  public northwindExtendedOrderDetailDto!: OrderDetailDto[];

  public selectedCustomerID$ = new Subject<string>();
  public selectedCustomerID = null;

  public selectedOrderID$ = new Subject<number>();
  public selectedOrderID = null;

  @ViewChild('orders')
  private ordersGrid!: IgxGridComponent;

  constructor(
    private northwindExtendedService: NorthwindExtendedService,
  ) { }

  public ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    
    // bind to combo
    this.northwindExtendedService.getCustomerDto().subscribe(data => this.northwindExtendedCustomerDto = data);

    this.selectedCustomerID$
      .subscribe(value => {
        this.northwindExtendedService.getCustomerDto1(value).subscribe(data => this.northwindExtendedCustomerDto1 = [data]); // bind array of items to grid
        this.northwindExtendedService.getOrderDto(value).subscribe(data => this.northwindExtendedOrderDto = data);
      });

    this.selectedOrderID$
      .subscribe(value => {
        this.northwindExtendedService.getOrderDetailDto(value.toString()).subscribe(data => this.northwindExtendedOrderDetailDto = data);
      });
  }

  public ngOnDestroy() {
    this.selectedCustomerID$.complete();
  }

  public handleSelectionChanging(event: ISimpleComboSelectionChangingEventArgs) {
    if (event.newSelection) {
      this.selectedCustomerID = event.newSelection;
      this.selectedCustomerID$.next(event.newSelection);
      return;
    }

    this.northwindExtendedCustomerDto1 = [];
    this.northwindExtendedOrderDto = [];
    this.northwindExtendedOrderDetailDto = [];
  }

  public handleRowSelectionChanging(event: IRowSelectionEventArgs) {
    if (event.newSelection[0]?.orderId) { // orderId could be anything; how do we resolve it?
      this.selectedOrderID = event.newSelection[0].orderId;
      this.selectedOrderID$.next(event.newSelection[0].orderId);
      return;
    }

    this.northwindExtendedOrderDetailDto = [];
  }
}
