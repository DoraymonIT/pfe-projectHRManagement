import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../controller/service/personnel-employes.service';
import {DocumentServiceService} from '../controller/service/document-service.service';
import {Employe} from '../controller/model/employe.model';
import {TypeDocument} from '../controller/model/type-document.model';
import {DemaneDeDocument} from '../controller/model/demane-de-document.model';

@Component({
  selector: 'app-formulaire-de-document-en-ligne',
  templateUrl: './formulaire-de-document-en-ligne.component.html',
  styleUrls: ['./formulaire-de-document-en-ligne.component.css']
})
export class FormulaireDeDocumentEnLigneComponent implements OnInit {

  constructor(private employeService: PersonnelEmployesService, private tds: DocumentServiceService) { }

  ngOnInit() {
    this.employeService.findAll();
    this.tds.ajoutedemandeDecumentTitre();
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
    console.log(this.document.copieEmail);
    if(this.document.id == null){
      return this.tds.saveDocumentEmloye();
    } else {
      return this.tds.updateDocumentEmloye;
    }
  }
  get ajouteDemandeDocument(): string {
    return this.tds.ajouteDemandeDocument;
  }

}
