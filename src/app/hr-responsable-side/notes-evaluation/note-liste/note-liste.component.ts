import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/controller/service/note-service.service';
import { NoteGeneraleDeAnnee } from 'src/app/controller/model/note-generale-de-annee.model';

@Component({
  selector: 'app-note-liste',
  templateUrl: './note-liste.component.html',
  styleUrls: ['./note-liste.component.css']
})
export class NOteListeComponent implements OnInit {

  constructor(private noteService: NoteServiceService
    ) { }

  ngOnInit(): void {
  }
  get notes(): Array<NoteGeneraleDeAnnee> {
    return this.noteService.notes;
    }
}
