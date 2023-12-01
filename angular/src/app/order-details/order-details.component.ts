import { Component, Input, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  public selectedOrdersDetails: any = [];

  @Input() public orderID: number;
 
  constructor(private northwindService: NorthwindService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      this.orderID = parseInt(params.get('orderId'), 10);
      
      this.northwindService.getCustomerOrderDetails(this.orderID).subscribe(data => {
        this.selectedOrdersDetails = data;
      });
    });

  }
}
