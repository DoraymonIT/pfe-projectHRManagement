import { Component, OnInit } from '@angular/core';
import {DepartemntService} from '../../../../controller/service/departemnt.service';
import {PersonnelEmployesService} from '../../../../controller/service/personnel-employes.service';
import {Departement} from '../../../../controller/model/departement.model';
import {Employe} from '../../../../controller/model/employe.model';
import {GradeEmploye} from '../../../../controller/model/grade-employe.model';
import {Grade} from '../../../../controller/model/grade.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  cols: any[];

  constructor(private departementservice: DepartemntService,
              private employeservice: PersonnelEmployesService) { }
  ngOnInit(): void {
    this.departementservice.findAll();
    this.listeVide();
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nom', header: 'Nom Departement' },
      { field: 'chef.doti', header: 'chef' },
    ];
  }
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
