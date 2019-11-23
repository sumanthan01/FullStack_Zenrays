import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardGuard } from './auth-guard.guard';



@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
