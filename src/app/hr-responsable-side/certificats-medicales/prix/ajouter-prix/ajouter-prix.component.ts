import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';
import { PrixService } from 'src/app/controller/service/prix.service';
import { PrixEmploye } from 'src/app/controller/model/prix-employe.model';
import { PrixSmallService } from 'src/app/controller/service/prix-small.service';
import { Prix } from 'src/app/controller/model/prix.model';


@Component({
  selector: 'app-ajouter-prix',
  templateUrl: './ajouter-prix.component.html',
  styleUrls: ['./ajouter-prix.component.css']
})
export class AjouterPrixComponent implements OnInit {

  constructor( private employeService: PersonnelEmployesService,private prixService : PrixService,
    private prixSmall : PrixSmallService ) { }

  ngOnInit() {
    this.employeService.findAll();
    this.prixSmall.findAll();

  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get prixEmploye(): PrixEmploye {
    return this.prixService.prixEmploye;
  }
  public save(){

    return this.prixService.save();
  }
  get ps(): Array<Prix> {
    return this.prixSmall.ps;
  }
}
