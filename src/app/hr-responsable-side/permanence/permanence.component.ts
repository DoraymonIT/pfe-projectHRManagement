import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PermanenceSchedule } from 'src/app/controller/model/permanence-schedule';
import { PermanenceScheduleSService } from 'src/app/controller/service/permanence-schedule-s.service';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-permanence',
  templateUrl: './permanence.component.html',
  styleUrls: ['./permanence.component.css']
})
export class PermanenceComponent implements OnInit {
  constructor(private ps: PermanenceScheduleSService) { }
  ngOnInit(): void {

  }
  calendarPlugins = [dayGridPlugin,interactionPlugin]; // important!
  calendarEvents: EventInput[]=[{
    title:'babour1',start:'2020-05-01',end:'2020-05-03',editable:true,id:1,durationEditable:true,startEditable:true,
    textColor:'white',overlap:true,allDay:true
  }]
  public pushing(schedule : PermanenceSchedule) {

    this.calendarEvents = this.calendarEvents.concat({

      title : schedule.title,
      start: schedule.date,
      end: schedule.endDate,
      editable:true
    })
    console.log(this.calendarEvents);
    schedule.title='';
    schedule.date=null;
    schedule.endDate=null;

  }
  public get Ss(): Array<PermanenceSchedule> {
    return this.ps.Ss;
  }
  public get S(): PermanenceSchedule {
    return this.ps.S;
  }
}

