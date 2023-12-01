import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'first-view', pathMatch: 'full' },
  { path: 'first-view', component: FirstViewComponent },
  { path: 'second-view', component: SecondViewComponent },
  { path: 'third-view', component: ThirdViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
