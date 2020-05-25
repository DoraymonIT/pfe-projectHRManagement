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
  private _noteSave: NoteGeneraleDeAnnee;
  private _notesNonTraite: Array<NoteGeneraleDeAnnee>;
  private _notesAll: Array<NoteGeneraleDeAnnee>;
  private _notesParDoti: Array<NoteGeneraleDeAnnee>;
  private _noteDoti: Note;
  private _employe: Employe;
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
public noteNull(){
    this.note = null;
}
  public findAll() {
    this.http.get<Array<NoteGeneraleDeAnnee>>(this._url + 'findAll').subscribe(
      data => {
        this.notesAll = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllNoteNonTraite() {
    this.http.get<Array<NoteGeneraleDeAnnee>>(this._url + 'findNoteNonTraite').subscribe(
      data => {
        this.notesNonTraite = data ;
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
        this.notesParDoti = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public trouverNoteParSonDotiEtParDate() {
    this.http.get<NoteGeneraleDeAnnee>('http://localhost:8080/gestionDesEmployee-Api/NoteGeneralDeAnnee/findByDateAndEmployeDoti/date/' + this.note.date + '/doti/' + this.note.employeDoti).subscribe(
      data => {
        console.log(data);
        this.note = data ;
       }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.noteSave).subscribe(
      data => {
        if(data === 1) {
        this.toast.success(`${'note'} add note to the database.`, 'note Added', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.notesAll.push(this.cloneNote(this.noteSave));
        this._noteSave = null;
      }
      } , eror => {
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


  get noteSave(): NoteGeneraleDeAnnee {
    if(this._noteSave == null){
      this._noteSave = new NoteGeneraleDeAnnee();
      this._noteSave.noteDeRechercheEtDeInnovation = new Note();
      this._noteSave.noteDeCompotement = new Note();
      this._noteSave.noteDeCapaciteDeOrganisation = new Note();
      this._noteSave.noteDeRentabilite = new Note();
      this._noteSave.noteDeAffectationDesTachesLieeAuTravail = new Note();
    }
    return this._noteSave;
  }
  set noteSave(value: NoteGeneraleDeAnnee) {
    this._noteSave = value;
  }


public affecteruneNote(note:NoteGeneraleDeAnnee){
    this._note = note;
}
  get notesAll(): Array<NoteGeneraleDeAnnee> {
    if(this._notesAll == null){
      this._notesAll = new Array<NoteGeneraleDeAnnee>();
      this._notesAll.forEach(note =>{
        note = new NoteGeneraleDeAnnee();
        note.noteDeRechercheEtDeInnovation = new Note();
        note.noteDeCompotement = new Note();
        note.noteDeCapaciteDeOrganisation = new Note();
        note.noteDeAffectationDesTachesLieeAuTravail = new Note();
        note.noteDeRentabilite = new Note();
      });
    }
    return this._notesAll;
  }

  set notesAll(value: Array<NoteGeneraleDeAnnee>) {
    this._notesAll = value;
  }
  get notesNonTraite(): Array<NoteGeneraleDeAnnee> {
    if(this._notesNonTraite == null){
      this._notesNonTraite = new Array<NoteGeneraleDeAnnee>();
      this._notesNonTraite.forEach(note =>{
        note = new NoteGeneraleDeAnnee();
        note.noteDeRechercheEtDeInnovation = new Note();
        note.noteDeCompotement = new Note();
        note.noteDeCapaciteDeOrganisation = new Note();
        note.noteDeAffectationDesTachesLieeAuTravail = new Note();
        note.noteDeRentabilite = new Note();
      });
    }
    return this._notesNonTraite;
  }

  set notesNonTraite(value: Array<NoteGeneraleDeAnnee>) {
    this._notesNonTraite = value;
  }
  get notesParDoti(): Array<NoteGeneraleDeAnnee> {
    if(this._notesParDoti == null){
      this._notesParDoti = new Array<NoteGeneraleDeAnnee>();
      this._notesParDoti.forEach(note =>{
        note = new NoteGeneraleDeAnnee();
        note.noteDeRechercheEtDeInnovation = new Note();
        note.noteDeCompotement = new Note();
        note.noteDeCapaciteDeOrganisation = new Note();
        note.noteDeAffectationDesTachesLieeAuTravail = new Note();
        note.noteDeRentabilite = new Note();
      });
    }
    return this._notesParDoti;
  }

  set notesParDoti(value: Array<NoteGeneraleDeAnnee>) {
    this._notesParDoti = value;
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

  get employe(): Employe {
    if(this._employe == null){
      this._employe = new Employe();
    }
    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }
}
