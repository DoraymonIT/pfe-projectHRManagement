import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs-et-video',
  templateUrl: './logs-et-video.component.html',
  styleUrls: ['./logs-et-video.component.css']
})
export class LogsEtVideoComponent implements OnInit {

  constructor() { }
affichage: boolean
  ngOnInit(): void {
    this.affichage = false;
  }
  show() {
    if (this.affichage === false){
      document.getElementById('menu1').style.display = 'inline';
      this.affichage = true;
    } else {
      document.getElementById('menu1').style.display = 'none';
      this.affichage = false;

    }
  }
}
