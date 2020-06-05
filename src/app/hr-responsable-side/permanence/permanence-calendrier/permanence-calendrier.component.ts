import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../../controller/model/PermanenceAdministrative';
@Component({
  selector: 'app-permanence-calendrier',
  templateUrl: './permanence-calendrier.component.html',
  styleUrls: ['./permanence-calendrier.component.css']
})
export class PermanenceCalendrierComponent implements OnInit {
  constructor(private pemanenceAdministrative : PermanenceAdministrativeService) {}
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [
    { title: 'event 1', date: '2020-04-01' }
  ];
  ngOnInit(): void {
    this.findAll();
    this.loadEvent();
  }

  public loadEvent():void {
    this.permanences.forEach(per => {
      this.calendarEvents.push({
        date: per.date.toString(),
        title: per.employe.firstName + per.employe.lastName,
      });
    });
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.perm;
  }
  public findAll(){
    this.pemanenceAdministrative.findAll();
    this.loadEvent();
  }
//  public  addEvent() {
  //  this.permanences.forEach(permanence =>{
    //  this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
      //{ title: 'permanence.employe.fullName', date: 'permanence.date' }
    //});
    //});
  //}
}
