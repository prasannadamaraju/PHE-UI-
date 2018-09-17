import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { AppRoutingModule } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    AdminHomepageComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
