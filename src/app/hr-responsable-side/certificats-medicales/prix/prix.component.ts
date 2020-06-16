import { Component, OnInit } from '@angular/core';
import {PrixService} from '../../../controller/service/prix.service';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {Prix} from '../../../controller/model/prix.model';
import {Employe} from '../../../controller/model/employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  public tabindex;
  public demo1TabIndex = 0;
chercher: boolean;
  constructor(private prixService: PrixService,
              private employeService: PersonnelEmployesService) { }

  ngOnInit(): void {
    this.chercher = true;
  }
  public getPrixxByDoti() {
    if( this.employe.doti === null){
      document.getElementById('tablePrix').style.display = 'none';
    } else {
      document.getElementById('tablePrix').style.display = 'inline';
      document.getElementById('checherPrix').style.display = 'none';
      this.prixService.findallPrixByDoti(this.employe.doti);
    }
  }
  public getDernieroutoutPrix(){
    if(this.employe.pays == 'dernierPeriode'){
      this.prixService.findDernierPrixeEmploye(this.employe.doti);
    } else if(this.employe.pays == 'all'){
      this.prixService.findallPrixByDoti(this.employe.doti);
    }
  }
  public editerUnPrix(prix: PrixEmploye){
    this.demo1BtnClick(2);
    this.prixService.editerCePrixx(prix);
  }
  public ExporterLesPrixENEXCEL(value: Array<PrixEmploye>){
    this.prixService.listeDesPrixExcel(value);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
public imprimerLesPrix(value: Array<PrixEmploye>) {
    this.prixService.imprimerLesPrix(value);
}
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  get employe(): Employe {
    return this.employeService.employePrix;
  }
  get prixs(): Array<PrixEmploye> {
    return this.prixService.prixs;
  }
  public listeVide(): boolean {
    return this.prixs.length < 1 ? true : false;
  }
  public afficher(){
    // tslint:disable-next-line:triple-equals
    if(this.chercher == true){
      document.getElementById('checherPrix').style.display = 'none';
      this.chercher = false;
    } else {
      document.getElementById('checherPrix').style.display = 'inline';
    }
  }
}
