import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/controller/service/log-in.service';
export interface Table {
  id: Number;
  name: String;
  age: Number;
}
@Component({
  selector: 'app-notes-evaluation',
  templateUrl: './notes-evaluation.component.html',
  styleUrls: ['./notes-evaluation.component.css']
})
export class NotesEvaluationComponent implements OnInit {

  characters: Table[];

  constructor(private tservice: LogInService) { }

  ngOnInit() {
   
}

}
