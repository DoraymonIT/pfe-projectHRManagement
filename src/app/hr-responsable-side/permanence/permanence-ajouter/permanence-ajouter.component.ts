import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {Employe} from '../../../controller/model/employe.model';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {PermanenceAdministrative} from '../../../controller/model/PermanenceAdministrative';

@Component({
  selector: 'app-permanence-ajouter',
  templateUrl: './permanence-ajouter.component.html',
  styleUrls: ['./permanence-ajouter.component.css']
})
export class PermanenceAjouterComponent implements OnInit {

  constructor(public employeService: PersonnelEmployesService,
              private pemanenceAdministrativeservice : PermanenceAdministrativeService) { }

  ngOnInit(): void {
    this.employeService.findAll();
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get permanenceAdministrative(): PermanenceAdministrative {
    return this.pemanenceAdministrativeservice.permanenceAdministrative;
  }
  public trouverEmployerParSonDoti(value: number){
    this.pemanenceAdministrativeservice.trouverEmployerParSonDoti(value);
  }
  public save(){
    this.pemanenceAdministrativeservice.save();
  }
}
