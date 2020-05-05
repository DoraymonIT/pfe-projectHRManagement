import { GradeEmploye } from './grade-employe.model';
import { NoteGeneraleDeAnnee } from './note-generale-de-annee.model';
import { Departement } from './departement.model';

export class Employe {


  id: number;
  doti: number;
  enfants: number;
  fullName: string;
  cin: string;
  email: string;
  // grade: number;
  dateEntree: Date;
  fonction: string;
  dep: Departement;
  dateDeNaissance: Date;
  lieuDeNaissance: string;
  gender: string;
  adresse: string;
  pays: string;
  situationFamiliale: string;
  tel: string;
  sup: Employe;
  dateSortie: Date;
  compteBancaireRib: string;
  dernierNote: NoteGeneraleDeAnnee;
  dateProchainEvaluation: Date;
  dateDeProchainNote: Date;
  dateAvancementPrevue: Date;
  soldeRestantesCongéExceptionnel: number;
  dernierGrade: GradeEmploye;
}


