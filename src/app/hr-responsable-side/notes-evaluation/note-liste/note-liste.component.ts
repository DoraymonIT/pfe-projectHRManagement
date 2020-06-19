import { Component, OnInit } from '@angular/core';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {Note} from '../../../controller/model/note.model';
import {Employe} from '../../../controller/model/employe.model';
import {NoteServiceService} from '../../../controller/service/note-service.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NoteDetailComponent} from '../note-detail/note-detail.component';
import {ToastrService} from 'ngx-toastr';
import {AjouterUneNoteComponent} from '../ajouter-une-note/ajouter-une-note.component';

@Component({
  selector: 'app-note-liste',
  templateUrl: './note-liste.component.html',
  styleUrls: ['./note-liste.component.css']
})
export class NOteListeComponent implements OnInit {
  constructor(private noteService: NoteServiceService,
              private employeService: PersonnelEmployesService,
              private dialog: MatDialog,
              private toast: ToastrService) { }
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
      { field: 'id', header: 'ID' },
      { field: 'moyenGeneral', header: 'Moyen général' },
      { field: 'mention', header: 'Mention' },
      { field: 'date', header: 'Date' },
    ];
    this.employeService.findAll();
  }
  public listeVide(): boolean {
    return this.employes.length < 1 ? true : false;
  }
  titreNote: string;
  fullnameNote: string;
  diponibleNote: boolean;

  public touverDernierOuToutNote(){
    this.diponibleNote = false;
    this.employes.forEach(employe=>{
      if(employe.doti === this.employe.doti){
        this.diponibleNote= true;
        this.fullnameNote = employe.firstName +" "+ employe.lastName;
      }
    });
    if(this.diponibleNote === false){
      this.toast.error(`le Numéro administrative de employé est incorrect`, 'merci de saisir Un Numéro administrative valide', {
        timeOut: 9500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      });
      document.getElementById('NumeroAdministrativeNote').style.color='red';
    }else{
      document.getElementById('tableNote').style.display = 'inline';
      document.getElementById('NumeroAdministrativeNote').style.color='green';
    if(this.employe.pays == 'dernierPeriode'){
      this.titreNote = "liste des derniers notes de employe : "+ this.fullnameNote;
      this.noteService.findDernierNoteDeEmploye(this.employe.doti);
    } else if(this.employe.pays == 'all'){
      this.titreNote = "liste de toutes les notes de employe : "+ this.fullnameNote;
      this.noteService.trouverNoteParSonDoti(this.employe.doti);
    }
    }
  }
  public trouverNoteParSonDoti(value: Employe) {
    this.noteService.trouverNoteParSonDoti(value.doti);
  }
  public infoUnNote(value: NoteGeneraleDeAnnee) {
    this.noteService.infoUnNote(value);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '85%';
    dialogConfig.height = '90%';
    this.dialog.open(NoteDetailComponent,
      dialogConfig);
  }
  public editerUnEmployer(employe: Employe) {
    this.employeService.editerUnEmployer(employe);
  }

  public infoUnEmployer(employe: Employe) {
    this.employeService.infoUnEmployer(employe);
  }
  ajouterNote() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '80%';
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
