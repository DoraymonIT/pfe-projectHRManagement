import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {AjouterEmployeComponent} from './ajouter-employe/ajouter-employe.component';
import {Employe} from '../../controller/model/employe.model';
import {ListeDesJoursFriesComponent} from '../absence-et-conge/liste-des-jours-fries/liste-des-jours-fries.component';
import {AutresComponent} from './autres/autres.component';


@Component({
  selector: 'app-gestion-personnel',
  templateUrl: './gestion-personnel.component.html',
  styleUrls: ['./gestion-personnel.component.css']
})
export class GestionPersonnelComponent implements OnInit {

  constructor(private dialog :MatDialog, private employeService : PersonnelEmployesService) { }
  cols: any[];

  ngOnInit(): void {
    this.employeService.findAll();
    this.listeVide();
    this.cols = [
      { field: 'cin', header: 'CIN' },
      { field: 'doti', header: 'Numéro' },
      { field: 'firstName', header: 'Prénom' },
      { field: 'lastName', header: 'Nom' },
      { field: 'email', header: 'email' },
     //  { field: 'tel', header: 'Téléphone' },
      // { field: 'dateProchainEvaluation', header: 'Date de Prochaine Evaluation' },
    ];

  }


  onCreateNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    dialogConfig.height = "100%";
    this.dialog.open(AjouterEmployeComponent, dialogConfig);
  }
  onEdit(emp: Employe) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "100%";
    this.dialog.open(AjouterEmployeComponent,
      dialogConfig);
  }



  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public listeVide():boolean{
    return this.employes.length <1 ? true:false;
  }
  public deleteByReference(employe: Employe) {
    this.employeService.deleteByReference(employe);
  }
  public editerUnEmployer(employe: Employe){
    this.demo1BtnClick(1);
    this.employeService.editerUnEmployer(employe);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }
  get indice(): number {
    return this.employeService.indice;
  }
  public imprimerListeEmploye(){
    this.employeService.imprimerListeEmploye();
  }
  infoUnEmployer(emp: Employe) {
    this.employeService.infoUnEmployer(emp);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    dialogConfig.height = '100%';
    this.dialog.open(AutresComponent,
      dialogConfig);
  }
public imprimerListeEmployeExcel(){
    this.employeService.exporterLaListeDesEmployeExcel();
}
  }


