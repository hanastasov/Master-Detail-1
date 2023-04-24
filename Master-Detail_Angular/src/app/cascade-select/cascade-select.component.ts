import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-cascade-select',
  templateUrl: './cascade-select.component.html',
  styleUrls: ['./cascade-select.component.scss']
})
export class CascadeSelectComponent implements OnInit {
  public northwindRegions: any = null;
  public northwindProducts: any = null;
  public northwindCategories: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Regions').subscribe(data => this.northwindRegions = data);
    this.northwindService.getData('Products').subscribe(data => this.northwindProducts = data);
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
  }
}
