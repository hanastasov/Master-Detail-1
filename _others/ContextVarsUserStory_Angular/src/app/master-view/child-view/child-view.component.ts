import { Component, OnInit } from '@angular/core';
import { OrderDetailDto } from '../../models/northwind-extended/order-detail-dto';
import { OrderDto } from '../../models/northwind-extended/order-dto';
import { CustomerDto } from '../../models/northwind-extended/customer-dto';
import { NorthwindExtendedService } from '../../services/northwind-extended.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public cardVisible = false;
  public northwindExtendedCustomerDto!: CustomerDto[];

  constructor(
    private northwindExtendedService: NorthwindExtendedService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindExtendedService.getCustomerDto().subscribe(data => this.northwindExtendedCustomerDto = data);
  }
}
