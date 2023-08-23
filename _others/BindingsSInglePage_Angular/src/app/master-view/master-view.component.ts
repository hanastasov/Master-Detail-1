import { Component, OnInit } from '@angular/core';
import { EmployeesType } from '../models/northwind/employees';
import { NorthwindService } from '../services/northwind.service';
import { ISelectionEventArgs } from 'igniteui-angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindEmployees!: EmployeesType[];

  public targetEmployee: EmployeesType | undefined;

  constructor(
    public dataService: DataService,
    private northwindService: NorthwindService,
    private router: Router
  ) { }

  public ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);

    if (this.northwindEmployees.length) {
      this.targetEmployee = this.northwindEmployees[0];
    }
  }

  public onSelectionChanging(event: ISelectionEventArgs) {
    this.targetEmployee = this.northwindEmployees.find(e => e.employeeID === event.newSelection.value);
  }

  public onClick(id: number) {
    this.router.navigate(['/details-view'], { queryParams: { employeeID: id } });
  }
}
