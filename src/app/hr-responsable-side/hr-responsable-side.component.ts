import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-responsable-side',
  templateUrl: './hr-responsable-side.component.html',
  styleUrls: ['./hr-responsable-side.component.css']
})
export class HRResponsableSideComponent implements OnInit {
  constructor() {
   }
  opened: boolean;

  panelOpenState = false;

  ngOnInit(): void {
  }

}
