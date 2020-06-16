import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';

@Component({
  selector: 'app-grade-liste',
  templateUrl: './grade-liste.component.html',
  styleUrls: ['./grade-liste.component.css']
})
export class GradeListeComponent implements OnInit {

  full:string;
  constructor(private es:PersonnelEmployesService) { }

  ngOnInit(): void {
  }

  public listeVide2(): boolean {
    //    console.log(this.employes.length);
    return this.employesByGrade.length < 1 ? true : false;
  }

get employesByGrade(): Array<Employe> {
  return this.es.employesByGrade;
}
public imprimerLesEmployesGrade(){
    this.es.listeDesEmployeDeGradePdf(this.employesByGrade);
}
public imprimerLesEmployesGradeENEXCEL(){
    this.es.listeDesEmployeParGradeExcel(this.employesByGrade);
}
}
