import { Component, OnInit, ViewChild } from '@angular/core';
import { DemaneDeDocument } from '../../../../controller/model/demane-de-document.model';
import { DocumentServiceService } from '../../../../controller/service/document-service.service';

@Component({
  selector: 'app-liste-des-documents-employe',
  templateUrl: './liste-des-documents-employe.component.html',
  styleUrls: ['./liste-des-documents-employe.component.css']
})
export class ListeDesDocumentsEmployeComponent implements OnInit {
  constructor(private documentService: DocumentServiceService) {
  }
  ngOnInit() {

  }
  get fullname(): string {
    return this.documentService.fullname;
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
