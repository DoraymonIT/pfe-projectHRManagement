import { Component, OnInit } from '@angular/core';
import {DepartemntService} from '../../../controller/service/departemnt.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {Employe} from '../../../controller/model/employe.model';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  cols: any[];
  constructor(private departementservice: DepartemntService,
              private employeservice: PersonnelEmployesService) { }
  ngOnInit(): void {
    this.departementservice.findAll();
    this.listeVide();
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nom', header: 'Nom Departement' },
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
}
