import {Component, OnInit} from '@angular/core';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {Employe} from '../../controller/model/employe.model';
import {CongeEmploye} from '../../controller/model/conge-employe.model';
import {CongeService} from '../../controller/service/conge.service';
import {TypeCongee} from '../../controller/model/type-congee.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ListeDesJoursFriesComponent } from './liste-des-jours-fries/liste-des-jours-fries.component';


@Component({
  selector: 'app-absence-et-conge',

  templateUrl: './absence-et-conge.component.html',
  styleUrls: ['./absence-et-conge.component.css'],

})
export class AbsenceEtCongeComponent implements OnInit {
  constructor( private employeService: PersonnelEmployesService,
               private congeservice: CongeService,
               private dialog: MatDialog) { }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get conges(): Array<CongeEmploye> {
    return this.congeservice.conges;
  }
  get typeConge(): Array<TypeCongee> {
    return this.congeservice.typeConge;
  }
  get filterrsult(): TypeCongee {
    return this.congeservice.filterrsult;
  }

  cols: any[];
  public tabindex;
  public demo1TabIndex = 0;


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
  public deleteByReference(conge: CongeEmploye) {
    this.congeservice.deleteByReference(conge);
  }
  public editerUnEmployer(conge: CongeEmploye) {
    this.demo1BtnClick(1);
    this.congeservice.editerUnEmployer(conge);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }

  public listeVide(): boolean {
    return this.employes.length < 1 ? true : false;
  }
  trouverCongeParSonDotiDialog(emp: Employe) {
    this.congeservice.trouverCongéParSonDoti(emp.doti);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '80%';
    this.dialog.open(ListeDesJoursFriesComponent,
      dialogConfig);
  }
}
