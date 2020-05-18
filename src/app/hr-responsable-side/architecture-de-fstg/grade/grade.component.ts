import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../controller/model/grade.model';
import {GradeService} from '../../../controller/service/grade.service';
import {Employe} from '../../../controller/model/employe.model';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListeDesJoursFriesComponent } from '../../absence-et-conge/liste-des-jours-fries/liste-des-jours-fries.component';
import { GradeListeComponent } from './grade-liste/grade-liste.component';


@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(private gradeservice: GradeService,
              private employeService: PersonnelEmployesService,private dialog :MatDialog) { }
cols: any[];
  public tabindex;
  public demo1TabIndex = 0;

  ngOnInit(): void {
    this.cols = [

      { field: 'libelle', header: 'Grade' },
      { field: 'nombreDePosteNonOccupe', header: 'Nombre De Poste Non Occupé' },
    ];
    this.gradeservice.findAll();
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  get grades(): Array<Grade> {
    return this.gradeservice.grades;
  }
  public listeVide():boolean{
    //  console.log(this.de.length);
    return this.grades.length <1 ? true:false;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public trouverEmployerParNomGrade(grade: Grade){
    this.employeService.trouverEmployerParNomGrade(grade.libelle);
  }
  trouverEmployesParGradeDialog(grade: Grade) {
    this.employeService.trouverEmployerParNomGrade(grade.libelle);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "80%";
    this.dialog.open(GradeListeComponent,
      dialogConfig);
  }
}
