import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Employees, NorthwindService } from 'src/app/services/northwind.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  public selectedEmployee: Employees[] | null = null;
  public northwindOrders: any = null;
  public northwindOrderDetails: any = null;
  public selectedOrdersData: any = [];
  public selectedOrdersDetails: any = [];
  public detailsAreLoading = true;
  public selectedRows = [10265];

  constructor(private route: ActivatedRoute, private northwindService: NorthwindService) { }

  ngOnInit(): void {
    this.northwindService.getData('Employees').subscribe(data => this.selectedEmployee = data.filter(employees => {
      return employees.employeeID == this.route.snapshot.queryParamMap.get('employeeID');
    }));
    this.northwindService.getData('Orders').subscribe(data => {
      this.northwindOrders = data.filter(orders => {
        return orders.employeeID == this.route.snapshot.queryParamMap.get('employeeID');
      })
    });
    this.northwindService.getData('order_details').subscribe(data => this.northwindOrderDetails = data);
    this.selectedOrdersDetails  = this.northwindOrderDetails.filter(el => el.orderID === this.selectedRows[0]);
  }

  public orderSelected(orderID: IRowSelectionEventArgs) {
    this.detailsAreLoading = true;
    this.selectedOrdersDetails = this.northwindOrderDetails.filter(el => el.orderID === orderID.newSelection[0]);
    this.detailsAreLoading = false;
  }
}
