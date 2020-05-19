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

  constructor(private noteService: NoteServiceService) { }

  public tabindex;
  public demo1TabIndex = 0;
  ngOnInit(): void {
    this.noteService.findAllNoteNonTraite();
  }
  get notes(): Array<NoteGeneraleDeAnnee> {
    return this.noteService.notes;
  }
  public listeVide(): boolean {
    return this.notes.length < 1 ? true : false;
  }
  public affecteruneNote(note: NoteGeneraleDeAnnee){
    this.demo1BtnClick(2);
    this.noteService.affecteruneNote(note);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
}
