import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {PermanenceSchedule} from '../../../controller/model/permanence-schedule';
@Component({
  selector: 'app-permanence-calendrier',
  templateUrl: './permanence-calendrier.component.html',
  styleUrls: ['./permanence-calendrier.component.css']
})
export class PermanenceCalendrierComponent implements OnInit {
  constructor(private pemanenceAdministrative : PermanenceAdministrativeService) { }
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [
    { title: 'event 1', date: '2019-04-01' }
  ];
  ngOnInit(): void {
    this.findAll();
  }
  get permanences(): Array<PermanenceSchedule> {
    return this.pemanenceAdministrative.permanences;
  }
  public findAll(){
    this.pemanenceAdministrative.findAll();
    console.log('ha data wslaaat lhna'+this.permanences);
  }
//  public  addEvent() {
  //  this.permanences.forEach(permanence =>{
    //  this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
      //{ title: 'permanence.employe.fullName', date: 'permanence.date' }
    //});
    //});
  //}
}
