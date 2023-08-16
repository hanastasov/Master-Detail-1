import { Component, Input, OnInit } from '@angular/core';
import { EmployeesType } from '../models/northwind/employees';
import { NorthwindService } from '../services/northwind.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  public northwindEmployees!: EmployeesType[];

  constructor(
    private northwindService: NorthwindService,
    private dataService: DataService
  ) {}

  @Input()
  public employeeID!: string;

  public targetEmployee: EmployeesType | undefined;

  public ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);

    if (this.northwindEmployees.length) {
      this.targetEmployee = this.northwindEmployees.find(e => e.employeeID.toString() === this.employeeID);
    }
  }

  public onClickWithGlobalVar() {
    // awalys cast to string?
    this.targetEmployee = this.northwindEmployees.find(e => e.employeeID === this.dataService.employeeID);
  }
 }
