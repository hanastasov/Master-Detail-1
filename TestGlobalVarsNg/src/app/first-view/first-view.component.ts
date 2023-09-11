import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  public destroy$ = new Subject();

  constructor(public northiwnd: NorthwindService, public customerService: CustomerService) { }

  public ngOnInit(): void {
    this.northiwnd.getCustomers().pipe(take(1)).subscribe(data => this.northwindCustomers = data);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  public comboSelectionChanging(args: ISimpleComboSelectionChangingEventArgs) {
    this.northiwnd.customer = args.newSelection;
    this.customerService.customerId = args.newSelection.customerId;
  }

  @Input()
  public customerId: string | undefined = this.customerService.customerId;
}
