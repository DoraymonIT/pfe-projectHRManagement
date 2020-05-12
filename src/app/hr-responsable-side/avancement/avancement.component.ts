import { Component, OnInit } from '@angular/core';
import {AvancementServiceService} from '../../controller/service/avancement-service.service';
import {GradeEmploye} from '../../controller/model/grade-employe.model';
import {Employe} from '../../controller/model/employe.model';
import {Grade} from '../../controller/model/grade.model';
import {GradeService} from '../../controller/service/grade.service';
import {RapportDeEvaluation} from '../../controller/model/rapport-de-evaluation.model';
import {Formation} from '../../controller/model/formation.model';
import {NoteGeneraleDeAnnee} from '../../controller/model/note-generale-de-annee.model';
import {PrixEmploye} from '../../controller/model/prix-employe.model';
import {Prix} from '../../controller/model/prix.model';
import {PunitionEmploye} from '../../controller/model/punition-employe.model';
import {Punition} from '../../controller/model/punition.model';

@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.css']
})
export class AvancementComponent implements OnInit {

  constructor(private avancementService: AvancementServiceService,
              private gradeService: GradeService) { }
  panelOpenState = false;
  cols: any[];
  ngOnInit(): void {
    this.cols = [
      // { field: 'id', header: 'id' },
      { field: 'doti', header: 'Employe' },
      { field: 'grade.libelle', header: 'libelle du grade' },
      { field: 'dateDeAffectation', header: 'Date Affectation '},
    ];
    this.gradeService.findAllGradeNonTraite();
  }
  get gradeNonTraite(): Array<GradeEmploye> {
    return this.gradeService.gradeNonTraite;
  }
  public listeVide():boolean{
    return this.gradeNonTraite.length <1 ? true:false;
  }
  public trouverRapportParEmployeDoti(gradeEmloye: GradeEmploye){
    this.avancementService.findRapportByGradeIdAndEmployeDoti(gradeEmloye.id, gradeEmloye.doti);
  }
  get rapportEvaluation(): RapportDeEvaluation {
    return this.avancementService.rapportEvaluation;
  }
}
