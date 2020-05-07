import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import {PermanenceSchedule} from '../../../controller/model/permanence-schedule';
import { PermanenceAdministrativeService } from 'src/app/controller/service/permanence-administrative.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-permanence-calendrier',
  templateUrl: './permanence-calendrier.component.html',
  styleUrls: ['./permanence-calendrier.component.css']
})
export class PermanenceCalendrierComponent implements OnInit {
  private _permanences: Array<PermanenceSchedule>;
url1 : string = 'http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findAll';

events: any[];

options: any;

constructor(private eventService: PermanenceAdministrativeService,private http : HttpClient) { }

ngOnInit() {

    this.options = {
        plugins: [dayGridPlugin],
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        }
    }
    this.events = [...this.events, {
      "title": "Conference",
      "start": "2020-05-11",
      "end": "2020-05-13"

  },

];
}

// receive(eve : PermanenceSchedule){
//  this.events = [...this.events,{
//    "title": eve.title,
//    "start" : eve.date.toString,
//    "end" : eve.date.getMilliseconds +(eve.periode *),
//  }

//  ];
// }


  get permanences(): Array<PermanenceSchedule> {
    return this.eventService.permanences;
  }

//  public  addEvent() {
  //  this.permanences.forEach(permanence =>{
    //  this.calendarEvents = this.calendarEvents.concat({ // creates a new array!
      //{ title: 'permanence.employe.fullName', date: 'permanence.date' }
    //});
    //});
  //}

}
