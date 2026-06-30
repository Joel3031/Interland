import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscrowComponent } from './products/escrow/escrow.component';
import { VirtualaccountComponent } from './products/virtualaccount/virtualaccount.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    EscrowComponent,
    VirtualaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
