import { Component, OnInit } from '@angular/core';
import {PermanenceAdministrativeService} from '../../../controller/service/permanence-administrative.service';
import {PermanenceAdministrative} from '../../../controller/model/PermanenceAdministrative';
import {Employe} from '../../../controller/model/employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Departement} from '../../../controller/model/departement.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-permanence-liste',
  templateUrl: './permanence-liste.component.html',
  styleUrls: ['./permanence-liste.component.css']
})
export class PermanenceListeComponent implements OnInit {

  constructor(private pemanenceAdministrative : PermanenceAdministrativeService,
              private employeService: PersonnelEmployesService,
              private toast: ToastrService) { }
  cols: any[];

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID-Permanence' },
      { field: 'periode', header: 'Période' },
      { field: 'recuperation', header: 'Récuperation' },
      { field: 'periodeDeRecuperation', header: 'Période de Récuperation' },
      { field: 'date', header: 'Date de permanence' },
    ];
    this.employeService.findAll();
    this.pemanenceAdministrative.findAllPermanenceByannee(new Date().getFullYear());
    this.titre = "liste des permanences de année"+ new Date().getFullYear();
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  public listeVide():boolean{
    return this.permanences.length <1 ? true:false;
  }
  titre: string;
  fullname: string;
  diponible: boolean;

  chercher(){
    this.diponible = false;
    this.employes.forEach(employe=>{
      if(employe.doti === this.permanenceAdministrative1.employe.doti){
        this.diponible= true;
        this.fullname = employe.firstName +" "+ employe.lastName;
      }
    });
    if(this.diponible === false){
      this.toast.error(`le Numéro administrative de employe est incorrect`, 'merci de saisir Un Numéro administrative correct', {
        timeOut: 9500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      });
      document.getElementById('NumeroAdministrativePermanence').style.color='red';
    }else{
      this.titre= 'listes des Permanences de employe :' + this.fullname;
      document.getElementById('NumeroAdministrativePermanence').style.color='green';
      this.pemanenceAdministrative.findAllPermanenceByanneeAndDoti(this.permanenceAdministrative1.periode, this.permanenceAdministrative1.employe.doti);
    }
  }
  getpermanenceByDoti(doti: string){
    if(doti == null){
      this.pemanenceAdministrative.findAll();
    } else {
      this.pemanenceAdministrative.findAllPermanenceByDoti(doti);
    }
  }
  getPermanenceByAnnee(annee: number){
    this.pemanenceAdministrative.findAllPermanenceByannee(annee);
  }
  get permanences(): Array<PermanenceAdministrative> {
    return this.pemanenceAdministrative.pemanenceListe;
  }
  get permanenceAdministrative1(): PermanenceAdministrative {
    return this.pemanenceAdministrative.permanenceAdministrative1;
  }
}
