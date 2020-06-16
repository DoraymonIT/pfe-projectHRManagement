import {Employe} from './employe.model';
import {Punition} from './punition.model';

export class PunitionEmploye {
  id: number;
  employe: Employe;
  punition: Punition;
  dateObtenation: Date;
  remarque: string;
}
