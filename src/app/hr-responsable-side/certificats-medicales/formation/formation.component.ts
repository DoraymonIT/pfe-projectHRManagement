import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Employe} from '../../../controller/model/employe.model';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {Fonction} from '../../../controller/model/fonction.model';
import {Formation} from '../../../controller/model/formation.model';
import {FormationServiceService} from '../../../controller/service/formation-service.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
chercher: boolean;
  constructor(private employeService: PersonnelEmployesService,
              private formationService: FormationServiceService) { }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
    get employe(): Employe {
    return this.employeService.employeFormation;
  }
  get formations(): Array<Formation> {
    return this.formationService.formations;
  }
  public tabindex;
  public demo1TabIndex = 0;

  ngOnInit(): void {
    this.chercher = true;
  }
  public afficher(){
    // tslint:disable-next-line:triple-equals
    if(this.chercher == true){
      document.getElementById('checherFormation').style.display = 'none';
      this.chercher = false;
    } else {
      document.getElementById('checherFormation').style.display = 'inline';
    }
  }
  public listeVide(): boolean {
    return this.formations.length < 1 ? true : false;
  }
  public getFormationsByDoti() {
    document.getElementById('tableFormation').style.display = 'inline';
    document.getElementById('checherFormation').style.display = 'none';
    this.formationService.findallFourmationsByDoti(this.employe.doti);
  }
public editerFormation(formation: Formation) {
    this.demo1BtnClick(2);
    this.formationService.editercetteFormation(formation);
}
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
public imprimerLesFormations(value: Array<Formation>) {
    this.formationService.imprimerLesFormations(value);
}
}
