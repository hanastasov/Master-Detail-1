import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService as CustomerService } from '../services/customer.service';
import { NorthwindService } from '../services/northwind.service';
import { Customer } from '../models/customer';
import { Subject, takeUntil } from 'rxjs';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent implements OnInit, OnDestroy {
  public northwindCustomers!: Customer[];
  public customer?: Customer;
  public destroy$ = new Subject();

  constructor(public northwind: NorthwindService, public customerService: CustomerService) { }

  public ngOnInit(): void {
    this.northwind.customer.pipe(takeUntil(this.destroy$)).subscribe(x => this.customer = x);
    this.northwind.getCustomerDto().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  public comboSelectionChanging(args: ISimpleComboSelectionChangingEventArgs) {
    this.northwind.customer.next(args.newSelection as Customer);
    this.customerService.customerId = args.newSelection?.customerId || null;
  }
}
