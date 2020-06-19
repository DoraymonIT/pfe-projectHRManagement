import { Component, OnInit } from '@angular/core';
import {RapportDeEvaluation} from '../../../controller/model/rapport-de-evaluation.model';
import {Employe} from '../../../controller/model/employe.model';
import {Formation} from '../../../controller/model/formation.model';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {Prix} from '../../../controller/model/prix.model';
import {PunitionEmploye} from '../../../controller/model/punition-employe.model';
import {Punition} from '../../../controller/model/punition.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {AvancementServiceService} from '../../../controller/service/avancement-service.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {GradeService} from '../../../controller/service/grade.service';
import {FormationServiceService} from '../../../controller/service/formation-service.service';
import {PrixService} from '../../../controller/service/prix.service';
import {PrixSmallService} from '../../../controller/service/prix-small.service';
import {PunitionSmallService} from '../../../controller/service/punition-small.service';
import {PunitionService} from '../../../controller/service/punition.service';
import {NoteServiceService} from '../../../controller/service/note-service.service';
import {ToastrService} from 'ngx-toastr';
import {Departement} from '../../../controller/model/departement.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogDepComponent} from '../../architecture-de-fstg/departement/dialog-dep/dialog-dep.component';
import {AjouterFormationComponent} from '../../certificats-medicales/formation/ajouter-formation/ajouter-formation.component';

@Component({
  selector: 'app-ajoute-rapport',
  templateUrl: './ajoute-rapport.component.html',
  styleUrls: ['./ajoute-rapport.component.css']
})
export class AjouteRapportComponent implements OnInit {
  chercher: boolean;
  constructor(private employeService: PersonnelEmployesService,
              private formationService: FormationServiceService,
              private dialog: MatDialog,
              private toast: ToastrService) { }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get employe(): Employe {
    return this.employeService.employeFormation;
  }
  get formations(): Array<Formation> {
    return this.formationService.formations;
  }
  public getDernieroutoutFormation(){
    if(this.employe.pays == 'dernierPeriode'){
      this.formationService.findDernierFourmationsDeEmploye(this.employe.doti);
    } else if(this.employe.pays == 'all'){
      this.formationService.findallFourmationsByDoti(this.employe.doti);
    }
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
  titreFormation: string;
  fullnameFormation: string;
  diponibleFformation: boolean;
  public getFormationsByDoti() {
    this.diponibleFformation = false;
    this.employes.forEach(employe=>{
      if(employe.doti === this.employe.doti){
        this.diponibleFformation= true;
        this.fullnameFormation = employe.firstName +" "+ employe.lastName;
      }
    });
    if(this.diponibleFformation === false){
      this.toast.error(`le Numéro administrative de employe est incorrect`, 'merci de saisir Un Numéro administrative correct', {
        timeOut: 9500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      });
      document.getElementById('NumeroAdministrativeFormation').style.color='red';
    }else{
      document.getElementById('tableFormation').style.display = 'inline';
      this.formationService.findallFourmationsByDoti(this.employe.doti);
      this.titreFormation = "liste des formations de employe : "+ this.fullnameFormation;
      document.getElementById('NumeroAdministrativeFormation').style.color='green';
    }
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
  public ExporterLesFormationsENEXCEL(value:Array<Formation>){
    this.formationService.listeDesFormationsExcels(value);
  }
  ajouterFormation() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouterFormationComponent,
      dialogConfig);
  }
  public modifieFormation(formation: Formation){
    const dialogConfig = new MatDialogConfig();
    this.formationService.editercetteFormation(formation);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouterFormationComponent,
      dialogConfig);
  }
}
