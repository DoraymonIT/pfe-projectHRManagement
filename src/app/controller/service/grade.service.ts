import { Injectable } from '@angular/core';
import { Grade } from '../model/grade.model';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Departement} from '../model/departement.model';
import {GradeEmploye} from '../model/grade-employe.model';
import {Employe} from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {


  get gradesEployess(): Array<GradeEmploye> {
    if(this._gradesEployess == null){
      this._gradesEployess = new Array<GradeEmploye>();
      this._gradesEployess.forEach(gradee =>{
        gradee = new GradeEmploye();
        gradee.grade = new Grade();
      });
    }
    return this._gradesEployess;
  }

  set gradesEployess(value: Array<GradeEmploye>) {
    this._gradesEployess = value;
  }

  private _grade: Grade;
  private _grades: Array<Grade>;
  private _gradeNonTraite: Array<GradeEmploye>;
  private _gradesEployess: Array<GradeEmploye>;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Grade/';
  constructor(private http: HttpClient,
              private toast: ToastrService) { }

public findAll() {
  this.http.get<Array<Grade>>(this._url + 'findAll').subscribe(
    data => {
      console.log('ha data dyal grades' + data);
      this._grades = data ;
    }, eror => {
      console.log('eroro',eror);
    }
  );
}
  public findAllGradeNonTraite() {
    this.http.get<Array<GradeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/findGradeNonTraite').subscribe(
      data => {
        console.log('ha data dyal grades' + data);
        this.gradeNonTraite = data ;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public findAllGradeEmployeByDoti(value: number) {
    this.http.get<Array<GradeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/findByDoti/doti/' + value).subscribe(
      data => {
        console.log('ha data dyal grades' + data);
        this.gradesEployess = data ;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.grade).subscribe(
      data => {
        //    console.log(data);
        this.toast.success(`${this.grade.libelle} add grade to the database.`, 'grade Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.grades.push(this.cloneGrade(this.grade));
        this._grade = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public  cloneGrade(grade: Grade): Grade {
    const myClone = new Grade() ;
    myClone.libelle = this.grade.libelle;
    myClone.nombreDePosteNonOccupe = this.grade.nombreDePosteNonOccupe;
    return myClone;
  }

  get grade(): Grade {
    if (this._grade == null) {
      this._grade = new Grade();
    }
    return this._grade;
  }
  set grade(value: Grade) {
    this._grade = value;
  }
  get grades(): Array<Grade> {
    if (this._grades == null) {
      this._grades = new Array<Grade>();
      this._grades.forEach(grade =>{
        grade = new Grade();
        });
    }
    return this._grades;
  }
  set grades(value: Array<Grade>) {
    this._grades= value;
  }

  get gradeNonTraite(): Array<GradeEmploye> {
 if(this._gradeNonTraite == null){
   this._gradeNonTraite = new Array<GradeEmploye>();
   this._gradeNonTraite.forEach( gradee =>{
     gradee.grade = new Grade();
   });
 }
 return this._gradeNonTraite;
  }

  set gradeNonTraite(value: Array<GradeEmploye>) {
    this._gradeNonTraite = value;
  }

}
