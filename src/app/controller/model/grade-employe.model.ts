import { Employe } from './employe.model';
import { Grade } from './grade.model';

export class GradeEmploye {
  id: number;
  doti: string;
  grade: Grade;
  dateDeAffectation: Date;
}
