import { Component, OnInit } from '@angular/core';
import {DepartemntService} from '../../../controller/service/departemnt.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {Employe} from '../../../controller/model/employe.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListeDesJoursFriesComponent } from '../../absence-et-conge/liste-des-jours-fries/liste-des-jours-fries.component';
import { ListeComponent } from './liste/liste.component';
import { DialogDepComponent } from './dialog-dep/dialog-dep.component';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  cols: any[];
  constructor(private departementservice: DepartemntService,
              private employeservice: PersonnelEmployesService,private dialog :MatDialog) { }
  ngOnInit(): void {
    this.departementservice.findAll();
    this.listeVide();
    this.cols = [
      // { field: 'id', header: 'id' },

      // { field: '', header: '' },
      { field: 'nom', header: 'Nom Departement' },
      // { field: 'chef.fullName', header: 'Chef de departement' },

    ];
  }
//a faire delete departement edit departement
  public listeVide():boolean{
    //  console.log(this.de.length);
    return this.deps.length <1 ? true:false;
  }
  get deps(): Array<Departement> {
    return this.departementservice.deps;
  }
  get employes(): Array<Employe> {
    return this.employeservice.employes;
  }
  public trouverEmployeParNomDep(value: Departement){
    this.employeservice.trouverEmployerParNomDepartement(value.nom);
  }
  trouverEmployesParNomDepDialog(dep: Departement) {
    this.employeservice.trouverEmployerParNomDepartement(dep.nom);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "80%";
    this.dialog.open(DialogDepComponent,
      dialogConfig);
  }
}
