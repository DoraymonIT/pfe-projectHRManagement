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
import {AjouteAvancementComponent} from './ajoute-avancement/ajoute-avancement.component';

@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.css']
})
export class AvancementComponent implements OnInit {
cherche1: boolean;
cherche2: boolean;
cherche3: boolean;
  constructor(private avancementService: AvancementServiceService,
              private gradeService: GradeService,
              private employeService: PersonnelEmployesService,
              private dialog: MatDialog) { }
  panelOpenState = false;
  cols: any[];
  get gradeEmploye(): GradeEmploye {
    return this.gradeService.gradeEmploye;
  }
public  TrouverGradeNonTraiteByType(value: string){
    if(value === "all"){
      this.gradeService.findAllGradeNonTraite();
    }else {
      this.gradeService.trouverGradeByType(value);
    }
}
  ngOnInit(): void {
    this.cherche1 = false;
    this.cherche2 = false;
    this.cherche3 = false;
    this.employeService.findAllemployeAyantDateAvancementProche();
    this.gradeService.findAllGradeNonTraite();
  }
  public getemployeByDate() {
    document.getElementById('tableEvaluation').style.display = 'inline';
    this.employeService.trouveremployeByDateEvaluation(this.employeDateEvaluation.dateProchainEvaluation);
  }
  public getemployeByDateAvancement() {
    document.getElementById('tableavancement').style.display = 'inline';
    this.employeService.trouveremployeByDateAvancement(this.employeDateEvaluation.dateAvancementPrevue);
  }
  public creeUnGradeEmployeNonTraite(value: Employe){
    this.avancementService.creeUnGradeNonTraite(value.doti);
  }
  public listeDesDemandeNonTraite(){
    // tslint:disable-next-line:triple-equals
    if (this.cherche3 == false) {
      document.getElementById('gradeNonTraite').style.display = 'inline';
      document.getElementById('liste').style.display = 'none';
      this.gradeService.findAllGradeNonTraite();
      this.cherche3 = true;
    } else {
      document.getElementById('gradeNonTraite').style.display = 'none';
      document.getElementById('liste').style.display = 'inline';
      this.cherche3 = false;
    }
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
    dialogConfig.height = '100%';
    this.dialog.open(RapportInfoComponent,
      dialogConfig);
    this.avancementService.findRapportByGradeIdAndEmployeDoti(gradeEmloye.id, gradeEmloye.doti);
  }
  public modifierGrade(gradeEmloye: GradeEmploye){
    const dialogConfig = new MatDialogConfig();
    this.gradeService.EditerGrade(gradeEmloye);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouteAvancementComponent,
      dialogConfig);
  }
 public afficher1(){
   // tslint:disable-next-line:triple-equals
    if (this.cherche1 == true){
document.getElementById('chercher1').style.display = 'none';
this.cherche1 = false;
 } else {
  document.getElementById('chercher1').style.display = 'block';
  this.cherche1 = true;
  }
 }
  public afficher2(){
    // tslint:disable-next-line:triple-equals
    if (this.cherche2 == true){
      document.getElementById('chercher2').style.display = 'none';
      this.cherche2 = false;
    } else {
      document.getElementById('chercher2').style.display = 'block';
      this.cherche2 = true;
    }
  }
}
