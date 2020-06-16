import { Component, OnInit } from '@angular/core';
import {DepartemntService} from '../../../controller/service/departemnt.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {Employe} from '../../../controller/model/employe.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ListeFonctionComponent} from './ListeFonction/liste.component';
import { DialogDepComponent } from './dialog-dep/dialog-dep.component';
import {DepFonction} from '../../../controller/model/dep-fonction.model';
import {DepFonctionService} from '../../../controller/service/dep-fonction.service';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  cols: any[];
  constructor(private departementservice: DepartemntService,
              private employeservice: PersonnelEmployesService,
              private dialog: MatDialog,
              private depFonction: DepFonctionService) { }
  public tabindex;
  public demo1TabIndex = 0;
  ngOnInit(): void {
    this.departementservice.findAll();
    this.listeVide();
    this.cols = [
      { field: 'nom', header: 'Nom de Département' },
      { field: 'fullname', header: 'Chef de Département' },
    ];
  }
// a faire delete departement edit departement
  public listeVide(): boolean {
    return this.deps.length < 1 ? true : false;
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  public imprimerLesdepartement() {
    this.departementservice.imprimerLesdepartements();
  }
  public  imprimerLesdepartementENEXCEL(){
    this.departementservice.listeDesGradesEmployesExcel();
  }
  public trouverFonctionParNomDepDialog(value: Departement) {
    this.depFonction.findDepFonctionByDepartement(value);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '100%';
    this.dialog.open(ListeFonctionComponent, dialogConfig);
  }
  public modifierDepartement(value: Departement){
    this.demo1BtnClick(1);
    this.departementservice.EditerDepartement(value);
  }
  get deps(): Array<Departement> {
    return this.departementservice.deps;
  }
  get employes(): Array<Employe> {
    return this.employeservice.employes;
  }
  trouverEmployesParNomDepDialog(dep: Departement) {
    this.employeservice.trouverEmployerParNomDepartement(dep.nom);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '100%';
    this.dialog.open(DialogDepComponent,
      dialogConfig);
  }
}
