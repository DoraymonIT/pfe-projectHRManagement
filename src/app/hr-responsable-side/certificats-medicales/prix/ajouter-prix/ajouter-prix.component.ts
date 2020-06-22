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
    this.prixService.ajoutePrixTitre();
  }
  get ajoutePrix(): string {
    return this.prixService.ajoutePrix;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get prixEmploye(): PrixEmploye {
    return this.prixService.prixEmploye;
  }
  public save(){
    if (this.prixEmploye.id == null){
      return this.prixService.save();
    } else {
    return this.prixService.update();
    }
  }
  get ps(): Array<Prix> {
    return this.prixSmall.ps;
  }
  get fullnamePrix(): string {
    return this.employeService.fullnamePrix;
  }
  public getEmployePrixdoti(doti: string){
    this.employeService.GetEmployerPrixByDoti(doti);
  }
public deletePrix(){
    this.prixService.deleteByReference(this.prixEmploye);
}
}
