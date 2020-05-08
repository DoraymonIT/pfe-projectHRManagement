import { Injectable } from '@angular/core';
import {PersonnelEmployesService} from './personnel-employes.service';
import {Employe} from '../model/employe.model';
import {Departement} from '../model/departement.model';
import {GradeEmploye} from '../model/grade-employe.model';
import {Grade} from '../model/grade.model';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {NoteGeneraleDeAnnee} from '../model/note-generale-de-annee.model';
import {Note} from '../model/note.model';
import {SalaireEmploye} from '../model/salaire-employe.model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private _note: NoteGeneraleDeAnnee;
  private _notes: Array<NoteGeneraleDeAnnee>;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/';
  constructor(private http: HttpClient,
              private toast: ToastrService) { }

  public findAll() {
    this.http.get<Array<NoteGeneraleDeAnnee>>(this._url + 'findAll').subscribe(
      data => {
       // console.log('ha data dyal grades' + data);
        this.notes = data ;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public infoUnNote(value: NoteGeneraleDeAnnee) {
    this.note = value;
  }
  public trouverNoteParSonDoti(value: number) {
    this.http.get<Array<NoteGeneraleDeAnnee>>('http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        //console.log('ha data' + data);
        this.notes = data ;
     //   console.log(this.saleireEmolye.assuranceMaladieObligatoire.montant)
       // console.log(this.saleireEmolye.caisseMarocaineDeretrait.montant)
        //console.log(this.saleireEmolye.impotSurLeRevenu.montant)
        //console.log(this.saleireEmolye.mutuelleCaisseRetraitEtDeces.montant)
        //console.log('ha  employe' + this._EditEmploye);
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.note).subscribe(
      data => {
        //    console.log(data);
        this.toast.success(`${'note'} add note to the database.`, 'note Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._notes.push(this.cloneNote(this.note));
        this._note = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public  cloneNote(noteGeneraleDeAnnee: NoteGeneraleDeAnnee): NoteGeneraleDeAnnee {
    const myClone = new NoteGeneraleDeAnnee() ;
    myClone.employe = noteGeneraleDeAnnee.employe;
    myClone.noteDeAffectationDesTachesLiéeAuTravail = noteGeneraleDeAnnee.noteDeAffectationDesTachesLiéeAuTravail;
    myClone.noteDeCapacitéDeOrganisation = noteGeneraleDeAnnee.noteDeCapacitéDeOrganisation;
    myClone.noteDeCompotement = noteGeneraleDeAnnee.noteDeCompotement;
    myClone.noteDeRechercheEtDeInnovation = noteGeneraleDeAnnee.noteDeRechercheEtDeInnovation;
    myClone.noteDeRentabilité = noteGeneraleDeAnnee.noteDeRentabilité;
    return myClone;
  }

  get note(): NoteGeneraleDeAnnee {
    if(this._note == null){
      this._note = new NoteGeneraleDeAnnee();
      this._note.noteDeRechercheEtDeInnovation = new Note();
      this._note.noteDeCompotement = new Note();
      this._note.noteDeCapacitéDeOrganisation = new Note();
      this._note.noteDeAffectationDesTachesLiéeAuTravail = new Note();
      this._note.employe = new Employe();
      this._note.employe.sup = new Employe();
    }
    return this._note;
  }

  set note(value: NoteGeneraleDeAnnee) {
    this._note = value;
  }

  get notes(): Array<NoteGeneraleDeAnnee> {
    if(this._notes == null){
      this._notes = new Array<NoteGeneraleDeAnnee>();
      this._notes.forEach(note =>{
        note = new NoteGeneraleDeAnnee();
        note.noteDeRechercheEtDeInnovation = new Note();
        note.noteDeCompotement = new Note();
        note.noteDeCapacitéDeOrganisation = new Note();
        note.noteDeAffectationDesTachesLiéeAuTravail = new Note();
        note.employe = new Employe();
      });
    }
    return this._notes;
  }

  set notes(value: Array<NoteGeneraleDeAnnee>) {
    this._notes = value;
  }
}
