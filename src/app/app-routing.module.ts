import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSideComponent } from './login-side/login-side.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [

  {
    path:'',
    component : LoginSideComponent
  },
  {
    path:'RhResponsable',
    component : HRResponsableSideComponent
  },{
    path:'forgetPassword',
    component : ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
