import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {CongeService} from '../../../controller/service/conge.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Employe} from '../../../controller/model/employe.model';
import {CongeEmploye} from '../../../controller/model/conge-employe.model';
import {TypeCongee} from '../../../controller/model/type-congee.model';
import {LazyLoadEvent} from 'primeng/api/lazyloadevent';
import {ListeDesJoursFriesComponent} from '../liste-des-jours-fries/liste-des-jours-fries.component';
import {EditerComponent} from '../editer/editer.component';

@Component({
  selector: 'app-liste-des-conge',
  templateUrl: './liste-des-conge.component.html',
  styleUrls: ['./liste-des-conge.component.css']
})
export class ListeDesCongeComponent implements OnInit {

  constructor( private employeService: PersonnelEmployesService,
               private congeservice: CongeService,
               private dialog: MatDialog) { }
  get employes(): Array<Employe> {
    return this.employeService.employeConge;
  }

  get conges(): Array<CongeEmploye> {
    return this.congeservice.conges;
  }
  get typeConge(): Array<TypeCongee> {
    return this.congeservice.typeConge;
  }
  get filterrsult(): TypeCongee {
    return this.congeservice.filterrsult;
  }
  get congeEmployeCOnge(): CongeEmploye {
    return this.congeservice.congeEmployeCOnge;
  }
  public checher(){
    this.employeService.getCongeBetween(this.congeEmployeCOnge.dateDeDebut, this.congeEmployeCOnge.dateDeFin);
  }
  cols: any[];
  public tabindex;
  public demo1TabIndex = 0;
  loading: boolean;
  totalRecords: number;
  dataSource: Array<Employe> = [];
  ngOnInit(): void {
    this.employeService.getCongeActuelle();
    this.dataSource = this.employes;
    this.cols = [
      { field: 'cin', header: 'CIN' },
      { field: 'doti', header: 'Numéro' },
      { field: 'lastName', header: 'Nom' },
      { field: 'firstName', header: 'Prenom' },
      { field: 'email', header: 'Email' },
      { field: 'soldeRestantesCongeExceptionnel', header: 'solde Restantes' },
    ];
    this.loading = true;
    this.totalRecords = this.employes.length;
  }
  public imprimerListeEmployeAvecSoldePdf(){
    this.employeService.listeDesEmployeAvecSoldePdf();
  }
  public imprimerListeEmployeAvecSoldeExcel(){
    this.employeService.listeDesEmployeAvecSoldeCongéExcel();
  }
  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;


    setTimeout(() => {
      if (this.employes) {
        this.dataSource = this.employes.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 4000);
  }
  public deleteByReference(conge: CongeEmploye) {
    this.congeservice.deleteByReference(conge);
  }
  public editerUnConge(conge: CongeEmploye) {
  this.demo1BtnClick(3);
    this.congeservice.editerUnEmployer(conge);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }

  public listeVide(): boolean {
    return this.employes.length < 1 ? true : false;
  }
  trouverCongeParSonDotiDialog(emp: Employe) {
    this.congeservice.trouverCongéParSonDoti(emp.doti);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '80%';
    this.dialog.open(ListeDesJoursFriesComponent,
      dialogConfig);
  }


}
