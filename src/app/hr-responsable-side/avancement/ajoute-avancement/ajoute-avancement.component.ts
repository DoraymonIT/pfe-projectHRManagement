import { Component, OnInit } from '@angular/core';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {GradeService} from '../../../controller/service/grade.service';
import {Employe} from '../../../controller/model/employe.model';
import {Departement} from '../../../controller/model/departement.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';

@Component({
  selector: 'app-ajoute-avancement',
  templateUrl: './ajoute-avancement.component.html',
  styleUrls: ['./ajoute-avancement.component.css']
})
export class AjouteAvancementComponent implements OnInit {

  constructor(private gradeService: GradeService,
              private employeService: PersonnelEmployesService) { }

  ngOnInit(): void {
    this.employeService.findAll();
    this.gradeService.findAll();
    this.gradeService.ajouteGradeemployeTitre();
  }
  get gradeEmploye(): GradeEmploye {
    return this.gradeService.gradeEmploye;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get grades(): Array<Grade> {
    return this.gradeService.grades;
  }
  public save() {
    if(this.gradeEmploye.id === null){
      this.gradeService.saveGradeEmploye();
  } else{
      this.gradeService.updateGradeEmploye();
    }
  }
  get ajouteGradeEmploye(): string {
    return this.gradeService.ajouteGradeEmploye;
  }
  get fullnameGrade(): string {
    return this.employeService.fullnameGrade;
  }
public getEmployeGradedoti(doti: string){
    this.employeService.trouverEmployerGradeParDoti(doti);
  }
}
