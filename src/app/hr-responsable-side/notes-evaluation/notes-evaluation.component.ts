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

  cols: any[];
  ngOnInit(): void {
    this.cols = [
      { field: 'fullName', header: 'Full Name' },
      { field: 'doti', header: 'doti' },
      { field: 'cin', header: 'cin' },
      { field: 'email', header: 'email' },
    ];
    this.employeService.findAll();
  }
  constructor(private noteService: NoteServiceService,
              private employeService: PersonnelEmployesService) { }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get notes(): Array<NoteGeneraleDeAnnee> {
  return this.noteService.notes;
  }
  public listeVide():boolean{
    //  console.log(this.de.length);
    return this.employes.length <1 ? true:false;
  }
  public trouverNoteParSonDoti(value: Employe){
    this.noteService.trouverNoteParSonDoti(value.doti);
  }
  public infoUnNote(value: NoteGeneraleDeAnnee){
    this.demo1BtnClick(3);
    console.log(value.date)
    this.noteService.infoUnNote(value);
  }
  public editerUnEmployer(employe: Employe){
    console.log(employe);
    this.demo1BtnClick(1);
    this.employeService.editerUnEmployer(employe);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }
  get indice(): number {
    return this.employeService.indice;
  }
  public infoUnEmployer(employe: Employe){
    this.demo1BtnClick(3);
    this.employeService.infoUnEmployer(employe);
  }
}
