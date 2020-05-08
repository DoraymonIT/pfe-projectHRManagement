import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {AjouterEmployeComponent} from './ajouter-employe/ajouter-employe.component';
import {Employe} from '../../controller/model/employe.model';


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
      { field: 'cin', header: 'C I N' },
      { field: 'fullName', header: 'Nom Complet' },
      { field: 'pays', header: 'Pays' },
      { field: 'email', header: 'G-mail' },
      { field: 'doti', header: 'DOTI' },
      { field: 'dateDeNaissance', header: 'Date De Naissance' },

    ];

  }


  onCreateNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
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
    console.log(this.employes.length);
    return this.employes.length <1 ? true:false;
  }
  public deleteByReference(employe: Employe) {
    console.log("ha howa:"+ employe.fullName);
    this.employeService.deleteByReference(employe);
  }
  public editerUnEmployer(employe: Employe){
    console.log(employe);
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
  }