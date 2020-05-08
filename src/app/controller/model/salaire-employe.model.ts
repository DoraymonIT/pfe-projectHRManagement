import {Emoluments} from './emoluments.model';
import {Revenu} from './revenu.model';
import {Employe} from './employe.model';

export class SalaireEmploye {
  id: number;
  salaireNet:number;
 idemFamialieleMarocaine: Emoluments;
 idemDeLaResidence: Emoluments;
 allocationDeEncadrement: Emoluments;
 allocationDeEnseignement: Emoluments;
 mutuelleCaisseRetraitEtDeces: Revenu;
 impotSurLeRevenu: Revenu;
 assuranceMaladieObligatoire: Revenu;
 caisseMarocaineDeretrait: Revenu;
 monatntModifie: number;
 employe: Employe;
}
