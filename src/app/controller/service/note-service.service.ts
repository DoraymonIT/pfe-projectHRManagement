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
  private _noteDoti: Note;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/';
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
public setNote(notee: NoteGeneraleDeAnnee){
    this._note = notee;
}
public imprimerUnRappotDeNoteDeEmploye(note: NoteGeneraleDeAnnee) {
  this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/RapportDesNoteePdf', this.note).subscribe(
    data => {
      if (data === 1){
      this.toast.success(`$rapport est bien preparer`, 'rapport preparer', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      }
    }, eror => {
      console.log('eroro', eror);
    });
}
  public findAll() {
    this.http.get<Array<NoteGeneraleDeAnnee>>(this._url + 'findAll').subscribe(
      data => {
        this.notes = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllNoteNonTraite() {
    this.http.get<Array<NoteGeneraleDeAnnee>>(this._url + 'findNoteNonTraite').subscribe(
      data => {
        this.notes = data ;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public infoUnNote(value: NoteGeneraleDeAnnee) {
    this.note = value;
  }
  public trouverNoteParSonDoti(value: number) {
    this.http.get<Array<NoteGeneraleDeAnnee>>('http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        this.notes = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverNoteParSonDotiEtParDate() {
    this.http.get<NoteGeneraleDeAnnee>('http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/findByDateAndEmployeDoti/date/' + this.note.date + '/doti/' + this.noteDoti.mention).subscribe(
      data => {
        this.note = data ;
       }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.note).subscribe(
      data => {
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
      });
  }
  public  cloneNote(noteGeneraleDeAnnee: NoteGeneraleDeAnnee): NoteGeneraleDeAnnee {
    const myClone = new NoteGeneraleDeAnnee() ;
    myClone.employeDoti = noteGeneraleDeAnnee.employeDoti;
    myClone.fuulName = noteGeneraleDeAnnee.fuulName;
    myClone.noteDeAffectationDesTachesLieeAuTravail = noteGeneraleDeAnnee.noteDeAffectationDesTachesLieeAuTravail;
    myClone.noteDeCapaciteDeOrganisation = noteGeneraleDeAnnee.noteDeCapaciteDeOrganisation;
    myClone.noteDeCompotement = noteGeneraleDeAnnee.noteDeCompotement;
    myClone.noteDeRechercheEtDeInnovation = noteGeneraleDeAnnee.noteDeRechercheEtDeInnovation;
    myClone.noteDeRentabilite = noteGeneraleDeAnnee.noteDeRentabilite;
    return myClone;
  }

  get note(): NoteGeneraleDeAnnee {
    if(this._note == null){
      this._note = new NoteGeneraleDeAnnee();
      this._note.noteDeRechercheEtDeInnovation = new Note();
      this._note.noteDeCompotement = new Note();
      this._note.noteDeCapaciteDeOrganisation = new Note();
      this._note.noteDeRentabilite = new Note();
      this._note.noteDeAffectationDesTachesLieeAuTravail = new Note();
    }
    return this._note;
  }

  set note(value: NoteGeneraleDeAnnee) {
    this._note = value;
  }
public affecteruneNote(note:NoteGeneraleDeAnnee){
    this._note = note;
}
  get notes(): Array<NoteGeneraleDeAnnee> {
    if(this._notes == null){
      this._notes = new Array<NoteGeneraleDeAnnee>();
      this._notes.forEach(note =>{
        note = new NoteGeneraleDeAnnee();
        note.noteDeRechercheEtDeInnovation = new Note();
        note.noteDeCompotement = new Note();
        note.noteDeCapaciteDeOrganisation = new Note();
        note.noteDeAffectationDesTachesLieeAuTravail = new Note();
        note.noteDeRentabilite = new Note();
      });
    }
    return this._notes;
  }


  get noteDoti(): Note {
    if(this._noteDoti == null){
      this._noteDoti = new Note();
    }
    return this._noteDoti;
  }

  set noteDoti(value: Note) {
    this._noteDoti = value;
  }

  set notes(value: Array<NoteGeneraleDeAnnee>) {
    this._notes = value;
  }
}
