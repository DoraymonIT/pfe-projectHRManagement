import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-permanence',
  templateUrl: './permanence.component.html',
  styleUrls: ['./permanence.component.css']
})
export class PermanenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarPlugins = [dayGridPlugin]; // important!

}
