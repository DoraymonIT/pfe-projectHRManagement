import {Employe} from './employe.model';
import {TypeNotification} from './type-notification.model';

export class NotificationEmploye {
  id: number;
  notification: TypeNotification;
  employe: Employe;
  dateDeNotification: Date;
  libelle: string;
}
