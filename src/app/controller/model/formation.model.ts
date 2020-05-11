import {Employe} from './employe.model';

export class Formation {
  id: number;
  attestation: string ;
  domaine: string;
  etablissement: string ;
  ville: string;
  annee: Date;
  mention: number;
  employe: Employe;
}
