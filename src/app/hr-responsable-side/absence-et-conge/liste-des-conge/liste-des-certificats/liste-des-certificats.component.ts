import { Component, OnInit } from '@angular/core';
import {CongeEmploye} from '../../../../controller/model/conge-employe.model';
import {TypeCongee} from '../../../../controller/model/type-congee.model';
import {Employe} from '../../../../controller/model/employe.model';
import {CongeService} from '../../../../controller/service/conge.service';

@Component({
  selector: 'app-liste-des-certificats',
  templateUrl: './liste-des-certificats.component.html',
  styleUrls: ['./liste-des-certificats.component.css']
})
export class ListeDesCertificatsComponent implements OnInit {

  constructor(private congeService: CongeService) { }

  ngOnInit(): void {
  }
  get congesCertificat(): Array<CongeEmploye> {
    return this.congeService.congesCertificat;
  }
  get congeEmploye(): CongeEmploye {
    return this.congeService.congeEmploye;
  }
  public getcongeCertificat(){
    if(this.congeEmploye.congee.libelle === 'longDuree'){
      this.congeService.findCongeCertificatLongDuree();
      document.getElementById('tableConge').style.display = 'inline';
    } else if (this.congeEmploye.congee.libelle === 'courtDuree') {
      this.congeService.findCongeCertificatCourtDuree();
      document.getElementById('tableConge').style.display = 'inline';
    } else {
      document.getElementById('tableConge').style.display = 'none';
    }
  }
  public listeVide(): boolean {
    return this.congesCertificat.length < 1 ? true : false;
  }
  public chercher() {
    if(this.congeEmploye.congee.libelle === 'longDuree'){
    this.congeEmploye.congee.libelle = 'certificat long duree';
    } else {
      this.congeEmploye.congee.libelle = 'certificat court duree';
    }
    this.congeService.findCongeBydateAndType(this.congeEmploye.dateDeDebut, this.congeEmploye.congee.libelle);
  }
}
