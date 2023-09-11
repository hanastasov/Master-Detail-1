import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { NorthwindService } from '../services/northwind.service';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { Customer } from '../models/customer';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit, OnDestroy {
  public northwindCustomers!: Customer[];
  
  public destroy$ = new Subject();
  public customers$ = new Subject();

  constructor(public northwind: NorthwindService, public customerService: CustomerService) { }

  public ngOnInit(): void {
    this.northwind.getCustomers().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindCustomers = data);
    
    this.customers$
      .pipe(takeUntil(this.destroy$))
      .subscribe(c => this.northwind
        .getCustomerOrders(this.customerService.customerId)
        .pipe(take(1))
        .subscribe(o => this.northwind.orders = o));
  }

  public ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  public comboSelectionChanging(args: ISimpleComboSelectionChangingEventArgs) {
    this.northwind.customer = args.newSelection;
    this.customerService.customerId = args.newSelection?.customerId || null;
    this.customers$.next(0);
  }
}
