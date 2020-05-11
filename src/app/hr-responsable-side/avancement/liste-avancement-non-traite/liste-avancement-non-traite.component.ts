import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {AjouterEmployeComponent} from '../../gestion-personnel/ajouter-employe/ajouter-employe.component';
import {Employe} from '../../../controller/model/employe.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {RapportDeEvaluation} from '../../../controller/model/rapport-de-evaluation.model';
import {GradeService} from '../../../controller/service/grade.service';
import {AvancementServiceService} from '../../../controller/service/avancement-service.service';
import {Grade} from '../../../controller/model/grade.model';

@Component({
  selector: 'app-liste-avancement-non-traite',
  templateUrl: './liste-avancement-non-traite.component.html',
  styleUrls: ['./liste-avancement-non-traite.component.css']
})
export class ListeAvancementNonTraiteComponent implements OnInit {

  constructor(private employeService : PersonnelEmployesService,
              private gradesEmploye: GradeService,
              private avancementService: AvancementServiceService) { }
  cols: any[];
  cols1: any[];
  panelOpenState = false;

  ngOnInit(): void {
    this.employeService.findAll();
    this.listeVide();
    this.cols = [
      { field: 'cin', header: 'C I N' },
      { field: 'fullName', header: 'Nom Complet' },
      { field: 'pays', header: 'Pays' },
      { field: 'email', header: 'G-mail' },
      { field: 'doti', header: 'DOTI' },
      { field: 'dateDeNaissance', header: 'Date De Naissance' },
    ];
    this.cols1 = [
      { field: 'id', header: 'id' },
      { field: 'doti', header: 'employe' },
      { field: 'grade.libelle', header: 'libelle grade' },
      { field: 'dateDeAffectation', header: 'date Affectation '},
    ];
  }
  public findAllGradeEmployeByDoti(employe: Employe){
    this.gradesEmploye.findAllGradeEmployeByDoti(employe.doti);
  }
  get gradesEployess(): Array<GradeEmploye> {
    return this.gradesEmploye.gradesEployess;
  }
  public trouverRapportParEmployeDoti(gradeEmloye: GradeEmploye){
    this.avancementService.findRapportByGradeIdAndEmployeDoti(gradeEmloye.id, gradeEmloye.doti);
  }
  get rapportEvaluation(): RapportDeEvaluation {
    return this.avancementService.rapportEvaluation;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public listeVide():boolean{
    console.log(this.employes.length);
    return this.employes.length <1 ? true:false;
  }

}
