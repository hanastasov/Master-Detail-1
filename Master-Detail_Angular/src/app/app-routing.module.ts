import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ComboDetailsComponent } from './combo-details/combo-details.component';
import { SelectDetailsComponent } from './select-details/select-details.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list-details', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'combo-details', component: ComboDetailsComponent, data: { text: 'Combo-details' } },
  { path: 'select-details', component: SelectDetailsComponent, data: { text: 'Select-details' } },
  { path: '', redirectTo: 'list-details', pathMatch: 'full' },

  { path: 'list-details/:customerId', component: ListDetailsComponent },

  { path: 'input-details', loadChildren: () => import('./input-details/input-details.module').then(m => m.InputDetailsModule) },
  { path: 'cascade-select', component: CascadeSelectComponent, data: { text: 'Cascade select' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
