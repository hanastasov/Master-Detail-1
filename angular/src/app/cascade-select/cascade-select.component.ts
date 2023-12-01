import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-cascade-select',
  templateUrl: './cascade-select.component.html',
  styleUrls: ['./cascade-select.component.scss']
})
export class CascadeSelectComponent implements OnInit {
  public northwindJasonCustomer: any = null;

  constructor(
    private northwindJasonService: NorthwindService
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindJasonService.getCustomers().subscribe(data => this.northwindJasonCustomer = data);
  }
}
