import { Component, OnInit } from '@angular/core';
import {DepartemntService} from '../../../../controller/service/departemnt.service';
import {PersonnelEmployesService} from '../../../../controller/service/personnel-employes.service';
import {Departement} from '../../../../controller/model/departement.model';
import {Employe} from '../../../../controller/model/employe.model';
import {GradeService} from '../../../../controller/service/grade.service';
import {Grade} from '../../../../controller/model/grade.model';

@Component({
  selector: 'app-grade-ajout',
  templateUrl: './grade-ajout.component.html',
  styleUrls: ['./grade-ajout.component.css']
})
export class GradeAjoutComponent implements OnInit {

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
  }
  public save(){
    this.gradeService.save();
  }
  get grade(): Grade {
    return this.gradeService.grade;
  }
}
