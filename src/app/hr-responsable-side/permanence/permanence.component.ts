import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PermanenceSchedule } from 'src/app/controller/model/permanence-schedule';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-permanence',
  templateUrl: './permanence.component.html',
  styleUrls: ['./permanence.component.css']
})
export class PermanenceComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }
  calendarPlugins = [dayGridPlugin,interactionPlugin]; // important!
  calendarEvents: EventInput[]=[{
    title:'babour1',start:'2020-05-01',end:'2020-05-03',editable:true,id:1,durationEditable:true,startEditable:true,
    textColor:'white',overlap:true,allDay:false
  }]
  public pushing(schedule : PermanenceSchedule) {

    this.calendarEvents = this.calendarEvents.concat({

      title : schedule.title,
      start: schedule.date,
      allDay: false,
      end: schedule.endDate,
      editable:true
    })
    console.log(this.calendarEvents);
    schedule.title='';
    schedule.date=null;
    schedule.endDate=null;

  }

}

