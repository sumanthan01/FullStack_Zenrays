import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { HeaderChildComponent } from './header/header-child/header-child.component';


const routes: Routes = [

  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent 
  },
  {
    path: 'header/header2',
    component: Header2Component 
  },
  {
    path: 'header/header_child',
    component: HeaderChildComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
