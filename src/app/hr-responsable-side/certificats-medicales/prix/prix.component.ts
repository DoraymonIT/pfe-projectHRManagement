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

  constructor(private prixService: PrixService,
              private employeService: PersonnelEmployesService) { }

  ngOnInit(): void {
  }
  public getPrixxByDoti() {
    document.getElementById('tablePrix').style.display = 'inline';
    this.prixService.findallPrixByDoti(this.employe.doti);
  }
  public editerUnPrix(prix: PrixEmploye){
    this.demo1BtnClick(2);
    this.prixService.editerCePrixx(prix);
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
    return this.employeService.employe;
  }
  get prixs(): Array<PrixEmploye> {
    return this.prixService.prixs;
  }
  public listeVide(): boolean {
    return this.prixs.length < 1 ? true : false;
  }
}
