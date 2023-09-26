import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService as StaticService } from '../services/customer.service';
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

  public customers$ = new Subject();
  public destroy$ = new Subject();

  constructor(public northwind: NorthwindService, public staticService: StaticService) { }

  public ngOnInit(): void {
    // this.northwind.getCustomers().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindCustomers = data);

    this.northwind.customer.
  }

  public ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  public comboSelectionChanging(args: ISimpleComboSelectionChangingEventArgs) {
    this.northwind.customer = args.newSelection;
    this.staticService.customerId = args.newSelection?.customerId || null;
    this.customers$.next(0);
  }
}
