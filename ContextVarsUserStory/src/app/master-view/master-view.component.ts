import { Component, OnInit } from '@angular/core';
import { OrderDetailDto } from '../models/northwind-extended/order-detail-dto';
import { OrderDto } from '../models/northwind-extended/order-dto';
import { CustomerDto } from '../models/northwind-extended/customer-dto';
import { NorthwindExtendedService } from '../services/northwind-extended.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindExtendedCustomerDto!: CustomerDto[];
  public northwindExtendedCustomerDto1!: CustomerDto[];
  public northwindExtendedOrderDto!: OrderDto[];
  public northwindExtendedOrderDetailDto!: OrderDetailDto[];

  public selectedCustomerID!: any;
  public selectedOrderID!: any;

  constructor(
    private northwindExtendedService: NorthwindExtendedService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindExtendedService.getCustomerDto().subscribe(data => this.northwindExtendedCustomerDto = data);
    this.northwindExtendedService.getCustomerDto().subscribe(data => this.northwindExtendedCustomerDto1 = data);
    this.northwindExtendedService.getOrderDto().subscribe(data => this.northwindExtendedOrderDto = data);
    this.northwindExtendedService.getOrderDetailDto().subscribe(data => this.northwindExtendedOrderDetailDto = data);
  }
}
