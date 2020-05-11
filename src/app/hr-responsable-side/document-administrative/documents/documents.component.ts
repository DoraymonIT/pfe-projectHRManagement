import { Component, OnInit } from '@angular/core';
import {DemaneDeDocument} from '../../../controller/model/demane-de-document.model';
import {TypeDocument} from '../../../controller/model/type-document.model';
import {DocumentServiceService} from '../../../controller/service/document-service.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(private documentService: DocumentServiceService) {
  }

  ngOnInit() {
    this.documentService.findAllTypeDocument();
  }
  get typeDocuments(): Array<TypeDocument> {
    return this.documentService.typeDocuments;
  }
  public editUnTypeDeDocument(typededocument: TypeDocument){
    this.demo1BtnClick(1);
    this.documentService.editUnTypeDocument(typededocument);
  }
  public  deleteByReference(demande: TypeDocument){
    this.documentService.deleteTypeDocumentByReference(demande);
  }

  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }
}
