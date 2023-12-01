import { Component, OnDestroy, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-third-view',
  templateUrl: './third-view.component.html',
  styleUrls: ['./third-view.component.scss']
})
export class ThirdViewComponent implements OnInit, OnDestroy {
  public customer?: Customer;
  public destroy$ = new Subject();

  constructor(public northwind: NorthwindService, public customerService: CustomerService) { }

  public ngOnInit(): void {
    this.northwind.customer.pipe(takeUntil(this.destroy$)).subscribe(x => this.customer = x);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
