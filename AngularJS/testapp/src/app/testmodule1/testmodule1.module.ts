import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { Testcomponent1Component } from './testcomponent1/testcomponent1.component';



@NgModule({
  declarations: [TestcomponentComponent, Testcomponent1Component],
  imports: [
    CommonModule
  ],
  exports:[TestcomponentComponent,Testcomponent1Component]
})export class Testmodule1Module { }
