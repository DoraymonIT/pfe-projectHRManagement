import { Component, OnInit } from '@angular/core';
import {Employe} from '../../controller/model/employe.model';
import {GradeService} from '../../controller/service/grade.service';

@Component({
  selector: 'app-liste-evaluation',
  templateUrl: './liste-evaluation.component.html',
  styleUrls: ['./liste-evaluation.component.css']
})
export class ListeEvaluationComponent implements OnInit {

  constructor(
    private avancementService: GradeService
  ) { }
  ngOnInit(): void {
  }
  public listeVide(): boolean {
    return this.employeEvaluation.length < 1 ? true : false;
  }
  get employeEvaluation(): Array<Employe> {
    return this.avancementService.employeEvaluation;
  }
}
