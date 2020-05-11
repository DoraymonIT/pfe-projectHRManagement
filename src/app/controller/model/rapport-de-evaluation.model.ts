import {Employe} from './employe.model';
import {GradeEmploye} from './grade-employe.model';
import {Prix} from './prix.model';
import {PrixEmploye} from './prix-employe.model';
import {PunitionEmploye} from './punition-employe.model';
import {Formation} from './formation.model';
import {NoteGeneraleDeAnnee} from './note-generale-de-annee.model';

export class RapportDeEvaluation {
  id: number;
  employe: Employe;
  nouveauGrade: GradeEmploye;
  moyen: number;
  mention: string;
  remarques: string;
  prix: Array<PrixEmploye>;
  punition: Array<PunitionEmploye>;
  formation: Array<Formation>;
  noteGenerale: Array<NoteGeneraleDeAnnee>;
}
