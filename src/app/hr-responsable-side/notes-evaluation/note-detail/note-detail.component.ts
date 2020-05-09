import { Component, OnInit } from '@angular/core';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {Note} from '../../../controller/model/note.model';
import {Employe} from '../../../controller/model/employe.model';
import {NoteServiceService} from '../../../controller/service/note-service.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  constructor(private noteService: NoteServiceService,
              private employeService: PersonnelEmployesService) { }
  panelOpenState = false;
  ngOnInit(): void {
    this.employeService.findAll();
  }

  get note(): NoteGeneraleDeAnnee {
    return this.noteService.note;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public chercher(){
    console.log(this.note.date);
    this.noteService.trouverNoteParSonDotiEtParDate();
  }
  get noteDoti(): Note {
    return this.noteService.noteDoti;
  }
}
