import { Component, OnInit } from '@angular/core';
import {AvancementServiceService} from '../../controller/service/avancement-service.service';
import {GradeEmploye} from '../../controller/model/grade-employe.model';
import {GradeService} from '../../controller/service/grade.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RapportInfoComponent} from './rapport-info/rapport-info.component';

@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.css']
})
export class AvancementComponent implements OnInit {

  constructor(private avancementService: AvancementServiceService,
              private gradeService: GradeService,
              private dialog: MatDialog) { }
  panelOpenState = false;
  cols: any[];
  ngOnInit(): void {
    this.gradeService.findAllGradeNonTraite();
  }
  get gradeNonTraite(): Array<GradeEmploye> {
    return this.gradeService.gradeNonTraite;
  }
  public listeVide():boolean{
    return this.gradeNonTraite.length <1 ? true:false;
  }
  public accepterUnRapport(gradeEmploye: GradeEmploye){
    this.avancementService.accepterRapportAvancement(gradeEmploye);
  }
  public trouverRapportParEmployeDoti(gradeEmloye: GradeEmploye){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "80%";
    this.dialog.open(RapportInfoComponent,
      dialogConfig);
    this.avancementService.findRapportByGradeIdAndEmployeDoti(gradeEmloye.id, gradeEmloye.doti);
  }
}
