import { Note } from './note.model';
import { Employe } from './employe.model';

export class NoteGeneraleDeAnnee {
  id : number;
  noteDeAffectationDesTachesLiéeAuTravail : Note;
  noteDeRentabilité: Note;
  noteDeCapacitéDeOrganisation:Note ;
  noteDeCompotement :Note ;
  noteDeRechercheEtDeInnovation :Note ;
  moyenGeneral : number;
  mention : string;
  employe : Employe;
  date : Date;
}
