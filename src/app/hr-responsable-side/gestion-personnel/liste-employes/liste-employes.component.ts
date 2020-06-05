import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AjouterEmployeComponent } from '../ajouter-employe/ajouter-employe.component';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit {

  constructor(private dialog :MatDialog, private employeService : PersonnelEmployesService) { }
  cols: any[];

  ngOnInit(): void {
    this.employeService.findAll();
    this.listeVide();
    this.cols = [
      { field: 'cin', header: 'C I N' },
      { field: 'firstName', header: 'Prenom' },
      { field: 'lastName', header: 'nom' },
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
this.employeService.deleteByReference(employe);
}
public editerUnEmployer(employe: Employe){
this.employeService.editerUnEmployer(employe);
}
}
