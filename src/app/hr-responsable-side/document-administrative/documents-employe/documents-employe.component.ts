import { Component, OnInit } from '@angular/core';
import {DocumentServiceService} from '../../../controller/service/document-service.service';
import {DemaneDeDocument} from '../../../controller/model/demane-de-document.model';
import {CongeEmploye} from '../../../controller/model/conge-employe.model';
import {Employe} from '../../../controller/model/employe.model';

@Component({
  selector: 'app-documents-employe',
  templateUrl: './documents-employe.component.html',
  styleUrls: ['./documents-employe.component.css']
})
export class DocumentsEmployeComponent implements OnInit {

  constructor(private documentService: DocumentServiceService) {
  }
  get documents(): Array<DemaneDeDocument> {
    return this.documentService.documents;
  }
  public tabindex;
  public demo1TabIndex = 0;

  ngOnInit() {
    this.documentService.findAllDemandeNonTraite();
  }
  public  deleteByReference(demande: DemaneDeDocument) {
    this.documentService.deleteByReference(demande);
  }
  public editerUneDemande(demande: DemaneDeDocument) {
    this.demo1BtnClick(2);
    this.documentService.editeUneDemande(demande);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  public listeVide(): boolean {
    return this.documents.length < 1 ? true : false;
  }
  public imprimer(demande: DemaneDeDocument) {
    if (demande.typeDeDocument.libelle === 'attestation de salaire') {
      this.documentService.imprimerAttestationDeSalaire(demande);
    } else if(demande.typeDeDocument.libelle === 'attestation de travail'){
      this.documentService.imprimerAttestationDeTravail(demande);
    }
  }
}
