import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {PermanenceAdministrativeService} from '../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../controller/model/PermanenceAdministrative';

@Component({
  selector: 'app-permanence',
  templateUrl: './permanence.component.html',
  styleUrls: ['./permanence.component.css']
})
export class PermanenceComponent implements OnInit {

  constructor(private pemanenceAdministrative : PermanenceAdministrativeService,
              private employerService: PersonnelEmployesService) { }
  cols: any[];

  ngOnInit(): void {
    this.pemanenceAdministrative.findAll();
    this.listeVide();
    this.cols = [
      { field: 'id', header: 'Identifiant' },
      { field: 'date', header: 'Date de permanence Administrative' },
      { field: 'periode', header: 'Periode' },
      { field: 'recuperation', header: 'Récuperation' },
      { field: 'periodeDeRecuperation', header: 'Période de Récuperation' },
    ];
  }
  public listeVide():boolean{
    console.log(this.permanences.length);
    return this.permanences.length <1 ? true:false;
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.perm;
  }
public deleteByReference(permanenece: PermanenceAdministrative) {
    console.log("ha howa:"+ permanenece.employe.fullName);
    this.pemanenceAdministrative.deleteByReference(permanenece);
  }
  public editerUnEmployer(permanence: PermanenceAdministrative){
    console.log(permanence);
    this.demo1BtnClick(2);
    this.pemanenceAdministrative.editerUnEmployer(permanence);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }
}
