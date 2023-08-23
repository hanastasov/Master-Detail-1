import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { EmployeeType } from 'src/app/models/employee-type';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public northwindEmployees: EmployeeType[] | null = null;
  value: string;
  valueChanged: Subject<string> = new Subject<string>();
  inputSub: Subscription;

  constructor(private northwindService: NorthwindService) { }

  ngOnInit() {
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }

  ngAfterContentInit() {
    this.inputSub = this.valueChanged
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.value = value
        this.northwindService.getData('Employees')
          .subscribe(
            response => {
              this.northwindEmployees = response.filter(employee => {
                return employee.lastName.toLowerCase().includes(value);
              });
            },
            errorResponse => {
              alert("error occured while calling the API");
              console.error(errorResponse);
            }
          );
      });
  }

  onChangeInput(text: string) {
    this.valueChanged.next(text);
  }

  ngOnDestroy() {
    this.inputSub.unsubscribe();
  }
}
