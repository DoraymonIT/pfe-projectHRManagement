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
    this
      .tservice
      .getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
    });
}

settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Name'
    },
    age: {
      title: 'Age'
    }
  }
};
}
