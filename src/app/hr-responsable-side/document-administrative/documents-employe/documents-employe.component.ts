import { Component, OnInit } from '@angular/core';
import {DocumentServiceService} from '../../../controller/service/document-service.service';
import {DemaneDeDocument} from '../../../controller/model/demane-de-document.model';
import {CongeEmploye} from '../../../controller/model/conge-employe.model';

@Component({
  selector: 'app-documents-employe',
  templateUrl: './documents-employe.component.html',
  styleUrls: ['./documents-employe.component.css']
})
export class DocumentsEmployeComponent implements OnInit {

  constructor(private documentService: DocumentServiceService) {
  }

  ngOnInit() {
    this.documentService.findAllDemandeNonTraite();
  }
  get documents(): Array<DemaneDeDocument> {
    return this.documentService.documents;
  }
  public  deleteByReference(demande: DemaneDeDocument){
    this.documentService.deleteByReference(demande);
  }
  public editerUneDemande(demande: DemaneDeDocument){
    //console.log(employe);
    this.demo1BtnClick(2);
    this.documentService.editeUneDemande(demande);
  }
  public tabindex;
  public demo1TabIndex = 0;
  public demo1BtnClick(value:number) {
    this.demo1TabIndex = value ;
  }
}
