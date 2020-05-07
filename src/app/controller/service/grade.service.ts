import { Injectable } from '@angular/core';
import { Grade } from '../model/grade.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private _grade: Grade;
  private _grades: Array<Grade>;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Grade/';
  constructor(private http: HttpClient) { }

public findAll() {
  this.http.get<Array<Grade>>(this._url+'findAll').subscribe(
    data => {
      console.log('ha data dyal grades' + data);
      this._grades = data ;
    }, eror => {
      console.log('eroro',eror);
    }
  );

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
}
