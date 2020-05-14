import { Component, OnInit } from '@angular/core';
import { DocumentServiceService } from 'src/app/controller/service/document-service.service';
import { TypeDocument } from 'src/app/controller/model/type-document.model';
import { DemaneDeDocument } from 'src/app/controller/model/demane-de-document.model';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';

@Component({
  selector: 'app-ajouter-un-documents-employe',
  templateUrl: './ajouter-un-documents-employe.component.html',
  styleUrls: ['./ajouter-un-documents-employe.component.css']
})
export class AjouterUnDocumentsEmployeComponent implements OnInit {

  constructor(private employeService: PersonnelEmployesService,private tds: DocumentServiceService) { }

  ngOnInit() {
    this.employeService.findAll();

  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get typeDocuments(): Array<TypeDocument> {
    return this.tds.typeDocuments;
  }

  get document(): DemaneDeDocument {
    return this.tds.document;
  }
  public save() {
    return this.tds.saveDocumentEmloye();
  }
}
