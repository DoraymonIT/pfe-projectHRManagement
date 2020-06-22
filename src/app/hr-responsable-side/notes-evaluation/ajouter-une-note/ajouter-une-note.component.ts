import { Component, OnInit } from '@angular/core';
import {NoteServiceService} from '../../../controller/service/note-service.service';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {Note} from '../../../controller/model/note.model';
import {Employe} from '../../../controller/model/employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';

@Component({
  selector: 'app-ajouter-une-note',
  templateUrl: './ajouter-une-note.component.html',
  styleUrls: ['./ajouter-une-note.component.css']
})
export class AjouterUneNoteComponent implements OnInit {

  constructor(private noteService : NoteServiceService,
              private employeService: PersonnelEmployesService) { }
public div1: boolean;
public div2: boolean;
public div3: boolean;
public div4: boolean;
public div5: boolean;
  ngOnInit(): void {
    this.employeService.findAll();
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
  }
  get note(): NoteGeneraleDeAnnee {
    return this.noteService.noteSave;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public afficher1() {
    if(this.div1 === false){
    document.getElementById('div1').style.display = 'inline-block';
      this.div1 = true;
    } else {
      document.getElementById('div1').style.display = 'none';
      this.div1 = false;

    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
  }
  public afficher2() {
    if(this.div2 === false){
      document.getElementById('div2').style.display = 'inline-block';
      this.div2 = true;
    } else {
      document.getElementById('div2').style.display = 'none';
      this.div2 = false;
    }
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
  }
    public afficher3() {
      if(this.div3 === false){
        document.getElementById('div3').style.display = 'inline-block';
        this.div3 = true;
      } else {
        document.getElementById('div3').style.display = 'none';
        this.div3 = false;
      }
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div4').style.display = 'none';
      document.getElementById('div5').style.display = 'none';  }
  public afficher4() {
    if(this.div4 === false){
      document.getElementById('div4').style.display = 'inline-block';
      this.div4 = true;
    } else {
      document.getElementById('div4').style.display = 'none';
      this.div4 = false;
    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
  }
  public afficher5() {
    if(this.div5 === false){
      document.getElementById('div5').style.display = 'inline-block';
      this.div5 = true;
    } else {
      document.getElementById('div5').style.display = 'none';
      this.div5 = false;
    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div4').style.display = 'none';  }
  public  save() {
    this.noteService.save();
  }
  get fullnameNote(): string {
    return this.employeService.fullnameNote;
  }
  public getEmployeNotedoti(doti: string){
    this.employeService.GetEmployeNoteByDoti(doti);
  }
  public deleteNote(){
    this.noteService.deleteByReference(this.note);
  }
}
