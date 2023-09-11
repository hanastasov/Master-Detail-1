import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { NorthwindService } from '../services/northwind.service';
import { Customer } from '../models/customer';
import { Subject, take, takeUntil } from 'rxjs';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent implements OnInit, OnDestroy {
  public northwindCustomers!: Customer[];

  public customers$ = new Subject();
  public destroy$ = new Subject();

  constructor(public northwind: NorthwindService, public customerService: CustomerService) { }

  public ngOnInit(): void {
    this.northwind.getCustomers().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindCustomers = data);

    this.customers$
      .pipe(takeUntil(this.destroy$))
      .subscribe(c => this.northwind
        .getCustomerOrders(this.customerService.customerId).pipe(take(1))
        .subscribe(o => this.northwind.orders = o));
  }

  public ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  public comboSelectionChanging(args: ISimpleComboSelectionChangingEventArgs) {
    this.northwind.customer = args.newSelection;
    this.customerService.customerId = args.newSelection.customerId;
    this.customers$.next(0)
  }
}
