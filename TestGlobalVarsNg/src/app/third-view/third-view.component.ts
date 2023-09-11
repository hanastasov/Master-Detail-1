import { Component } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-third-view',
  templateUrl: './third-view.component.html',
  styleUrls: ['./third-view.component.scss']
})
export class ThirdViewComponent {
  constructor(public northwind: NorthwindService, public customerService: CustomerService) { }
}
