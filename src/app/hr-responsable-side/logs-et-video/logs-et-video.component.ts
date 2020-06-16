import { Component, OnInit } from '@angular/core';
import {NotificationEmployeService} from '../../controller/service/notification-employe.service';
import {NotificationEmploye} from '../../controller/model/notification-employe.model';
import {TypeNotification} from '../../controller/model/type-notification.model';
import {Employe} from '../../controller/model/employe.model';

@Component({
  selector: 'app-logs-et-video',
  templateUrl: './logs-et-video.component.html',
  styleUrls: ['./logs-et-video.component.css']
})
export class LogsEtVideoComponent implements OnInit {

  constructor(private notificationService: NotificationEmployeService) { }
affichage: boolean
  ngOnInit(): void {
    this.affichage = false;
    this.notificationService.findNotificationAujourdhui();
  }
  get notificationAujourdhui(): Array<NotificationEmploye> {
    return this.notificationService.notificationAujourdhui;
  }
  public show() {
    if (this.affichage === false){
      console.log(this.notificationAujourdhui.length);
      document.getElementById('menu1').style.display = 'inline';
      this.affichage = true;
    } else {
      document.getElementById('menu1').style.display = 'none';
      this.affichage = false;
    }
  }
}
