import {Component, OnInit} from '@angular/core';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {Employe} from '../../controller/model/employe.model';
import {CongeEmploye} from '../../controller/model/conge-employe.model';
import {CongeService} from '../../controller/service/conge.service';


@Component({
  selector: 'app-absence-et-conge',

  templateUrl: './absence-et-conge.component.html',
  styleUrls: ['./absence-et-conge.component.css'],

})
export class AbsenceEtCongeComponent implements OnInit {

  cols: any[];
  constructor( private employeService: PersonnelEmployesService,
               private congeservice: CongeService) { }


  ngOnInit(): void {
    this.employeService.findAll();
    this.cols = [
      { field: 'cin', header: 'C I N' },
      { field: 'fullName', header: 'Nom Complet' },
      { field: 'email', header: 'G-mail' },
      { field: 'doti', header: 'DOTI' },
      { field: 'soldeRestantesCongéExceptionnel', header: 'solde Restantes Congé Exceptionnel' },
    ];
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public deleteByReference(conge: CongeEmploye) {
//    console.log("ha howa:"+ employe.fullName);
    this.congeservice.deleteByReference(conge);
  }
  public editerUnEmployer(conge: CongeEmploye){
    //console.log(employe);
    this.demo1BtnClick(2);
    this.congeservice.editerUnEmployer(conge);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }

  public listeVide():boolean{
//    console.log(this.employes.length);
    return this.employes.length <1 ? true:false;
  }
  get conges(): Array<CongeEmploye> {
    return this.congeservice.conges;
  }
  public trouverCongeParSonDoti(employe: Employe){
    this.congeservice.trouverCongéParSonDoti(employe.doti);
  }

}
