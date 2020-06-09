import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {PermanenceAdministrativeService} from '../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../controller/model/PermanenceAdministrative';
import {Employe} from '../../controller/model/employe.model';
import {CongeService} from '../../controller/service/conge.service';

@Component({
  selector: 'app-permanence',
  templateUrl: './permanence.component.html',
  styleUrls: ['./permanence.component.css']
})
export class PermanenceComponent implements OnInit {

  constructor(private pemanenceAdministrative: PermanenceAdministrativeService,
              private employerService: PersonnelEmployesService) { }
  cols: any[];

  ngOnInit(): void {
  }
  get employes(): Array<Employe> {
    return this.employerService.employes;
  }
  get employe(): Employe {
    return this.employerService.employe;
  }
  public listeVide():boolean{
    return this.permanences.length <1 ? true:false;
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.perm;
  }
public deleteByReference(permanenece: PermanenceAdministrative) {
    this.pemanenceAdministrative.deleteByReference(permanenece);
  }
  public getPermanenceByDoti(){
    document.getElementById('tablePermanence').style.display = 'inline';
    this.pemanenceAdministrative.findAllPermanenceByDoti(this.employe.doti);
  }
  public editerUnepermanence(permanence: PermanenceAdministrative){
    this.demo1BtnClick(2);
    this.pemanenceAdministrative.editerUnEmployer(permanence);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }
}
