import {Component, OnInit, ViewChild} from '@angular/core';
import {DemaneDeDocument} from '../../../../controller/model/demane-de-document.model';
import {DocumentServiceService} from '../../../../controller/service/document-service.service';

@Component({
  selector: 'app-liste-des-documents-employe',
  templateUrl: './liste-des-documents-employe.component.html',
  styleUrls: ['./liste-des-documents-employe.component.css']
})
export class ListeDesDocumentsEmployeComponent implements OnInit {
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
}
