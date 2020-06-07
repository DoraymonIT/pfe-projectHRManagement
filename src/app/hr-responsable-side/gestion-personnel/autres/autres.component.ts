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
import { FormationServiceService } from 'src/app/controller/service/formation-service.service';
import { Formation } from 'src/app/controller/model/formation.model';
import {Grade} from '../../../controller/model/grade.model';
import {PrixService} from '../../../controller/service/prix.service';
import {PunitionService} from '../../../controller/service/punition.service';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {Prix} from '../../../controller/model/prix.model';
import {PunitionEmploye} from '../../../controller/model/punition-employe.model';
import {Punition} from '../../../controller/model/punition.model';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.css']
})
export class AutresComponent implements OnInit {

  constructor(private employeService: PersonnelEmployesService,
              private fs: FormationServiceService,
              private prixService: PrixService,
              private punitionService: PunitionService) { }
  panelOpenState = false;
  ngOnInit(): void {
  }
  public trouverEmployerParSonDoti(value: string) {
    this.employeService.trouverEmployerParSonDoti(value);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get prixs(): Array<PrixEmploye> {
    return this.prixService.prixs;
  }
  get punitions(): Array<PunitionEmploye> {
    return this.punitionService.punitions;
  }
  get employeInfo(): Employe {
    return this.employeService.employeInfo;
  }
  get saleireEmolye(): SalaireEmploye {
    return this.employeService.saleireEmolye;
  }
  public Trouversalaireemploye(value: string){
    this.employeService.trouverSalaireParSonDoti(value);
  }
  public TrouverFPP(x: string) {
    this.prixService.findallPrixByDoti(x);
    this.punitionService.findallPunitionByDoti(x);
    return this.fs.findFormationByDoti(x);
  }
  get formations(): Array<Formation> {
    return this.fs.formations;
  }
  public imprimerInfoEmploye(){
    this.employeService.imprimerInfoLesEmploye();
  }
}
