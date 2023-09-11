import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';
import { IgxButtonModule, IgxIconModule, IgxNavbarModule, IgxSimpleComboModule } from 'igniteui-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SecondViewComponent,
    ThirdViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxSimpleComboModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
