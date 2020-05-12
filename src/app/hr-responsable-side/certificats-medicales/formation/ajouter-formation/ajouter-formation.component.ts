import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { FormationServiceService } from 'src/app/controller/service/formation-service.service';
import { Formation } from 'src/app/controller/model/formation.model';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {

  constructor( private employeService: PersonnelEmployesService,private formationService : FormationServiceService) { }

  ngOnInit() {
    this.employeService.findAll();

  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get formationEmploye(): Formation {
    return this.formationService.formationEmploye;
  }
  public save(){
    return this.formationService.save();
  }
}
