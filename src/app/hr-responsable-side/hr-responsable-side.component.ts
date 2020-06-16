import { Component, OnInit } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import {LogInService} from '../controller/service/log-in.service';
import {Router} from '@angular/router';
import {DemaneDeDocument} from '../controller/model/demane-de-document.model';
import {Employe} from '../controller/model/employe.model';
import {TypeDocument} from '../controller/model/type-document.model';
import {ToastrService} from 'ngx-toastr';
import {PermanenceAdministrativeService} from '../controller/service/permanence-administrative.service';
import {CongeService} from '../controller/service/conge.service';
import {GradeService} from '../controller/service/grade.service';
import {DocumentServiceService} from '../controller/service/document-service.service';
import {Departement} from '../controller/model/departement.model';
import {GradeEmploye} from '../controller/model/grade-employe.model';
import {Grade} from '../controller/model/grade.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogDepComponent} from './architecture-de-fstg/departement/dialog-dep/dialog-dep.component';
import {ListeEvaluationComponent} from './liste-evaluation/liste-evaluation.component';
import {ListeAvancementComponent} from './liste-avancement/liste-avancement.component';

@Component({
  selector: 'app-hr-responsable-side',
  templateUrl: './hr-responsable-side.component.html',
  styleUrls: ['./hr-responsable-side.component.css']
})
export class HRResponsableSideComponent implements OnInit {
  constructor(private logInService: LogInService,
              private router: Router,
              private login: LogInService,
              private toast: ToastrService,
              private dialog: MatDialog,
              private permanenceService: PermanenceAdministrativeService,
              private congeService: CongeService,
              private avancementService: GradeService,
              private documentService: DocumentServiceService) {
  this.hideMatBadge = false;
  this.ex = 3;
  this.aujourdHui = new Date();
   }
  aujourdHui : Date ;
  // get conncter(): boolean {
  //   return this.logInService.conncter;
  // }
  opened: boolean;

  panelOpenState = false;
  hideMatBadge: boolean;
  ex: number;
  // public connecter(): boolean {
  //   if (this.conncter === false) {
  //     this.router.navigate(['']).then();
  //     return false;
  //   }
  //   return true;
  // }

  ngOnInit(): void {
    // this.connecter();
    this.congeService.resetSoldeCongeEmploye();
    this.permanenceService.findAll();
    this.avancementService.getDateAvancement();
    this.avancementService.getDateEvaluation();
    this.congeService.findallCertificatDansCetteAnnee();
    this.documentService.findAllDemandeNonTraite();
    this.aujourdHui = new Date();
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  get documents(): Array<DemaneDeDocument> {
    return this.documentService.documents;
  }

  time = new Date();
badge(){
 this.hideMatBadge = true;
}
  get employeAvancement(): Array<Employe> {
    return this.avancementService.employeAvancement;
  }
  get employeEvaluation(): Array<Employe> {
    return this.avancementService.employeEvaluation;
  }
  trouverEmployesEvaluationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '100%';
    this.dialog.open(ListeEvaluationComponent,
      dialogConfig);
  }
  trouverEmployesAvancementDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '100%';
    this.dialog.open(ListeAvancementComponent,
      dialogConfig);
  }

}
