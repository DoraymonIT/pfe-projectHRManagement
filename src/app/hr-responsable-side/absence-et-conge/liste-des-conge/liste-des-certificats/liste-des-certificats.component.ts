import { Component, OnInit } from '@angular/core';
import {CongeEmploye} from '../../../../controller/model/conge-employe.model';
import {TypeCongee} from '../../../../controller/model/type-congee.model';
import {Employe} from '../../../../controller/model/employe.model';
import {CongeService} from '../../../../controller/service/conge.service';
import {ToastrService} from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ListeDesJoursFriesComponent} from '../../liste-des-jours-fries/liste-des-jours-fries.component';
import {CalendrierDesCertificatsComponent} from '../calendrier-des-certificats/calendrier-des-certificats.component';

@Component({
  selector: 'app-liste-des-certificats',
  templateUrl: './liste-des-certificats.component.html',
  styleUrls: ['./liste-des-certificats.component.css']
})
export class ListeDesCertificatsComponent implements OnInit {

  constructor(private congeService: CongeService,
              private toast: ToastrService,
              private dialog: MatDialog) { }

  Titre: String;
  ngOnInit(): void {
    this.congeService.findallCertificatDansCetteAnnee();
    this.Titre = 'liste des  certificats depuis 1 septembre ' +((new Date().getMonth() > 9)? (this.getYear()) : (this.getYear() - 1));
  }
  public imprimeristeDesCertificatsPDF(){
    this.congeService.listeDesCertificatsPdf(this.congesCertificat);
  }
  public imprimeristeDesCertificatsEXCEL(){
    this.congeService.listeDesCertificatsExcel(this.congesCertificat);
  }
  getYear(): number{
    return new Date().getFullYear();
  }

  get congesCertificat(): Array<CongeEmploye> {
    return this.congeService.congesCertificat;
  }
  get congeEmploye(): CongeEmploye {
    return this.congeService.congeEmploye2;
  }
  public getcongeCertificat(){
    if(this.congeEmploye.congee.libelle === 'certificat long duree'){
      this.congeService.findCOngeByLibelle(this.congeEmploye.congee.libelle);
      this.Titre = 'la liste des toutes les certificats long durée';
    } else if (this.congeEmploye.congee.libelle === 'certificat court duree 3 mois') {
      this.congeService.findCOngeByLibelle(this.congeEmploye.congee.libelle);
      this.Titre = 'la liste des toutes les certificats moins de 3 mois';
    } else if (this.congeEmploye.congee.libelle === 'certificat court duree 6 mois') {
      this.congeService.findCOngeByLibelle(this.congeEmploye.congee.libelle);
      this.Titre = 'la liste des toutes les certificats moins de 6 mois';

    }
  }
  public listeVide(): boolean {
    return this.congesCertificat.length < 1 ? true : false;
  }
  public chercher() {
    this.Titre = 'la liste des' +this.congeEmploye.congee.libelle +'  ayant effectuer dans la periode entre : '+ this.congeEmploye.dateDeDebut + ' et '+ this.congeEmploye.dateDeFin ;
    this.congeService.findCongeBydateAndType(this.congeEmploye.dateDeDebut,this.congeEmploye.dateDeFin, this.congeEmploye.congee.libelle);
  }
  public getPeriodeMois(conge: CongeEmploye){
      this.congeService.trouverCongéEmployeSalaireParSonId(conge.id);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '55%';
      dialogConfig.height = '60%';
      this.dialog.open(CalendrierDesCertificatsComponent,
        dialogConfig);
    }
}
