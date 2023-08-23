import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs, ISimpleComboSelectionChangingEventArgs } from '@infragistics/igniteui-angular';
import { Subject, take } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerOrderDetail } from '../models/customer-order-detail';
import { Order } from '../models/order';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-combo-details',
  templateUrl: './combo-details.component.html',
  styleUrls: ['./combo-details.component.scss']
})
export class ComboDetailsComponent implements OnInit {
  private $customerOrder: Subject<Customer> = new Subject<Customer>();
  private $selectedOrder: Subject<Order> = new Subject<Order>();
  private _selectedCustomer: Customer;
  private _selectedOrder: Order;

  public get selectedCustomer(): Customer {
    return this._selectedCustomer;
  }
  public set selectedCustomer(v: Customer) {
    this._selectedCustomer = v;
    this.$customerOrder.next(v);
    // TODO: try to describe property depended on other property - Dependent variable feature!
    this.selectedOrder = null;
  }

  public get selectedOrder(): Order {
    return this._selectedOrder;
  }
  public set selectedOrder(v: Order) {
    this._selectedOrder = v;
    this.$selectedOrder.next(v);
  }

  public northwindCustomers: Customer[] = [];
  public northwindCustomerOrders: Order[] = [];
  public northwindCustomerOrderDetails: CustomerOrderDetail[] = [];

  constructor(private northwindService: NorthwindService) { }

  ngOnInit() {
    this.northwindService.getCustomers().subscribe(data => this.northwindCustomers = data);
    this.$customerOrder.subscribe(c => this.northwindService.getCustomerOrders(this.selectedCustomer?.customerID).pipe(take(1)).subscribe({
      next: (orders: Order[]) => this.northwindCustomerOrders = orders,
      error: (_err: any) => this.northwindCustomerOrders = []
    }));
    this.$selectedOrder.subscribe(o => this.northwindService.getCustomerOrderDetails(this.selectedOrder?.orderID).pipe(take(1)).subscribe({
      next: (customerOrderDetails: CustomerOrderDetail[]) => this.northwindCustomerOrderDetails = customerOrderDetails,
      error: (_err: any) => this.northwindCustomerOrderDetails = []
    }));
  }

  public comboSelectionChanging(e: ISimpleComboSelectionChangingEventArgs) {
    this.selectedCustomer = e.newSelection;
  }

  public gridRowSelectionChanging(e: IRowSelectionEventArgs) {
    this.selectedOrder = e.newSelection[0];
  };
}
