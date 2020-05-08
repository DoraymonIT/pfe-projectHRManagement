import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../controller/model/grade.model';
import {GradeService} from '../../../controller/service/grade.service';
import {Employe} from '../../../controller/model/employe.model';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(private gradeservice: GradeService,
              private employeService: PersonnelEmployesService) { }
cols: any[];
  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'libelle', header: 'nom de grade' },
      { field: 'nombreDePosteNonOccupé', header: 'nombre De Poste Non Occupé' },
    ];
    this.gradeservice.findAll();
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
}
