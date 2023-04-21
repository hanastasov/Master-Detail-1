import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComboDetailsComponent } from './combo-details/combo-details.component';
import { IgxButtonModule, IgxRippleModule, IgxComboModule, IgxInputGroupModule, IgxGridModule, IgxSelectModule, IgxListModule, IgxAvatarModule, IgxSimpleComboModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SelectDetailsComponent } from './select-details/select-details.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComboDetailsComponent,
    SelectDetailsComponent,
    ListDetailsComponent,
    CascadeSelectComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxComboModule,
    IgxInputGroupModule,
    IgxGridModule,
    FormsModule,
    IgxSelectModule,
    IgxListModule,
    IgxAvatarModule,
    HttpClientModule,
    IgxSimpleComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
