import { Component, OnInit } from '@angular/core';
import {DocumentServiceService} from '../../../../controller/service/document-service.service';
import {PersonnelEmployesService} from '../../../../controller/service/personnel-employes.service';
import {Employe} from '../../../../controller/model/employe.model';
import {Departement} from '../../../../controller/model/departement.model';
import {GradeEmploye} from '../../../../controller/model/grade-employe.model';
import {Grade} from '../../../../controller/model/grade.model';
import {DemaneDeDocument} from '../../../../controller/model/demane-de-document.model';
import {TypeDocument} from '../../../../controller/model/type-document.model';
import { ListeDesDocumentsEmployeComponent } from '../liste-des-documents-employe/liste-des-documents-employe.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-liste-des-demandes-documents-employe',
  templateUrl: './liste-des-demandes-documents-employe.component.html',
  styleUrls: ['./liste-des-demandes-documents-employe.component.css']
})
export class ListeDesDemandesDocumentsEmployeComponent implements OnInit {

  constructor(private documentService: DocumentServiceService,
              private employeService: PersonnelEmployesService,private dialog :MatDialog) { }
cols: any[];
  ngOnInit(): void {
    this.employeService.findAll();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'cin', header: 'CIN' },
      { field: 'doti', header: 'Numero' },
      { field: 'fullName', header: 'Nom Complet' },
      { field: 'email', header: 'G-mail' },
      
    ];
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public listeVide():boolean{
//    console.log(this.employes.length);
    return this.employes.length <1 ? true:false;
  }
  public trouverDemandeParSonDoti(employe: Employe){
    this.documentService.trouverDemandeParSonDoti(employe);
  }
  get documents(): Array<DemaneDeDocument> {
    return this.documentService.documents;
  }
  public getFullName(employe: Employe): string{
    return employe.fullName;
  }
  trouverHistoriqueDemandeDialog(employe: Employe) {
    this.documentService.trouverDemandeParSonDoti(employe);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "100%";
    this.dialog.open(ListeDesDocumentsEmployeComponent,
      dialogConfig);
  }
  get documentsByDoti(): Array<DemaneDeDocument> {
    return this.documentService.documentsByDoti;
  }

}
