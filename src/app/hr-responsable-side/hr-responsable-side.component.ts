import { Component, OnInit } from '@angular/core';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-hr-responsable-side',
  templateUrl: './hr-responsable-side.component.html',
  styleUrls: ['./hr-responsable-side.component.css']
})
export class HRResponsableSideComponent implements OnInit {
  constructor() {
  this.hideMatBadge = false;
    this.ex=12;
   }
  opened: boolean;

  panelOpenState = false;

  ngOnInit(): void {
  }
  hideMatBadge : boolean;
ex:number;
badge(){
 this.hideMatBadge= true;
}
}
