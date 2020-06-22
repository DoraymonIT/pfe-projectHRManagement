import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/controller/service/log-in.service';
import {GradeService} from '../../controller/service/grade.service';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {NoteServiceService} from '../../controller/service/note-service.service';
import {Employe} from '../../controller/model/employe.model';
import {Departement} from '../../controller/model/departement.model';
import {GradeEmploye} from '../../controller/model/grade-employe.model';
import {Grade} from '../../controller/model/grade.model';
import {NoteGeneraleDeAnnee} from '../../controller/model/note-generale-de-annee.model';
import {Note} from '../../controller/model/note.model';
import {Fonction} from '../../controller/model/fonction.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AutresComponent} from '../gestion-personnel/autres/autres.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {AjouterPunitionComponent} from '../certificats-medicales/punition/ajouter-punition/ajouter-punition.component';
import {PunitionEmploye} from '../../controller/model/punition-employe.model';
import {AjouterUneNoteComponent} from './ajouter-une-note/ajouter-une-note.component';
export interface Table {
  id: Number;
  name: String;
  age: Number;
}
@Component({
  selector: 'app-notes-evaluation',
  templateUrl: './notes-evaluation.component.html',
  styleUrls: ['./notes-evaluation.component.css']
})
export class NotesEvaluationComponent implements OnInit {

  constructor(private noteService: NoteServiceService,
              private ps: PersonnelEmployesService,
              private employeSrvice: PersonnelEmployesService,
              private dialog: MatDialog) { }
  cols: any[];
  public tabindex;
  public demo1TabIndex = 0;
  ngOnInit(): void {
    this.employeSrvice.trouverEmployerAyantBesoinDeNote();
    this.cols = [
      { field: 'doti', header: 'Numero' },
      { field: 'firstName', header: 'Prenom' },
      { field: 'lastName', header: 'Nom' },
      { field: 'dateDeProchainNote', header: 'Date Note Prévue' },
    ];
  //  this.ps.trouverEmployerNoteGeneraleToday();
  }
  // get notesNonTraites(): Array<NoteGeneraleDeAnnee> {
  //   return this.noteService.notesNonTraite;
  // }
  get notesNonTraites(): Array<Employe> {
    return this.employeSrvice.employeNote;
  }
  public listeVide(): boolean {
    return this.notesNonTraites.length < 1 ? true : false;
  }
  public imprimerListeDeEmployeAyantBesoinDUneNotePDF(){
    this.noteService.listeDeEmployeAyantBesoinDUneNotePDF(this.notesNonTraites);
  }
public imprimerListeDeEmployeAyantBesoinDUneNoteExcel(){
    this.noteService.listeDeEmployeAyantBesoinDUneNoteExcel(this.notesNonTraites);
}
  get employe(): Employe {
    return this.noteService.employe;
  }
  public getemployeByDate() {
    document.getElementById('tableNote').style.display = 'inline';
    this.ps.trouveremployeByDate(this.employe.dateDeProchainNote);
  }
  public affecteruneNote(note: NoteGeneraleDeAnnee){
    this.demo1BtnClick(2);
    this.noteService.affecteruneNote(note);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  ajouterNote(employe: Employe) {
    this.noteService.setDoti(employe.doti);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '90%';
    this.dialog.open(AjouterUneNoteComponent,
      dialogConfig);
  }
  public modifieNote(note: NoteGeneraleDeAnnee){
    const dialogConfig = new MatDialogConfig();
    this.noteService.affecteruneNote(note);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '80%';
    this.dialog.open(AjouterUneNoteComponent,
      dialogConfig);
  }

}
