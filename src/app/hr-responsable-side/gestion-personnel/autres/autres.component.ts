import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Employe} from '../../../controller/model/employe.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Fonction} from '../../../controller/model/fonction.model';
import {Departement} from '../../../controller/model/departement.model';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {SalaireEmploye} from '../../../controller/model/salaire-employe.model';
import {Emoluments} from '../../../controller/model/emoluments.model';
import {Revenu} from '../../../controller/model/revenu.model';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.css']
})
export class AutresComponent implements OnInit {

  constructor(private employeService: PersonnelEmployesService) { }
  panelOpenState = false;
  ngOnInit(): void {
  }
  get employeInfo(): Employe {
    return this.employeService.employeInfo;
  }
  get saleireEmolye(): SalaireEmploye {
    return this.employeService.saleireEmolye;
  }
  public Trouversalaireemploye(value: number){
    this.employeService.trouverSalaireParSonDoti(value);
  }
}
