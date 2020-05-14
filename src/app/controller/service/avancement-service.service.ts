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
private _rapportEvaluation: RapportDeEvaluation;


  constructor(private http: HttpClient,
              private toast: ToastrService) { }

  public findRapportByGradeIdAndEmployeDoti(id: number, doti: number) {
    console.log('ha ana f service' + id);
    console.log('ha ana f service' + doti);
    this.http.get<RapportDeEvaluation>('http://localhost:8080/gestionDesEmployee-Api/RapportDeEvaluation/findByNouveauGradeIdAndEmployeDoti/id/' + id + '/doti/' + doti).subscribe(
      data => {
        console.log( 'ha data li tat9lab 3liiha' + data);
        this.rapportEvaluation = data ;
        this.rapportEvaluation.prix.forEach(prixx => {
          console.log('ha howa' + prixx.prix.libelle);
        })
        console.log('ha howa' + this.rapportEvaluation.employe.doti);
      }, eror => {
        console.log('eroro', eror);
      }
    );
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

}
