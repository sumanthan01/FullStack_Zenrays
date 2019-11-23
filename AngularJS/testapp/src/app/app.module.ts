import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Testmodule1Module } from './testmodule1/testmodule1.module';
import { GreetPipe } from './greet.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GreetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Testmodule1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
