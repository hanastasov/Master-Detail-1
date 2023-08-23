import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputDetailsRoutingModule } from './input-details-routing.module';
import { InputDetailsComponent } from './input-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxAvatarModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    InputDetailsComponent,
    SearchResultsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    InputDetailsRoutingModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCardModule,
    IgxAvatarModule,
    FormsModule,
    IgxGridModule
  ]
})
export class InputDetailsModule {
}
