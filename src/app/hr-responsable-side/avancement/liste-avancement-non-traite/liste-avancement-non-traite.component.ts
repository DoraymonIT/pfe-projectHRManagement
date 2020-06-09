import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {AjouterEmployeComponent} from '../../gestion-personnel/ajouter-employe/ajouter-employe.component';
import {Employe} from '../../../controller/model/employe.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {RapportDeEvaluation} from '../../../controller/model/rapport-de-evaluation.model';
import {GradeService} from '../../../controller/service/grade.service';
import {AvancementServiceService} from '../../../controller/service/avancement-service.service';
import {RapportInfoComponent} from '../rapport-info/rapport-info.component';

@Component({
  selector: 'app-liste-avancement-non-traite',
  templateUrl: './liste-avancement-non-traite.component.html',
  styleUrls: ['./liste-avancement-non-traite.component.css']
})
export class ListeAvancementNonTraiteComponent implements OnInit {
chercher: boolean;
  constructor(private employeService: PersonnelEmployesService,
              private gradesEmploye: GradeService,
              private avancementService: AvancementServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeService.findAll();
    this.listeVide();
    this.chercher = true;
  }
  public imprimerLesGradesDeEmploye(value: Array<GradeEmploye>) {
    this.gradesEmploye.imprimerLesGradesDeEmploye(value);
  }
  public findAllGradeEmployeByDoti(doti: string) {
    document.getElementById('fourmule').style.display = 'inline-flex';
   // document.getElementById('checherGrade').style.display = 'none';
    this.gradesEmploye.findAllGradeEmployeByDoti(doti);
  }
  get gradesEployess(): Array<GradeEmploye> {
    return this.gradesEmploye.gradesEployess;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public listeVide(): boolean {
    return this.employes.length < 1 ? true : false;
  }
  public afficher() {
    // tslint:disable-next-line:triple-equals
    if (this.chercher == true) {
      document.getElementById('checherGrade').style.display = 'none';
      this.chercher = false;
    } else {
      document.getElementById('checherGrade').style.display = 'inline';
    }
  }
  get employeInfo(): Employe {
    return this.employeService.employeInfo;
  }
  public trouverRapportParEmployeDoti(gradeEmloye: GradeEmploye) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '80%';
    this.dialog.open(RapportInfoComponent,
      dialogConfig);
    this.avancementService.findRapportByGradeIdAndEmployeDoti(gradeEmloye.id, gradeEmloye.doti);
  }
}
