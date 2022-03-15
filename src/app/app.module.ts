import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { DisplayCountryDataComponent } from './country/display-country-data/display-country-data.component';
import { NgZorroAntdModule } from './antd/antd.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [
    AppComponent,
    AddCountryComponent,
    DisplayCountryDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NzInputModule,
    NzModalModule,
    BrowserAnimationsModule
  ],

  providers: [{provide:NZ_I18N,useValue:en_US}],
  bootstrap: [AppComponent]
})
export class AppModule { }
