import {Employe} from './employe.model';
import {TypeDocument} from './type-document.model';

export class DemaneDeDocument {
  id: number;
  employe: Employe;
  dateDemande: Date;
  typeDeDocument: TypeDocument;
  maniereDeRetrait: string;
  etat: string;
  nbrDeDocument: number;
}
