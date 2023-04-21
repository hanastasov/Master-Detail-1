import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDetailsComponent } from './input-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [{ path: '', component: InputDetailsComponent, children: [{ path: 'search-results', component: SearchResultsComponent, data: { text: 'Search results' } }, { path: 'customer-details', component: CustomerDetailsComponent, data: { text: 'Customer details' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputDetailsRoutingModule {
}
