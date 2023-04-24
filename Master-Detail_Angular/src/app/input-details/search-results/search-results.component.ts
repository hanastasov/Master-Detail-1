import { Component, OnInit } from '@angular/core';
import { Employees, NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public northwindEmployees: Employees[] | null = null;

  constructor(private northwindService: NorthwindService) {}

  ngOnInit() {
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }

  public onInput(e: any) {
    this.northwindService.getData('Employees')
    .subscribe(
      response => {
        this.northwindEmployees = response.filter(employee => {
          return employee.lastName.toLowerCase().includes(e.target.value);
        });
      },
      errorResponse => {
        alert("oh no, there was an error when calling the API");
        console.error(errorResponse);
      }
    );
  }
}
