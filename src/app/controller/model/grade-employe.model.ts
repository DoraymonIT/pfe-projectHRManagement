import { Employe } from './employe.model';
import { Grade } from './grade.model';

export class GradeEmploye {
  id : number;
  employe : Employe;
  grade : Grade;
  dateDeAffectation : Date;
}
