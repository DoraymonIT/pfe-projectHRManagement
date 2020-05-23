import { Injectable } from '@angular/core';
import { Grade } from '../model/grade.model';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {GradeEmploye} from '../model/grade-employe.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  // tslint:disable-next-line:variable-name
  private _gradeEmploye: GradeEmploye;
  // tslint:disable-next-line:variable-name
  private _ajouteGradeEmploye: string;
  constructor(private http: HttpClient,
              private toast: ToastrService) { }

  get gradesEployess(): Array<GradeEmploye> {
    if (this._gradesEployess == null) {
      this._gradesEployess = new Array<GradeEmploye>();
      this._gradesEployess.forEach(gradee => {
        gradee = new GradeEmploye();
        gradee.grade = new Grade();
      });
    }
    return this._gradesEployess;
  }
public imprimerLesGradesDeEmploye(value: Array<GradeEmploye>) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/listeDeGradeDeEmployePdf',value).subscribe(
      data => {
        this.toast.success(` document est bien preparer`, ' document preparer', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }
  set gradesEployess(value: Array<GradeEmploye>) {
    this._gradesEployess = value;
  }

  // tslint:disable-next-line:variable-name
  private _grade: Grade;
  // tslint:disable-next-line:variable-name
  private _grades: Array<Grade>;
  // tslint:disable-next-line:variable-name
  private _gradeNonTraite: Array<GradeEmploye>;
  // tslint:disable-next-line:variable-name
  private _gradesEployess: Array<GradeEmploye>;
  // private _url = 'http://localhost:3000/characters';
  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Grade/';


public findAll() {
  this.http.get<Array<Grade>>(this._url + 'findAll').subscribe(
    data => {
      this._grades = data ;
    }, eror => {
      console.log('eroro', eror);
    }
  );
}
  public findAllGradeNonTraite() {
    this.http.get<Array<GradeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/findGradeNonTraite').subscribe(
      data => {
        this.gradeNonTraite = data ;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public findAllGradeEmployeByDoti(value: number) {
    this.http.get<Array<GradeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/findByDoti/doti/' + value).subscribe(
      data => {
        this.gradesEployess = data ;
      }, eror => {
        console.log('eroro', eror);
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
        console.log('eroro', eror);
      }
    );
  }
  public saveGradeEmploye() {
    // tslint:disable-next-line:max-line-length
  if ((this.gradeEmploye.grade == null || this.gradeEmploye.dateDeAffectation == null || this.gradeEmploye.doti == null) || (this.gradeEmploye.grade == null && this.gradeEmploye.dateDeAffectation == null && this.gradeEmploye.doti == null)) {
    this.toast.error(`$ remplir les champs`, 'champ vide', {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
    this._ajouteGradeEmploye = 'remplir toutes les champs';
    document.getElementById('span').style.color = 'red';
  }
  this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/save', this.gradeEmploye).subscribe(
      data => {
        if ( data === 1) {
        this.toast.success(`$ add grade employe to the database.`, 'grade Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteGradeEmploye = 'grade employe est bien ajouté';
        document.getElementById('span').style.color = 'green';
        }
        }, eror => {
        console.log('eroro', eror);
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
      this._grades.forEach(grade => {
        grade = new Grade();
        });
    }
    return this._grades;
  }
  set grades(value: Array<Grade>) {
    this._grades = value;
  }

  get gradeNonTraite(): Array<GradeEmploye> {
 if (this._gradeNonTraite == null) {
   this._gradeNonTraite = new Array<GradeEmploye>();
   this._gradeNonTraite.forEach( gradee => {
     gradee.grade = new Grade();
   });
 }
 return this._gradeNonTraite;
  }

  set gradeNonTraite(value: Array<GradeEmploye>) {
    this._gradeNonTraite = value;
  }

  get gradeEmploye(): GradeEmploye {
  if (this._gradeEmploye == null) {
    this._gradeEmploye = new GradeEmploye();
    this._gradeEmploye.grade = new Grade();
  }
  return this._gradeEmploye;
  }

  set gradeEmploye(value: GradeEmploye) {
    this._gradeEmploye = value;
  }
public ajouteGradeemployeTitre() {
  this._ajouteGradeEmploye = 'Formulaire pour avacement une note a un employe';
}
  get ajouteGradeEmploye(): string {
    return this._ajouteGradeEmploye;
  }

  set ajouteGradeEmploye(value: string) {
    this._ajouteGradeEmploye = value;
  }
}
