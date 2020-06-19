import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {Employe} from '../../../controller/model/employe.model';
import {PunitionService} from '../../../controller/service/punition.service';
import {PunitionEmploye} from '../../../controller/model/punition-employe.model';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AjouterPrixComponent} from '../prix/ajouter-prix/ajouter-prix.component';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {AjouterPunitionComponent} from './ajouter-punition/ajouter-punition.component';

@Component({
  selector: 'app-punition',
  templateUrl: './punition.component.html',
  styleUrls: ['./punition.component.css']
})
export class PunitionComponent implements OnInit {
  public tabindex;
  public demo1TabIndex = 0;
  chercher: boolean;
  constructor(private punitionService: PunitionService,
              private employeService: PersonnelEmployesService,
              private toast: ToastrService,
              private dialog: MatDialog) { }
  ngOnInit(): void {
    this.chercher = true;
  }
  get punitions(): Array<PunitionEmploye> {
    return this.punitionService.punitions;
  }
  titrePunition: string;
  fullnamePunition: string;
  diponiblePunition: boolean;
  public getPunitionnByDoti() {
      this.diponiblePunition = false;
      this.employes.forEach(employe=>{
        if(employe.doti === this.employe.doti){
          this.diponiblePunition= true;
          this.fullnamePunition = employe.firstName +" "+ employe.lastName;
        }
      });
      if(this.diponiblePunition === false){
        this.toast.error(`le Numéro administrative de employe est incorrect`, 'merci de saisir Un Numéro administrative correct', {
          timeOut: 9500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-full-width'
        });
        document.getElementById('NumeroAdministrativePunition').style.color='red';
      }else{
        document.getElementById('tablePunition').style.display = 'inline';
        this.punitionService.findallPunitionByDoti(this.employe.doti);
        this.titrePunition = "liste des punitions de employe : "+ this.fullnamePunition;
        document.getElementById('NumeroAdministrativePunition').style.color='green';
      }
    }
  public imprimerLesPunitionsEnEXCEL(value: Array<PunitionEmploye>){
    this.punitionService.listeDesPunitionsExcel(value);
  }
  public getDernieroutoutPunitions(){
    if(this.employe.pays == 'dernierPeriode'){
      this.punitionService.findDernierPunitionEmploye(this.employe.doti);
    } else if(this.employe.pays == 'all'){
      this.punitionService.findallPunitionByDoti(this.employe.doti);
    }
  }
  public imprimerLesPunitions(value: Array<PunitionEmploye>) {
    this.punitionService.imprimerLesPunitions(value);
  }
  public editerUnePunition(punition: PunitionEmploye) {
    this.demo1BtnClick(2);
    this.punitionService.editerCettePuition(punition);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }

  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  get employe(): Employe {
    return this.employeService.employePunition;
  }
  public listeVide(): boolean {
    return this.punitions.length < 1 ? true : false;
  }
  public afficher() {
    // tslint:disable-next-line:triple-equals
    if(this.chercher == true){
      document.getElementById('checherPunition').style.display = 'none';
      this.chercher = false;
    } else {
      document.getElementById('checherPunition').style.display = 'inline';
    }
  }
  ajouterPunition() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouterPunitionComponent,
      dialogConfig);
  }
  public modifiePunition(punition: PunitionEmploye){
    const dialogConfig = new MatDialogConfig();
    this.punitionService.editerCettePuition(punition);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    this.dialog.open(AjouterPunitionComponent,
      dialogConfig);
  }

}
