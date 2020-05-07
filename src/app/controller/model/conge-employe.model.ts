import {Employe} from './employe.model';
import {TypeCongee} from './type-congee.model';

export class CongeEmploye {
   id:number;
   dateDeDebut: Date;
   employe: Employe;
   congee: TypeCongee;
   periode: number;
   raison: string;
   etat: string;
}
