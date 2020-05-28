import { Component, OnInit } from '@angular/core';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {Note} from '../../../controller/model/note.model';
import {Employe} from '../../../controller/model/employe.model';
import {NoteServiceService} from '../../../controller/service/note-service.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NoteDetailComponent} from '../note-detail/note-detail.component';

@Component({
  selector: 'app-note-liste',
  templateUrl: './note-liste.component.html',
  styleUrls: ['./note-liste.component.css']
})
export class NOteListeComponent implements OnInit {
  constructor(private noteService: NoteServiceService,
              private employeService: PersonnelEmployesService,
              private dialog: MatDialog) { }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get notesParDoti(): Array<NoteGeneraleDeAnnee> {
    return this.noteService.notesParDoti;
  }
  get employe(): Employe {
    return this.employeService.employe;
  }
  get indice(): number {
    return this.employeService.indice;
  }

  cols: any[];
  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'moyenGeneral', header: 'Moyen general' },
      { field: 'mention', header: 'Mention' },
      { field: 'date', header: 'Date' },
    ];
    this.employeService.findAll();
  }
  public listeVide(): boolean {
    return this.employes.length < 1 ? true : false;
  }
  public trouverNoteParSonDoti(value: Employe) {
    this.noteService.trouverNoteParSonDoti(value.doti);
  }
  public infoUnNote(value: NoteGeneraleDeAnnee) {
    this.noteService.infoUnNote(value);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '100%';
    this.dialog.open(NoteDetailComponent,
      dialogConfig);
  }
  public editerUnEmployer(employe: Employe) {
    this.employeService.editerUnEmployer(employe);
  }

  public infoUnEmployer(employe: Employe) {
    this.employeService.infoUnEmployer(employe);
  }
}
