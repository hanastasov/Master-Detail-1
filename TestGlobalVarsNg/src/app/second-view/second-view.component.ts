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
