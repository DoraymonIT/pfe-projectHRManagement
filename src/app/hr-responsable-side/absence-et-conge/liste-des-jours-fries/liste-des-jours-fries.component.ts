import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CongeService } from 'src/app/controller/service/conge.service';
import { CongeEmploye } from 'src/app/controller/model/conge-employe.model';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { GradeService } from 'src/app/controller/service/grade.service';
import {TypeCongee} from '../../../controller/model/type-congee.model';

@Component({
  selector: 'app-liste-des-jours-fries',
  templateUrl: './liste-des-jours-fries.component.html',
  styleUrls: ['./liste-des-jours-fries.component.css']
})
export class ListeDesJoursFriesComponent implements OnInit {

  constructor(private congeservice: CongeService, private es: PersonnelEmployesService, private gradeservice: GradeService) { }
  calendarEvents = [
    { title: 'event 1', date: '2020-04-01' }
  ];
  ngOnInit(): void {
    this.congeservice.findAll()
  }
  public getcongeByDotiAndLibelle(){
    this.conges.forEach( conge => {
      this.congeEmploye.employe.doti = conge.employe.doti;
    });
  this.congeservice.findcongeByDotiAndLibelle(this.congeEmploye.employe.doti, this.congeEmploye.congee.libelle);
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
  get employefullname(): string {
    return this.congeservice.employefullname;
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
}
