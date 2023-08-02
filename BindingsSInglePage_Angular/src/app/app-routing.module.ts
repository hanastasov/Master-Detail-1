import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MasterViewComponent } from './master-view/master-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: '', redirectTo: 'master-view', pathMatch: 'full' }, { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: 'details-view', component: DetailsViewComponent, data: { text: 'Details View' } },
  { path: 'details-view/:employeeID', component: DetailsViewComponent, data: { text: 'Details View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
