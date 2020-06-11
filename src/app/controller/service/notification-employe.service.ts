import { Injectable } from '@angular/core';
import {PermanenceAdministrative} from '../model/PermanenceAdministrative';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {NotificationEmploye} from '../model/notification-employe.model';
import {Employe} from '../model/employe.model';
import {TypeNotification} from '../model/type-notification.model';
import {NoteGeneraleDeAnnee} from '../model/note-generale-de-annee.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationEmployeService {

  constructor(private http: HttpClient,
              private toast: ToastrService) { }
              private _notificationEmploye: NotificationEmploye;
              private _notificationEmployeListe: Array<NotificationEmploye>;
              private _notificationAujourdhui: Array<NotificationEmploye>;

              public  findNotificationAujourdhui(){
                this.http.get<Array<NotificationEmploye>>('http://localhost:8080/gestionDesEmployee-Api/NotificationEmploye/findNotificationAujourdhui').subscribe(
                  data => {
                    this.notificationAujourdhui = data ;
                  }, eror => {
                    console.log('eroro', eror);
                  });
              }
  public  findAll(){
    this.http.get<Array<NotificationEmploye>>('http://localhost:8080/gestionDesEmployee-Api/NotificationEmploye/findAll').subscribe(
      data => {
        this.notificationAujourdhui = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  get notificationAujourdhui(): Array<NotificationEmploye> {
    if(this._notificationAujourdhui == null){
      this._notificationAujourdhui = new Array<NotificationEmploye>();
      this._notificationAujourdhui.forEach(notification =>{
        notification= new NotificationEmploye();
        notification.notification = new TypeNotification();
        notification.employe = new Employe()
      });
    };
      return this._notificationAujourdhui;
  }

  set notificationAujourdhui(value: Array<NotificationEmploye>) {
    this._notificationAujourdhui = value;
  }

  get notificationEmploye(): NotificationEmploye {
    if(this._notificationEmploye == null){
      this._notificationEmploye = new NotificationEmploye();
      this._notificationEmploye.employe = new Employe()
      this._notificationEmploye.notification = new TypeNotification();
    }
    return this._notificationEmploye;
  }

  set notificationEmploye(value: NotificationEmploye) {
    this._notificationEmploye = value;
  }

  get notificationEmployeListe(): Array<NotificationEmploye> {
    if(this._notificationEmployeListe == null){
      this._notificationEmployeListe = new Array<NotificationEmploye>();
      this._notificationEmployeListe.forEach(notification =>{
        notification= new NotificationEmploye();
        notification.notification = new TypeNotification();
        notification.employe = new Employe()
      });
    }
    return this._notificationEmployeListe;
  }

  set notificationEmployeListe(value: Array<NotificationEmploye>) {
    this._notificationEmployeListe = value;
  }
}
