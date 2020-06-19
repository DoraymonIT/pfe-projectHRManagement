import { Component, OnInit } from '@angular/core';
import {RapportDeEvaluation} from '../../../controller/model/rapport-de-evaluation.model';
import {AvancementServiceService} from '../../../controller/service/avancement-service.service';
import {GradeService} from '../../../controller/service/grade.service';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AjouterPrixComponent} from '../../certificats-medicales/prix/ajouter-prix/ajouter-prix.component';
import {TestTestComponent} from '../test-test/test-test.component';

@Component({
  selector: 'app-rapport-info',
  templateUrl: './rapport-info.component.html',
  styleUrls: ['./rapport-info.component.css']
})
export class RapportInfoComponent implements OnInit {

  constructor(private avancementService: AvancementServiceService,
              private gradeService: GradeService,
              private dialog: MatDialog) { }
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
  public editerUnRapport(){
    const dialogConfig = new MatDialogConfig();
    this.editRapport();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '90%';
    this.dialog.open(TestTestComponent,
      dialogConfig);
  }
}
