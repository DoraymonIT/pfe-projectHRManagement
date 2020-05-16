import { Component, OnInit } from '@angular/core';
import { DocumentServiceService } from 'src/app/controller/service/document-service.service';
import { TypeDocument } from 'src/app/controller/model/type-document.model';

@Component({
  selector: 'app-ajouter-un-document',
  templateUrl: './ajouter-un-document.component.html',
  styleUrls: ['./ajouter-un-document.component.css']
})
export class AjouterUnDocumentComponent implements OnInit {

  constructor(private documentService: DocumentServiceService) { }

  ngOnInit(): void {
    this.documentService.ajoutedocumentTitre();
  }
  get typeDocument(): TypeDocument {

    return this.documentService.typeDocument;
  }
  public save() {
    this.typeDocument.body = this.typeDocument.body.replace('<p>', '');
    this.typeDocument.body = this.typeDocument.body.replace('</p>', '');
    return this.documentService.saveTypeDocument();
  }
   get ajoutedocument(): string {
    return this.documentService.ajoutedocument;
  }
}
