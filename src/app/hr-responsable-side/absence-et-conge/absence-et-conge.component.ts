import {
  Component,

  OnInit
} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-absence-et-conge',

  templateUrl: './absence-et-conge.component.html',
  styleUrls: ['./absence-et-conge.component.css'],

})
export class AbsenceEtCongeComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!

  constructor() { }
  ngOnInit(): void {

  }


}
