import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CongeService } from 'src/app/controller/service/conge.service';
import { CongeEmploye } from 'src/app/controller/model/conge-employe.model';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { GradeService } from 'src/app/controller/service/grade.service';

@Component({
  selector: 'app-liste-des-jours-fries',
  templateUrl: './liste-des-jours-fries.component.html',
  styleUrls: ['./liste-des-jours-fries.component.css']
})
export class ListeDesJoursFriesComponent implements OnInit {

  constructor(private congeservice: CongeService,private es:PersonnelEmployesService,private gradeservice: GradeService,) { }
  calendarEvents = [
    { title: 'event 1', date: '2020-04-01' }
  ];
  ngOnInit(): void {
  }
  get conges(): Array<CongeEmploye> {
    return this.congeservice.conges;
  }
  public listeVide(): boolean {
    //    console.log(this.employes.length);
    return this.conges.length < 1 ? true : false;
  }

}
