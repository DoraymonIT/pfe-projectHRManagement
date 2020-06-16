import { Component, OnInit } from '@angular/core';
import {NotificationEmploye} from '../../../controller/model/notification-employe.model';
import {TypeNotification} from '../../../controller/model/type-notification.model';
import {Employe} from '../../../controller/model/employe.model';
import {NotificationEmployeService} from '../../../controller/service/notification-employe.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor(private historiqueService: NotificationEmployeService) { }

  ngOnInit(): void {
  }
  get notificationEmployeListe(): Array<NotificationEmploye> {
    return this.historiqueService.notificationEmployeListe;
  }
  get notificationEmploye(): NotificationEmploye {
    return this.historiqueService.notificationEmploye;
  }
public gethistoriqueByDate(){
this.historiqueService.findByDateNotification(this.notificationEmploye.dateDeNotification);
}
}
