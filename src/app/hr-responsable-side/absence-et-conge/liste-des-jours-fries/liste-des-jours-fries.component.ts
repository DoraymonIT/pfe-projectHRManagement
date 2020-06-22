import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CongeService } from 'src/app/controller/service/conge.service';
import { CongeEmploye } from 'src/app/controller/model/conge-employe.model';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { GradeService } from 'src/app/controller/service/grade.service';
import {TypeCongee} from '../../../controller/model/type-congee.model';
import {Departement} from '../../../controller/model/departement.model';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-liste-des-jours-fries',
  templateUrl: './liste-des-jours-fries.component.html',
  styleUrls: ['./liste-des-jours-fries.component.css']
})
export class ListeDesJoursFriesComponent implements OnInit {
  constructor(private congeservice: CongeService,
              private es: PersonnelEmployesService,
              private gradeservice: GradeService,
              private toast: ToastrService) { }
  calendarEvents = [
    { title: 'event 1', date: '2020-04-01' }
  ];
  public tabindex;
  public demo1TabIndex = 0;
  ngOnInit(): void {
    this.congeservice.findAll();
    this.es.findAll();
  }
  get employes(): Array<Employe> {
    return this.es.employes;
  }
  titre: string;
  fullname: string;
  diponible: boolean;
  public getcongeByDotiAndLibelle(){
    this.diponible = false;
    this.employes.forEach(employe=>{
      if(employe.doti === this.congeEmploye.employe.doti){
        this.diponible= true;
        this.fullname = employe.firstName +" "+ employe.lastName;
      }
    });
    if(this.diponible === false){
      this.toast.error(`le Numéro administrative de employe est incorrect`, 'merci de saisir Un Numéro administrative correct', {
        timeOut: 9500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      });
      document.getElementById('NumeroAdministrativeConge').style.color='red';
    }else{
      this.congeservice.findcongeByDotiAndLibelle(this.congeEmploye.employe.doti, this.congeEmploye.congee.libelle);
      this.titre= 'listes des ' + this.congeEmploye.congee.libelle + ' de employe '+ this.fullname;
      document.getElementById('NumeroAdministrativeConge').style.color='green';

    }
  }
  get conges(): Array<CongeEmploye> {
    return this.congeservice.conges;
  }
  public listeVide(): boolean {
    return this.conges.length < 1 ? true : false;
  }
  public exporterListeDeCongeEnExcel(){
    this.congeservice.exporterListeDeCongeDeEmployeExcel();
  }
  public imprimerLalisteDeConge() {
    this.congeservice.imprimerListeDeCongeDeEmploye();
  }
  get congeEmploye(): CongeEmploye {
    return this.congeservice.congeEmploye;
  }
  get typeConge(): Array<TypeCongee> {
    return this.congeservice.typeConge;
  }
  public  trouverEmployerParSonDoti(value:string){
    this.es.trouverEmployerCongeParSonDoti(value);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  public editerUnConge(conge: CongeEmploye) {
    this.demo1BtnClick(4);
    this.congeservice.editerUnEmployer(conge);
  }
}
