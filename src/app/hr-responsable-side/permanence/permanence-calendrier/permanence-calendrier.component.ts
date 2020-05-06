import { Component, OnInit } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-permanence-calendrier',
  templateUrl: './permanence-calendrier.component.html',
  styleUrls: ['./permanence-calendrier.component.css']
})
export class PermanenceCalendrierComponent implements OnInit {

  constructor() { }
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  // important!
   calendarEvents: EventInput[] =[{
     title: 'babour1',
     start: '2020-05-01',
     end: '2020-05-03',
      }];

  ngOnInit(): void {
  }
}
