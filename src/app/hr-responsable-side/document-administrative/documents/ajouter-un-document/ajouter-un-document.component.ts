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
  }
  get typeDocument(): TypeDocument {

    return this.documentService.typeDocument;
  }
  public save() {
    return this.documentService.saveTypeDocument();
  }
}
