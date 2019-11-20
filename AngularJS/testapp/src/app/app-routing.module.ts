import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { HeaderChildComponent } from './header/header-child/header-child.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { Node1Component } from './header/header_child/node1/node1.component';
import { Node2Component } from './header/header_child/node2/node2.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [

  {
    path: 'header',
    component: HeaderComponent,
    canActivate:[AuthGuardGuard],
    children: [
      {
        path: 'header2',
        component: Header2Component 
      },
      {
        path: 'header_child',
        component: HeaderChildComponent,
        children:[
          {
            path: 'node1',
            component: Node1Component 
          },
          {
            path: 'node2',
            component: Node2Component 
          }
        ]
      }
    ]
  },
  {
    path: 'footer',
    component: FooterComponent,
    children:[
      {
        path: 'footer1',
        component: Footer1Component 
      },
      {
        path: 'footer2',
        component: Footer2Component
      }
    ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
