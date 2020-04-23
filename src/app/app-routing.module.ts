import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSideComponent } from './login-side/login-side.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { DocumentAdministrativeComponent } from './hr-responsable-side/document-administrative/document-administrative.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';

const routes: Routes = [
  {
    path: '',
    component: LoginSideComponent
  },
  {
    path: 'RhResponsable',
    component: HRResponsableSideComponent,
    children:[
      {
       path : 'overview',
       component: OverreviewComponent,
       outlet:'un'
      },{
        path: 'abscence',
        component : AbsenceEtCongeComponent,
        outlet:'un'
      },{
        path: 'documents',
        component : DocumentAdministrativeComponent,
        outlet:'un'
      }
    ]
  }
  ,{
    path: 'logout',
    component : LoginSideComponent,
  },
  {
    path: 'forgetPassword',
    component: ForgotPasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
