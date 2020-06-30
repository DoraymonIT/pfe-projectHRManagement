import { Component, OnInit } from '@angular/core';
import {DocumentServiceService} from '../../../controller/service/document-service.service';
import {DemaneDeDocument} from '../../../controller/model/demane-de-document.model';
import {CongeEmploye} from '../../../controller/model/conge-employe.model';
import {Employe} from '../../../controller/model/employe.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-documents-employe',
  templateUrl: './documents-employe.component.html',
  styleUrls: ['./documents-employe.component.css']
})
export class DocumentsEmployeComponent implements OnInit {

  constructor(private documentService: DocumentServiceService,
              private formBuilder: FormBuilder) {
  }
  get documents(): Array<DemaneDeDocument> {
    return this.documentService.documents;
  }
  get documentsNonSigne(): Array<DemaneDeDocument> {
    return this.documentService.documentNonSigne;
  }
  public tabindex;
  public demo1TabIndex = 0;

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.documentService.findAllDemandeNonTraite();
    this.documentService.findAllDemandeNonSigne();
  }
  public  deleteByReference(demande: DemaneDeDocument) {
    this.documentService.deleteByReference(demande);
  }
  public editerUneDemande(demande: DemaneDeDocument) {
    this.demo1BtnClick(3);
    this.documentService.editeUneDemande(demande);
  }
  public demo1BtnClick(value: number) {
    this.demo1TabIndex = value ;
  }
  public listeVide(): boolean {
    return this.documents.length < 1 ? true : false;
  }
  public listeVide1(): boolean {
    return this.documentsNonSigne.length < 1 ? true : false;
  }
  public imprimer(demande: DemaneDeDocument) {
    if (demande.typeDeDocument.libelle === 'attestation de salaire') {
      this.documentService.imprimerAttestationDeSalaire(demande);
    } else if(demande.typeDeDocument.libelle === 'attestation de travail'){
      this.documentService.imprimerAttestationDeTravail(demande);
    }
  }
  selectedFile: File;
  uploadForm: FormGroup;
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    this.uploadForm.get('profile').setValue(this.selectedFile);

  }
  onUpload(demande: DemaneDeDocument) {
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    this.documentService.sendDocument(demande.id,demande.employe.email, "copie scanne de " + demande.typeDeDocument.libelle,"bonjour monsieur "+ demande.employe.firstName+ " "+ demande.employe.lastName + " voila une copie scanne de votre document "+ demande.typeDeDocument.libelle, formData);
  }
  }
