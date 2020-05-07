import {Employe} from './employe.model';

export class PermanenceAdministrative {
  id: number;
  periode: number;
  recuperation: boolean;
  periodeDeRecuperation: number;
  date: Date;
  employe: Employe;
}
