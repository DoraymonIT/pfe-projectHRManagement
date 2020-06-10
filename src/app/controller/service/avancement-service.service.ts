import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {GradeEmploye} from '../model/grade-employe.model';
import {RapportDeEvaluation} from '../model/rapport-de-evaluation.model';
import {Employe} from '../model/employe.model';
import {Formation} from '../model/formation.model';
import {NoteGeneraleDeAnnee} from '../model/note-generale-de-annee.model';
import {PrixEmploye} from '../model/prix-employe.model';
import {Prix} from '../model/prix.model';
import {PunitionEmploye} from '../model/punition-employe.model';
import {Punition} from '../model/punition.model';
import {Grade} from '../model/grade.model';

@Injectable({
  providedIn: 'root'

})
export class AvancementServiceService {
// tslint:disable-next-line:variable-name
private _rapportEvaluation: RapportDeEvaluation;
private _rapportEvaluationEdit: RapportDeEvaluation;

  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  public findRapportByGradeIdAndEmployeDoti(id: number, doti: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<RapportDeEvaluation>('http://localhost:8080/gestionDesEmployee-Api/RapportDeEvaluation/findByNouveauGradeIdAndEmployeDoti/id/' + id + '/doti/' + doti).subscribe(
      data => {
        this.rapportEvaluation = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public creeUnGradeNonTraite(value: string){
    console.log('ha doti' + value);
    this.http.get <number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/creeUnGradeNonTraite/doti/' + value).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(`le grade employe est bien crée`, 'grade crée avec succes', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public imprimerLeRapport() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/rapportPdf', this.rapportEvaluation).subscribe(
      data => {
        if (data > 0) {
          this.toast.success(` le rapport à été est bien imprimer`, 'Voir votre dossier de téléchargement', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public accepterRapportAvancement(gradeeemploye: GradeEmploye) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/GradeEmploye/accepterUnGrade', gradeeemploye).subscribe(
      data => {
        if (data == 1) {
          this.toast.success(` Avancement est bien effectué`, 'Avancement effectuer  avec success', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
public editRapport(){
    this.rapportEvaluationEdit = this.rapportEvaluation;
}
  get rapportEvaluationEdit(): RapportDeEvaluation {
    if(this._rapportEvaluationEdit == null){
      this._rapportEvaluationEdit = new RapportDeEvaluation();
      this._rapportEvaluationEdit.employe = new Employe();
      this._rapportEvaluationEdit.formation = new Array<Formation>();
      this._rapportEvaluationEdit.formation.forEach(foramation =>{
        foramation = new Formation();
      });
      this._rapportEvaluationEdit.noteGenerale = new Array<NoteGeneraleDeAnnee>();
      this._rapportEvaluationEdit.noteGenerale.forEach(notee => {
        notee = new NoteGeneraleDeAnnee();
      });
      this._rapportEvaluationEdit.prix = new Array<PrixEmploye>();
      this._rapportEvaluationEdit.prix.forEach(prrix =>{
        prrix = new PrixEmploye();
        prrix.prix = new Prix();
      });
      this._rapportEvaluationEdit.punition = new Array<PunitionEmploye>();
      this._rapportEvaluationEdit.punition.forEach(punition => {
        punition = new PunitionEmploye();
        punition.punition = new Punition();
      });
      this._rapportEvaluationEdit.nouveauGrade = new GradeEmploye();
      this._rapportEvaluationEdit.nouveauGrade.grade = new Grade();
    }

    return this._rapportEvaluationEdit;
  }

  set rapportEvaluationEdit(value: RapportDeEvaluation) {
    this._rapportEvaluationEdit = value;
  }

  get rapportEvaluation(): RapportDeEvaluation {
    if(this._rapportEvaluation == null){
      this._rapportEvaluation = new RapportDeEvaluation();
      this._rapportEvaluation.employe = new Employe();
      this._rapportEvaluation.formation = new Array<Formation>();
      this._rapportEvaluation.formation.forEach(foramation =>{
        foramation = new Formation();
      });
      this._rapportEvaluation.noteGenerale = new Array<NoteGeneraleDeAnnee>();
      this._rapportEvaluation.noteGenerale.forEach(notee => {
        notee = new NoteGeneraleDeAnnee();
      });
      this._rapportEvaluation.prix = new Array<PrixEmploye>();
      this._rapportEvaluation.prix.forEach(prrix =>{
        prrix = new PrixEmploye();
        prrix.prix = new Prix();
      });
      this._rapportEvaluation.punition = new Array<PunitionEmploye>();
      this._rapportEvaluation.punition.forEach(punition => {
        punition = new PunitionEmploye();
        punition.punition = new Punition();
      });
      this._rapportEvaluation.nouveauGrade = new GradeEmploye();
      this._rapportEvaluation.nouveauGrade.grade = new Grade();
    }
    return this._rapportEvaluation;
  }

  set rapportEvaluation(value: RapportDeEvaluation) {
    this._rapportEvaluation = value;
  }
  public save() {
    // tslint:disable-next-line:max-line-length
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/RapportDeEvaluation/save', this.rapportEvaluation).subscribe(
        data => {
          // console.log(data);
          if (data === 1)
          this.toast.success(`un rapport de ${this.rapportEvaluation.employe.doti} a ete ajouté  au BD.`, 'Rapport Ajouté', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          document.getElementById('span').style.color = 'green';
        }, eror => {
          console.log('eroro', eror);
        });
    }
  public update() {
    // tslint:disable-next-line:max-line-length
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/RapportDeEvaluation/update', this.rapportEvaluation).subscribe(
      data => {
        // console.log(data);
        if (data === 1)
          this.toast.info(` le rapport de ${this.rapportEvaluation.employe.firstName+' ' + this.rapportEvaluation.employe.lastName} a modifié .`, 'Rapport Modifié', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        document.getElementById('span').style.color = 'green';
      }, eror => {
        console.log('eroro', eror);
      });
  }

}
