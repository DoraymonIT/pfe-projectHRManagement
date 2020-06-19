import { Component, OnInit } from '@angular/core';
import {Departement} from '../../../../controller/model/departement.model';
import {Employe} from '../../../../controller/model/employe.model';
import {DepartemntService} from '../../../../controller/service/departemnt.service';
import {PersonnelEmployesService} from '../../../../controller/service/personnel-employes.service';
import {GradeEmploye} from '../../../../controller/model/grade-employe.model';
import {Grade} from '../../../../controller/model/grade.model';

@Component({
  selector: 'app-dep-ajout',
  templateUrl: './dep-ajout.component.html',
  styleUrls: ['./dep-ajout.component.css']
})
export class DepAjoutComponent implements OnInit {

  constructor(private departementservice: DepartemntService,
              private employeservice: PersonnelEmployesService) { }

  ngOnInit(): void {
    this.employeservice.findAll();
  }
  get departement(): Departement {
    return this.departementservice.departement;
  }
  get employes(): Array<Employe> {
    return this.employeservice.employes;
  }
  public save(){
    if(this.departement.id == null) {
      this.departementservice.save();
    } else {
      this.departementservice.update();
    }
  }
  trouverEmployedepartementParSonDoti(doti: string){
    this.employeservice.GetEmployeDepartementByDoti(doti);
  }
  get fullnameDepartement(): string {
    return this.employeservice.fullnameDepartement;
  }

}
