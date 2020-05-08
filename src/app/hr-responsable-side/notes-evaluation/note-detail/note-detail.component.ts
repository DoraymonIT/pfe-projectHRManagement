import { Component, OnInit } from '@angular/core';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {Note} from '../../../controller/model/note.model';
import {Employe} from '../../../controller/model/employe.model';
import {NoteServiceService} from '../../../controller/service/note-service.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  constructor(private noteService: NoteServiceService) { }
  panelOpenState = false;
  ngOnInit(): void {
  }

  get note(): NoteGeneraleDeAnnee {
    return this.noteService.note;
  }

}
