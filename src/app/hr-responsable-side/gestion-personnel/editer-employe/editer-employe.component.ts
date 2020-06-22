import {Component, Inject, OnInit} from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DepartemntService} from '../../../controller/service/departemnt.service';
import {GradeService} from '../../../controller/service/grade.service';
import {Departement} from '../../../controller/model/departement.model';
import {Grade} from '../../../controller/model/grade.model';
import {Employe} from '../../../controller/model/employe.model';
import {DepFonction} from '../../../controller/model/dep-fonction.model';

@Component({
  selector: 'app-editer-employe',
  templateUrl: './editer-employe.component.html',

  styleUrls: ['./editer-employe.component.css']
})
export class EditerEmployeComponent implements OnInit {

  constructor(public employeService: PersonnelEmployesService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public departementService: DepartemntService,
              public gradeService: GradeService) { }

  ngOnInit(): void {
    this.departementService.findAll();
    this.gradeService.findAll();
    this.employeService.modifyEmpString();
  }
  get modifyEmp(): string {
    return this.employeService.modifyEmp;
  }
  get deps(): Array<Departement> {
    return this.departementService.deps;
  }
  get grades(): Array<Grade> {
    return this.gradeService.grades;
  }
  get employes(): Array<Employe> {
   return this.employeService.employes;
    }
  public update() {
    return this.employeService.update();
  }
  show(): boolean{
    if(this.EditEmploye.situationFamiliale === 'Marie'){
      return true;
    }
    else{
      return false;
    }
  }
  get depFonctions(): Array<DepFonction> {
    return this.employeService.depFonctions;
  }
  public selectDepFonction(value: string) {
    this.employeService.findFonctionByDepartement(value);
  }
  public  trouverEmployerParSonDoti(value:string){
    return this.employeService.trouverEmployerParSonDoti(value);
  }
  get EditEmploye(): Employe {
    return this.employeService.EditEmploye;
  }
  get fullname(): string {
    return this.employeService.fullname;
  }
  public deleteEmploye(){
    this.employeService.deleteByReference(this.EditEmploye);
  }
}
