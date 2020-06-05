import { Component, OnInit, ViewChild } from '@angular/core';
import { DemaneDeDocument } from '../../../../controller/model/demane-de-document.model';
import { DocumentServiceService } from '../../../../controller/service/document-service.service';
import {TypeDocument} from '../../../../controller/model/type-document.model';

@Component({
  selector: 'app-liste-des-documents-employe',
  templateUrl: './liste-des-documents-employe.component.html',
  styleUrls: ['./liste-des-documents-employe.component.css']
})
export class ListeDesDocumentsEmployeComponent implements OnInit {
  constructor(private documentService: DocumentServiceService) {
  }
  ngOnInit() {
this.documentService.findAllTypeDocument();
  }
  get typeDocuments(): Array<TypeDocument> {
    return this.documentService.typeDocuments;
  }
  get fullname(): string {
    return this.documentService.fullname;
  }
  get typeDocument(): TypeDocument {
    return this.documentService.typeDocument;
  }
  public findAllDemandeByTypeDocument(){
    this.documentsByDoti.forEach(doc =>{
      this.typeDocument.titre = doc.employe.doti;
    })
    this.documentService.getByTypeDocument(this.typeDocument.libelle, this.typeDocument.titre);
  }
  get documentsByDoti(): Array<DemaneDeDocument> {
    return this.documentService.documentsByDoti;
  }

  public listeVide2(): boolean {
    return this.documentsByDoti.length < 1 ? true : false;
  }
  public imprimerListedemande(){
    this.documentService.imprimerLesListedemande();
  }
}
