import { Note } from './note.model';
import { Employe } from './employe.model';

export class NoteGeneraleDeAnnee {
  id : number;
  noteDeAffectationDesTachesLieeAuTravail : Note;
  noteDeRentabilite: Note;
  noteDeCapaciteDeOrganisation:Note ;
  noteDeCompotement :Note ;
  noteDeRechercheEtDeInnovation :Note ;
  moyenGeneral : number;
  mention : string;
  employe : Employe;
  date : Date;
}
