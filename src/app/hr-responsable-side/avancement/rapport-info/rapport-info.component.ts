import { Component, OnInit } from '@angular/core';
import {RapportDeEvaluation} from '../../../controller/model/rapport-de-evaluation.model';
import {AvancementServiceService} from '../../../controller/service/avancement-service.service';
import {GradeService} from '../../../controller/service/grade.service';

@Component({
  selector: 'app-rapport-info',
  templateUrl: './rapport-info.component.html',
  styleUrls: ['./rapport-info.component.css']
})
export class RapportInfoComponent implements OnInit {

  constructor(private avancementService: AvancementServiceService,
              private gradeService: GradeService) { }
  panelOpenState = false;
  ngOnInit(): void {
  }
  get rapportEvaluation(): RapportDeEvaluation {
    return this.avancementService.rapportEvaluation;
  }
  public imprimerRapport(){
    this.avancementService.imprimerLeRapport();
}
  public editRapport(){
    this.avancementService.editRapport()
  }
}
