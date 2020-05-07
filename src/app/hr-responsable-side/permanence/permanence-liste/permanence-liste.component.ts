import { Component, OnInit } from '@angular/core';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../../controller/model/PermanenceAdministrative';

@Component({
  selector: 'app-permanence-liste',
  templateUrl: './permanence-liste.component.html',
  styleUrls: ['./permanence-liste.component.css']
})
export class PermanenceListeComponent implements OnInit {

  constructor(private pemanenceAdministrative : PermanenceAdministrativeService) {}
  cols: any[];

  ngOnInit(): void {
    this.pemanenceAdministrative.findAll();
    this.listeVide();
    this.cols = [
      { field: 'periode', header: 'Periode' },
      { field: 'recuperation', header: 'Récuperation' },
      { field: 'periodeDeRecuperation', header: 'Période de Récuperation' },
      { field: 'date', header: 'date de permanence Administrative' },
    ];
  }
  public listeVide():boolean{
    console.log(this.permanences.length);
    return this.permanences.length <1 ? true:false;
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.perm;
  }

}
