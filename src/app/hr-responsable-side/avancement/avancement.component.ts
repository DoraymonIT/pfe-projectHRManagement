import { Component, OnInit } from '@angular/core';
import {AvancementServiceService} from '../../controller/service/avancement-service.service';
import {GradeEmploye} from '../../controller/model/grade-employe.model';
import {GradeService} from '../../controller/service/grade.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {RapportInfoComponent} from './rapport-info/rapport-info.component';
import {Employe} from '../../controller/model/employe.model';
import {Departement} from '../../controller/model/departement.model';
import {Grade} from '../../controller/model/grade.model';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {NoteGeneraleDeAnnee} from '../../controller/model/note-generale-de-annee.model';
import {Fonction} from '../../controller/model/fonction.model';

@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.css']
})
export class AvancementComponent implements OnInit {

  constructor(private avancementService: AvancementServiceService,
              private gradeService: GradeService,
              private employeService: PersonnelEmployesService,
              private dialog: MatDialog) { }
  panelOpenState = false;
  cols: any[];
  ngOnInit(): void {
  }
  public getemployeByDate() {
    document.getElementById('tableEvaluation').style.display = 'inline';
    this.employeService.trouveremployeByDateEvaluation(this.employeDateEvaluation.dateProchainEvaluation);
  }
  public getemployeByDateAvancement() {
    document.getElementById('tableavancement').style.display = 'inline';
    this.employeService.trouveremployeByDateAvancement(this.employeDateEvaluation.dateAvancementPrevue);
  }
  public listeDesDemandeNonTraite(){
    document.getElementById('gradeNonTraite').style.display = 'inline';
    this.gradeService.findAllGradeNonTraite();
  }
  get employesByEvaluationToday(): Array<Employe> {
    return this.employeService.employesByEvaluationToday;
  }
  get gradeNonTraite(): Array<GradeEmploye> {
    return this.gradeService.gradeNonTraite;
  }
  public listeVide1():boolean{
    return this.employesByEvaluationToday.length < 1 ? true:false;
  }
  public listeVide():boolean{
    return this.gradeNonTraite.length < 1 ? true:false;
  }
  public accepterUnRapport(gradeEmploye: GradeEmploye){
    this.avancementService.accepterRapportAvancement(gradeEmploye);
  }
  get employeDateEvaluation(): Employe {
    return this.employeService.employeDateEvaluation;
  }
  public trouverRapportParEmployeDoti(gradeEmloye: GradeEmploye){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '80%';
    this.dialog.open(RapportInfoComponent,
      dialogConfig);
    this.avancementService.findRapportByGradeIdAndEmployeDoti(gradeEmloye.id, gradeEmloye.doti);
  }
 public afficher1(){

 }
}
