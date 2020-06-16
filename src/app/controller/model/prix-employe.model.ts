import {Prix} from './prix.model';
import {Employe} from './employe.model';

export class PrixEmploye {
  id: number;
  prix: Prix;
  employe: Employe;
  dateDeObtenation: Date;
  remarque: string;
}
