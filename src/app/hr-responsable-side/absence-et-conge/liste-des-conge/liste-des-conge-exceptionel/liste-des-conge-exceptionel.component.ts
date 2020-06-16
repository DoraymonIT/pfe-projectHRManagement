import { Component, OnInit } from '@angular/core';
import {Employe} from '../../../../controller/model/employe.model';
import {Departement} from '../../../../controller/model/departement.model';
import {GradeEmploye} from '../../../../controller/model/grade-employe.model';
import {Grade} from '../../../../controller/model/grade.model';
import {PersonnelEmployesService} from '../../../../controller/service/personnel-employes.service';
import {Fonction} from '../../../../controller/model/fonction.model';

@Component({
  selector: 'app-liste-des-conge-exceptionel',
  templateUrl: './liste-des-conge-exceptionel.component.html',
  styleUrls: ['./liste-des-conge-exceptionel.component.css']
})
export class ListeDesCongeExceptionelComponent implements OnInit {
  constructor(private employeService: PersonnelEmployesService) { }

  ngOnInit(): void {
    this.employeService.trouveremployeAyantEpuiselesoldeRestantes();
  //  this.nombre = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
  }
  get employesConge(): Array<Employe> {
    return this.employeService.employesConge;
  }
  trouveremployeBySoldeRestante(value: number) {
    this.employeService.trouveremployeBysoldeRestantes(value);
  }
  get employe(): Employe {
    return this.employeService.employe;
  }
  public ExporterListeEmployeAyantUnSoldeCongePDF(employes: Array<Employe>){
    this.employeService.listeDesEmployeAvecSoldeDonneePdf(employes);
  }
public  imprimerListeEmployeAyantUnSoldeCongeEXCEL(employes: Array<Employe>){
    this.employeService.listeDesEmployeAvecSoldeCongéDonneeExcel(employes);
}
  public listeVide(): boolean {
    return this.employesConge.length < 1 ? true : false;
  }
}
