import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSimpleComboModule, IgxGridModule, IgxInputGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    MasterViewComponent,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule,
    IgxSimpleComboModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxPieChartModule
  ]
})
export class MasterViewModule {
}
