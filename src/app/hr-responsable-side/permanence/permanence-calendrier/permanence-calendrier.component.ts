import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../../controller/model/PermanenceAdministrative';
import {Employe} from '../../../controller/model/employe.model';
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
    console.log('hani dkhalt tani');
    console.log(this.permanences.length);
    this.permanences.forEach(per => {
      console.log('ha howa start date:' + per.date.toString());
      console.log('ha howa start fullname:' + per.employe.fullName);
      this.calendarEvents.push({
        date: per.date.toString(),
        title: per.employe.fullName,
      });
    });
    console.log('ha howa event jdid' + this.calendarEvents.toString());
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.perm;
  }
  public findAll(){
    this.pemanenceAdministrative.findAll();
    console.log(this.permanences.length);
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
