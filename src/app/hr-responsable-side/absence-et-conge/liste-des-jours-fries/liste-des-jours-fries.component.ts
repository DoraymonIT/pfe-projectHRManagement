import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-liste-des-jours-fries',
  templateUrl: './liste-des-jours-fries.component.html',
  styleUrls: ['./liste-des-jours-fries.component.css']
})
export class ListeDesJoursFriesComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  constructor() { }
  calendarEvents = [
    { title: 'event 1', date: '2020-04-01' }
  ];
  ngOnInit(): void {
  }

}
