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
  calendarEvent = [];
  start; boolean;
  ngOnInit(): void {
    this.start = true;
    this.pemanenceAdministrative.findAll();
    this.permanences.forEach(per => {
      this.calendarEvent = this.calendarEvent.concat({
        date: per.date.toString(),
        title: per.employe.firstName + per.employe.lastName,
      });
    });
  }

  public loadEvent():void {
    this.pemanenceAdministrative.findAll();
    console.log('cc');
    console.log(this.permanences);
    console.log(this.start);
    if(this.start == true){
      this.permanences.forEach(per => {
        console.log('hehe');
        this.calendarEvent = this.calendarEvent.concat({
          date: per.date.toString(),
          title: per.employe.firstName + per.employe.lastName,
        });
        this.start = false;
      });
    }
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.perm;
  }
//  public  addEvent() {
  //  this.permanences.forEach(permanence =>{
    //  this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
      //{ title: 'permanence.employe.fullName', date: 'permanence.date' }
    //});
    //});
  //}
}
