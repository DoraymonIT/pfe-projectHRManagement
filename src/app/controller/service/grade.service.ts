import { Injectable } from '@angular/core';
import { Grade } from '../model/grade.model';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {GradeEmploye} from '../model/grade-employe.model';
import {Employe} from '../model/employe.model';
import {Departement} from '../model/departement.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  // tslint:disable-next-line:variable-name
  private _gradeEmploye: GradeEmploye;
  // tslint:disable-next-line:variable-name
  private _employeEvaluation: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _employeAvancement: Array<Employe>;
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
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/listeDeGradeDeEmployePdf', value).subscribe(
      data => {
        this.toast.success(`Document a été traiter avec succés`, ' Voir votre fichier de téléchargement', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesGradesEmployesExcel(value: Array<GradeEmploye>) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/listeDesGradesEmployesExcel', value).subscribe(
      data => {
        this.toast.success(`Document a été traiter avec succés`, ' Voir votre fichier de téléchargement', {
          timeOut: 2500,
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
public EditerGrade(grade: GradeEmploye){
    this.gradeEmploye = grade;
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
      this.grades = data;
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
      });
  }
  public getDateEvaluation() {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/getDateEvaluation').subscribe(
      data => {
        if(data != null){
          this.employeEvaluation = data;
          //  this.toast.success(`get date avancement prevue  of some employes`, 'date evaluation', {
          //    timeOut: 2500,
           //   progressBar: true,
           //   progressAnimation: 'increasing',
           //   positionClass: 'toast-top-right'
          //  });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public getDateAvancement() {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/getDateAvancement').subscribe(
      data => {
        if(data != null){
          this.employeAvancement = data;
          //  this.toast.success(`creer un grade employe pour some employe`, 'date avancement', {
          //    timeOut: 2500,
          //    progressBar: true,
            //  progressAnimation: 'increasing',
          //    positionClass: 'toast-top-right'
         //   });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllGradeEmployeByDoti(value: string) {
    this.http.get<Array<GradeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/findByDoti/doti/' + value).subscribe(
      data => {
        this.gradesEployess = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverGradeByType(value: string) {
    this.http.get<Array<GradeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/getGradeNonTraiteByType/type/' + value).subscribe(
      data => {
        this.gradeNonTraite = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.grade).subscribe(
      data => {
        //    console.log(data);
        this.toast.success(`${this.grade.libelle} add grade to the database.`, 'grade Added', {
          timeOut: 2500,
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
    this.toast.error(`$ Remplir les champs`, 'champ vide', {
      timeOut: 2500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
    this._ajouteGradeEmploye = 'Remplir toutes les champs';
    document.getElementById('span').style.color = 'red';
  }
  this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/save', this.gradeEmploye).subscribe(
      data => {
        if ( data === 1) {
        this.toast.success(`Un grade Employe a ete effectue avec succes`, 'grade Effectue', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteGradeEmploye = 'Grade employe est bien ajouté avec succees';
        document.getElementById('span').style.color = 'green';
        }
        }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public updateGradeEmploye() {
    // tslint:disable-next-line:max-line-length
    if ((this.gradeEmploye.grade == null || this.gradeEmploye.dateDeAffectation == null || this.gradeEmploye.doti == null) || (this.gradeEmploye.grade == null && this.gradeEmploye.dateDeAffectation == null && this.gradeEmploye.doti == null)) {
      this.toast.error(`$ Remplir les champs`, 'champ vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteGradeEmploye = 'Remplir toutes les champs';
      document.getElementById('span').style.color = 'red';
    }
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/update', this.gradeEmploye).subscribe(
      data => {
        if ( data === 1) {
          this.toast.success(`Un grade Employe a ete effectue avec succes`, 'grade Effectue', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteGradeEmploye = 'Grade employe est bien modifie avec succees';
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
  this._ajouteGradeEmploye = 'Formulaire pour affecter un grade a un employé ';
}
  get ajouteGradeEmploye(): string {
    return this._ajouteGradeEmploye;
  }

  set ajouteGradeEmploye(value: string) {
    this._ajouteGradeEmploye = value;
  }
  get employeEvaluation(): Array<Employe> {
    if (this._employeEvaluation == null) {
      this._employeEvaluation = new Array<Employe>();
      this._employeEvaluation.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierGrade = new GradeEmploye();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employeEvaluation;
  }

  set employeEvaluation(value: Array<Employe>) {
    this._employeEvaluation = value;
  }

  get employeAvancement(): Array<Employe> {
    if (this._employeAvancement == null) {
      this._employeAvancement = new Array<Employe>();
      this._employeAvancement.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierGrade = new GradeEmploye();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employeAvancement;
  }

  set employeAvancement(value: Array<Employe>) {
    this._employeAvancement = value;
  }
}
