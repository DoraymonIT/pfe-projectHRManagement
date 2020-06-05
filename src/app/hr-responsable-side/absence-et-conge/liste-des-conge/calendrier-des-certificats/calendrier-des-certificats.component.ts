import { Component, OnInit } from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import {PermanenceAdministrative} from '../../../../controller/model/PermanenceAdministrative';
import {CongeEmploye} from '../../../../controller/model/conge-employe.model';
import {TypeCongee} from '../../../../controller/model/type-congee.model';
import {Employe} from '../../../../controller/model/employe.model';
import {CongeService} from '../../../../controller/service/conge.service';

@Component({
  selector: 'app-calendrier-des-certificats',
  templateUrl: './calendrier-des-certificats.component.html',
  styleUrls: ['./calendrier-des-certificats.component.css']
})
export class CalendrierDesCertificatsComponent implements OnInit {

  constructor(private congeService: CongeService) { }

  ngOnInit(): void {
    this.congeService.findallCertificatDansCetteAnnee();
    this.loadEvent();
  }
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [
    { title: 'event 1', start: '2020-04-01', end:'2020-04-30' }
  ];
  public loadEvent():void {
    this.congeService.findallCertificatDansCetteAnnee();
    this.congesCertificat.forEach(per => {
      this.calendarEvents.push({
        title: per.employe.firstName + per.employe.lastName,
        start: per.dateDeDebut.toString(),
        end: per.dateDeFin.toString(),
      });
    });
    console.log('ha howa event jdid' + this.calendarEvents.toString());
  }

  get congesCertificat(): Array<CongeEmploye> {
    return this.congeService.congesCertificatCalendrier;
  }
}
