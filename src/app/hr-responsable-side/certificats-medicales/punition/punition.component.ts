import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Employe} from '../../../controller/model/employe.model';
import {PunitionService} from '../../../controller/service/punition.service';
import {PunitionEmploye} from '../../../controller/model/punition-employe.model';

@Component({
  selector: 'app-punition',
  templateUrl: './punition.component.html',
  styleUrls: ['./punition.component.css']
})
export class PunitionComponent implements OnInit {
  public tabindex;
  public demo1TabIndex = 0;
  chercher: boolean;
  constructor(private punitionService: PunitionService,
              private employeService: PersonnelEmployesService) { }
  ngOnInit(): void {
    this.chercher = true;
  }
  get punitions(): Array<PunitionEmploye> {
    return this.punitionService.punitions;
  }
  public getPunitionnByDoti() {
    if (this.employe.doti === null){
      document.getElementById('tablePunition').style.display = 'none';
    } else {
    document.getElementById('tablePunition').style.display = 'inline';
    document.getElementById('checherPunition').style.display = 'none';
    this.punitionService.findallPunitionByDoti(this.employe.doti);
    }
  }
  public imprimerLesPunitionsEnEXCEL(value: Array<PunitionEmploye>){
    this.punitionService.listeDesPunitionsExcel(value);
  }
  public getDernieroutoutPunitions(){
    if(this.employe.pays == 'dernierPeriode'){
      this.punitionService.findDernierPunitionEmploye(this.employe.doti);
    } else if(this.employe.pays == 'all'){
      this.punitionService.findallPunitionByDoti(this.employe.doti);
    }
  }
  public imprimerLesPunitions(value: Array<PunitionEmploye>) {
    this.punitionService.imprimerLesPunitions(value);
  }
  public editerUnePunition(punition: PunitionEmploye) {
    this.demo1BtnClick(2);
    this.punitionService.editerCettePuition(punition);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }

  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  get employe(): Employe {
    return this.employeService.employePunition;
  }
  public listeVide(): boolean {
    return this.punitions.length < 1 ? true : false;
  }
  public afficher() {
    // tslint:disable-next-line:triple-equals
    if(this.chercher == true){
      document.getElementById('checherPunition').style.display = 'none';
      this.chercher = false;
    } else {
      document.getElementById('checherPunition').style.display = 'inline';
    }
  }
}
