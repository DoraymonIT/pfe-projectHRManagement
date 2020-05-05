import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListeEmployesComponent } from '../liste-employes/liste-employes.component';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { DepartemntService } from 'src/app/controller/service/departemnt.service';
import { Departement } from 'src/app/controller/model/departement.model';
import { GradeService } from 'src/app/controller/service/grade.service';
import { Grade } from 'src/app/controller/model/grade.model';
import { GradeEmploye } from 'src/app/controller/model/grade-employe.model';
import {DepFonction} from '../../../controller/model/dep-fonction.model';


@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',

  styleUrls: ['./ajouter-employe.component.css']
})
export class AjouterEmployeComponent implements OnInit {
  constructor(public employeService: PersonnelEmployesService, public dialogRef: MatDialogRef<AjouterEmployeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public departementService : DepartemntService,public gradeService : GradeService) { }


  ngOnInit(): void {
    // this.employeService.findAlll();
    this.departementService.findAll();
    this.gradeService.findAll();
  }
  get deps(): Array<Departement> {

    return this.departementService.deps;
  }
  get grades(): Array<Grade> {
    return this.gradeService.grades;
  }
  get employe(): Employe {

    return this.employeService.employe;
  }
  public save() {
    return this.employeService.save();
  }
show() : boolean{
  if(this.employe.situationFamiliale =='Marie'){
    return true;
  }
  else{
    return false;
  }
}
  onNoClick(): void {
    this.dialogRef.close();
  }
  get depFonctions(): Array<DepFonction> {
    return this.employeService.depFonctions;
  }

 public selectDepFonction(value: string) {
    console.log('ha howa 3yiiit 3lia');
    this.employeService.findFonctionByDepartement(value);

  }
}
