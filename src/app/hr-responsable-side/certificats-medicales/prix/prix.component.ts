import { Component, OnInit } from '@angular/core';
import {PrixService} from '../../../controller/service/prix.service';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {Prix} from '../../../controller/model/prix.model';
import {Employe} from '../../../controller/model/employe.model';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AjouterFormationComponent} from '../formation/ajouter-formation/ajouter-formation.component';
import {Formation} from '../../../controller/model/formation.model';
import {AjouterPrixComponent} from './ajouter-prix/ajouter-prix.component';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  public tabindex;
  public demo1TabIndex = 0;
chercher: boolean;
  constructor(private prixService: PrixService,
              private employeService: PersonnelEmployesService,
              private toast: ToastrService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.chercher = true;
  }
  titrePrix: string;
  fullnamePrix: string;
  diponiblePrix: boolean;
  public getPrixxByDoti() {
    this.diponiblePrix = false;
    this.employes.forEach(employe=>{
      if(employe.doti === this.employe.doti){
        this.diponiblePrix= true;
        this.fullnamePrix = employe.firstName +" "+ employe.lastName;
      }
    });
    if(this.diponiblePrix === false){
      this.toast.error(`le Numéro administrative de employe est incorrect`, 'merci de saisir Un Numéro administrative correct', {
        timeOut: 9500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-full-width'
      });
      document.getElementById('NumeroAdministrativePrix').style.color='red';
    }else{
      document.getElementById('tablePrix').style.display = 'inline';
      this.prixService.findallPrixByDoti(this.employe.doti);
      this.titrePrix = "liste des prix de employe : "+ this.fullnamePrix;
      document.getElementById('NumeroAdministrativePrix').style.color='green';
    }
  }
  public getDernieroutoutPrix(){
    if(this.employe.pays == 'dernierPeriode'){
      this.prixService.findDernierPrixeEmploye(this.employe.doti);
    } else if(this.employe.pays == 'all'){
      this.prixService.findallPrixByDoti(this.employe.doti);
    }
  }
  public editerUnPrix(prix: PrixEmploye){
    this.demo1BtnClick(2);
    this.prixService.editerCePrixx(prix);
  }
  public ExporterLesPrixENEXCEL(value: Array<PrixEmploye>){
    this.prixService.listeDesPrixExcel(value);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
public imprimerLesPrix(value: Array<PrixEmploye>) {
    this.prixService.imprimerLesPrix(value);
}
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  get employe(): Employe {
    return this.employeService.employePrix;
  }
  get prixs(): Array<PrixEmploye> {
    return this.prixService.prixs;
  }
  public listeVide(): boolean {
    return this.prixs.length < 1 ? true : false;
  }
  public afficher(){
    // tslint:disable-next-line:triple-equals
    if(this.chercher == true){
      document.getElementById('checherPrix').style.display = 'none';
      this.chercher = false;
    } else {
      document.getElementById('checherPrix').style.display = 'inline';
    }
  }
  ajouterPrix() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouterPrixComponent,
      dialogConfig);
  }
  public modifiePrix(prix: PrixEmploye){
    const dialogConfig = new MatDialogConfig();
    this.prixService.editerCePrixx(prix);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouterPrixComponent,
      dialogConfig);
  }
}
