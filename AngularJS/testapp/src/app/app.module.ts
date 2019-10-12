import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { HeaderChildComponent } from './header/header-child/header-child.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { Node1Component } from './header/header_child/node1/node1.component';
import { Node2Component } from './header/header_child/node2/node2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component,
    HeaderChildComponent,
    Footer1Component,
    Footer2Component,
    Node1Component,
    Node2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
