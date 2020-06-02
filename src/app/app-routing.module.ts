import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSideComponent } from './login-side/login-side.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { DocumentAdministrativeComponent } from './hr-responsable-side/document-administrative/document-administrative.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';
import { GestionPersonnelComponent } from './hr-responsable-side/gestion-personnel/gestion-personnel.component';
import { PermanenceComponent } from './hr-responsable-side/permanence/permanence.component';
import { AvancementComponent } from './hr-responsable-side/avancement/avancement.component';
import { NotesEvaluationComponent } from './hr-responsable-side/notes-evaluation/notes-evaluation.component';
import { CertificatsMedicalesComponent } from './hr-responsable-side/certificats-medicales/certificats-medicales.component';
import { ArchitectureDeFSTGComponent } from './hr-responsable-side/architecture-de-fstg/architecture-de-fstg.component';

import { HelpDocumentationComponent } from './help-documentation/help-documentation.component';
import { ParametresAvancesComponent } from './hr-responsable-side/parametres-avances/parametres-avances.component';
import { LogsEtVideoComponent } from './hr-responsable-side/logs-et-video/logs-et-video.component';

const routes: Routes = [
  {
    path: '',
    component: LoginSideComponent
  },


  {
    path: 'RhResponsable',
    component: HRResponsableSideComponent,

    children: [
      {
        path: '',
        component: OverreviewComponent,
        outlet: 'un',


      },
      {
        path: 'overview',
        component: OverreviewComponent,
        outlet: 'un',


      }, {
        path: 'abscence',
        component: AbsenceEtCongeComponent,
        outlet: 'un'
      }, {
        path: 'documents',
        component: DocumentAdministrativeComponent,
        outlet: 'un'
      }, {
        path: 'personnel',
        component: GestionPersonnelComponent,
        outlet: 'un'
      }, {
        path: 'permanence',
        component: PermanenceComponent,
        outlet: 'un'
      }, {
        path: 'avancement',
        component: AvancementComponent,
        outlet: 'un'
      }, {
        path: 'evaluation',
        component: NotesEvaluationComponent,
        outlet: 'un'
      }
      , {
        // blasst mandiru certificats ghandiru punition w formation w prix blasstha hh
        path: 'FPP',
        component: CertificatsMedicalesComponent,
        outlet: 'un'
      } , {
        path: 'architecture',
        component: ArchitectureDeFSTGComponent,
        outlet: 'un'
      }, {
        path: 'parametresAvances',
        component: ParametresAvancesComponent,
        outlet: 'un'
      }, {
        path: 'historique',
        component: LogsEtVideoComponent,
        outlet: 'un'
      }
    ]

  }

  , {
    path: 'logout',
    component: LoginSideComponent,
  },
  {
    path: 'forgetPassword',
    component: ForgotPasswordComponent
  },
   {
    path: 'help',
    component: HelpDocumentationComponent
  },{
    path: '**',
    component: HRResponsableSideComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
