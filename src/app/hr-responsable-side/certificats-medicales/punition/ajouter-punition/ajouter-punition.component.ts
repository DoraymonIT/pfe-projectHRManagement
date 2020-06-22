import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { PunitionService } from 'src/app/controller/service/punition.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { PunitionEmploye } from 'src/app/controller/model/punition-employe.model';
import { Punition } from 'src/app/controller/model/punition.model';
import { PunitionSmallService } from 'src/app/controller/service/punition-small.service';

@Component({
  selector: 'app-ajouter-punition',
  templateUrl: './ajouter-punition.component.html',
  styleUrls: ['./ajouter-punition.component.css']
})
export class AjouterPunitionComponent implements OnInit {
  constructor( private employeService: PersonnelEmployesService,
               private punitionService: PunitionService,
               private punitionSmall: PunitionSmallService ) { }

  ngOnInit() {
    this.employeService.findAll();
    this.punitionSmall.findAll();
    this.punitionService.ajoutePunitionTitre();
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }

  get ajoutepunition(): string {
    return this.punitionService.ajoutepunition;
  }
  get punitionEmploye(): PunitionEmploye{
    return this.punitionService.punitionEmploye;
  }
  public save(){
if (this.punitionEmploye.id == null){
    return this.punitionService.save();
} else {
  return this.punitionService.update();
}
  }
  get punitions(): Array<Punition> {
    return this.punitionSmall.ps;
  }
  get fullnamePunition(): string {
    return this.employeService.fullnamePunition;
  }
  public getEmployePunitiondoti(doti: string){
    this.employeService.GetEmployePunitionByDoti(doti)
  }
  deletePunition(){
    this.punitionService.deleteByReference(this.punitionEmploye);
  }
}
