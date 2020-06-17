import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {CongeService} from '../../../controller/service/conge.service';
import {Employe} from '../../../controller/model/employe.model';
import {CongeEmploye} from '../../../controller/model/conge-employe.model';
import {TypeCongee} from '../../../controller/model/type-congee.model';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {


  constructor( private employeService: PersonnelEmployesService,
               private congeservice: CongeService) { }
  ngOnInit() {
    this.employeService.findAll();
    this.congeservice.findAll();
    this.congeservice.ajouteCongeEmploye();
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public ajouterRaison(value: string){
    if(value === 'conge exceptionnel'){
      document.getElementById('raison').style.display = 'inline';
    }else{
      document.getElementById('raison').style.display = 'none';
    }
  }
  get congeEmploye(): CongeEmploye {
    return this.congeservice.congeEmploye;
  }
  get typeConge(): Array<TypeCongee> {
    return this.congeservice.typeConge;
  }
  public save() {
    if (this.congeEmploye.id == null) {
      this.congeservice.save();
    } else {
    this.congeservice.update();
  }
  }
  get ajouteCongeEmp(): string {
    return this.congeservice.ajouteCongeEmp;
  }
}
