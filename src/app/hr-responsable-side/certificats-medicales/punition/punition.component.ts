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
  constructor(private punitionService: PunitionService,
              private employeService: PersonnelEmployesService) { }

  ngOnInit(): void {
  }
  get punitions(): Array<PunitionEmploye> {
    return this.punitionService.punitions;
  }
  public getPunitionnByDoti() {
    document.getElementById('tablePunition').style.display = 'inline';
    this.punitionService.findallPunitionByDoti(this.employe.doti);
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
    return this.employeService.employe;
  }
  public listeVide(): boolean {
    return this.punitions.length < 1 ? true : false;
  }

}
