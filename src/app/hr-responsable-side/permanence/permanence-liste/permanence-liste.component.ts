import { Component, OnInit } from '@angular/core';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../../controller/model/PermanenceAdministrative';
import {Employe} from '../../../controller/model/employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';

@Component({
  selector: 'app-permanence-liste',
  templateUrl: './permanence-liste.component.html',
  styleUrls: ['./permanence-liste.component.css']
})
export class PermanenceListeComponent implements OnInit {

  constructor(private pemanenceAdministrative : PermanenceAdministrativeService,
              private employeService: PersonnelEmployesService) {}
  cols: any[];

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID-Permanence' },
      { field: 'periode', header: 'Période' },
      { field: 'recuperation', header: 'Récuperation' },
      { field: 'periodeDeRecuperation', header: 'Période de Récuperation' },
      { field: 'date', header: 'Date de permanence' },
    ];
    this.employeService.findAll()
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public listeVide():boolean{
    return this.permanences.length <1 ? true:false;
  }
  chercher(){
    this.pemanenceAdministrative.findAllPermanenceByanneeAndDoti(this.permanenceAdministrative1.periode, this.permanenceAdministrative1.employe.doti);
  }
  getpermanenceByDoti(doti: string){
    if(doti == null){
      this.pemanenceAdministrative.findAll();
    } else {
      this.pemanenceAdministrative.findAllPermanenceByDoti(doti);
    }
  }
  getPermanenceByAnnee(annee: number){
    console.log(annee);
    this.pemanenceAdministrative.findAllPermanenceByannee(annee);
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.pemanenceListe;
  }
  get permanenceAdministrative1(): PermanenceAdministrative {
    return this.pemanenceAdministrative.permanenceAdministrative1;
  }
}
