import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './pagine/home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MDBBootstrapModule.forRoot(), AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
