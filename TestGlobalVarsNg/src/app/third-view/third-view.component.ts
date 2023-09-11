import { Component, Input } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-third-view',
  templateUrl: './third-view.component.html',
  styleUrls: ['./third-view.component.scss']
})
export class ThirdViewComponent {
  constructor(public northiwnd: NorthwindService, public customerService: CustomerService) { }

  @Input()
  public customerId: string | undefined = this.customerService.customerId;
}
