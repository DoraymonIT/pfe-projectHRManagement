import { Component, OnInit } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import {LogInService} from '../controller/service/log-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hr-responsable-side',
  templateUrl: './hr-responsable-side.component.html',
  styleUrls: ['./hr-responsable-side.component.css']
})
export class HRResponsableSideComponent implements OnInit {
  constructor(private logInService: LogInService,
              private router: Router) {
  this.hideMatBadge = false;
  this.ex = 12;
   }
  get conncter(): boolean {
    return this.logInService.conncter;
  }
  opened: boolean;

  panelOpenState = false;
  hideMatBadge: boolean;
  ex: number;
  public connecter(): boolean {
    if (this.conncter === false) {
      this.router.navigate(['']).then();
      return false;
    }
    return true;
  }
  ngOnInit(): void {
    this.connecter();
  }
badge(){
 this.hideMatBadge= true;
}
}
