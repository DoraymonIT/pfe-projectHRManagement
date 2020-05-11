import { Component, OnInit } from '@angular/core';
import {DocumentServiceService} from '../../../../controller/service/document-service.service';
import {PersonnelEmployesService} from '../../../../controller/service/personnel-employes.service';
import {Employe} from '../../../../controller/model/employe.model';
import {Departement} from '../../../../controller/model/departement.model';
import {GradeEmploye} from '../../../../controller/model/grade-employe.model';
import {Grade} from '../../../../controller/model/grade.model';
import {DemaneDeDocument} from '../../../../controller/model/demane-de-document.model';
import {TypeDocument} from '../../../../controller/model/type-document.model';

@Component({
  selector: 'app-liste-des-demandes-documents-employe',
  templateUrl: './liste-des-demandes-documents-employe.component.html',
  styleUrls: ['./liste-des-demandes-documents-employe.component.css']
})
export class ListeDesDemandesDocumentsEmployeComponent implements OnInit {

  constructor(private documentService: DocumentServiceService,
              private employeService: PersonnelEmployesService) { }
cols: any[];
  ngOnInit(): void {
    this.employeService.findAll();
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'cin', header: 'C I N' },
      { field: 'fullName', header: 'Nom Complet' },
      { field: 'email', header: 'G-mail' },
      { field: 'doti', header: 'DOTI' },
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
}
