import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {DemaneDeDocument} from '../model/demane-de-document.model';
import {TypeDocument} from '../model/type-document.model';
import {Employe} from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {
private _documents: Array<DemaneDeDocument>;
private _typeDocuments: Array<TypeDocument>;
private _document: DemaneDeDocument;
private _typeDocument: TypeDocument;
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  public saveDocumentEmloye() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/save', this.document).subscribe(
      data => {
        console.log(data);
        this.toast.success(`${this.document.id} add demande document employe to the database.`, ' demande document employe Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.documents.push(this.cloneDocumentEmploye(this.document));
        this.document = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public saveTypeDocument() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/TypeDocument/save', this.typeDocument).subscribe(
      data => {
        console.log(data);
        this.toast.success(`${this.typeDocument.libelle} add  document  to the database.`, '  document  Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.typeDocuments.push(this.cloneDocument(this.typeDocument));
        this.typeDocument = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  cloneDocument(demande: TypeDocument): TypeDocument {
    const myClone = new TypeDocument()  ;
    myClone.id = demande.id;
    myClone.libelle = demande.libelle;
    return myClone;
  }

  cloneDocumentEmploye(demande: DemaneDeDocument): DemaneDeDocument {
    const myClone = new DemaneDeDocument()  ;
    myClone.employe = demande.employe;
    myClone.etat = demande.etat;
    myClone.dateDemande = demande.dateDemande;
    myClone.maniereDeRetrait = demande.maniereDeRetrait;
    myClone.id = demande.id;
    return myClone;
  }
  public findAll() {
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findAll').subscribe(
      data => {
        //console.log('ha data dial permanence' + data);
        this.documents = data ;
        //console.log('ha data dial permanence2' + this._perm.length);
       // this._perm.forEach(per => {
          //   console.log('ha howa start date tani:' + per.date);
          // console.log('ha howa start fullname tani:' + per.employe.fullName);
        //});
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllTypeDocument() {
    this.http.get<Array<TypeDocument>>('http://localhost:8080/gestionDesEmployee-Api/TypeDocument/findAll').subscribe(
      data => {
        //console.log('ha data dial permanence' + data);
        this._typeDocuments = data ;
        //console.log('ha data dial permanence2' + this._perm.length);
        // this._perm.forEach(per => {
        //   console.log('ha howa start date tani:' + per.date);
        // console.log('ha howa start fullname tani:' + per.employe.fullName);
        //});
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllDemandeNonTraite() {
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findDemandeNonTraite').subscribe(
      data => {
        //console.log('ha data dial permanence' + data);
        this.documents = data ;
        //console.log('ha data dial permanence2' + this._perm.length);
        // this._perm.forEach(per => {
        //   console.log('ha howa start date tani:' + per.date);
        // console.log('ha howa start fullname tani:' + per.employe.fullName);
        //});
      }, eror => {
        console.log('eroro', eror);
      });
  }
  get documents(): Array<DemaneDeDocument> {
  if(this._documents == null){
    this._documents = new Array<DemaneDeDocument>();
    this._documents.forEach(document =>{
      document.employe = new Employe();
      document.typeDeDocument = new TypeDocument();
    });
  }
  return this._documents;
  }
  public  deleteByReference(demande:DemaneDeDocument){
      this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/deleteById/id/' + demande.id).subscribe(
        data => {
          console.log('delete sucess' + data);
          this.findAll();
        });
    }
  public  deleteTypeDocumentByReference(demande:TypeDocument){
    this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/TypeDocument/deleteById/id/' + demande.id).subscribe(
      data => {
        console.log('delete sucess' + data);
        this.findAll();
      });
  }
  set documents(value: Array<DemaneDeDocument>) {
    this._documents = value;
  }
  public trouverDemandeParSonDoti(employe: Employe){
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findByEmployeDoti/doti/' + employe.doti).subscribe(
      data => {
        //console.log('ha data dial permanence' + data);
        this.documents = data ;
        //console.log('ha data dial permanence2' + this._perm.length);
        // this._perm.forEach(per => {
        //   console.log('ha howa start date tani:' + per.date);
        // console.log('ha howa start fullname tani:' + per.employe.fullName);
        //});
      }, eror => {
        console.log('eroro', eror);
      });
  }

  get document(): DemaneDeDocument {
    if (this._document == null){
      this._document = new DemaneDeDocument();
      this._document.employe = new Employe();
      this._document.typeDeDocument = new TypeDocument();
    }
    return this._document;
  }

  set document(value: DemaneDeDocument) {
    this._document = value;
  }
public editeUneDemande(demande: DemaneDeDocument){
    this.document = demande;
}
  get typeDocuments(): Array<TypeDocument> {
    if(this._typeDocuments == null){
      this._typeDocuments = new Array<TypeDocument>();
    }
    return this._typeDocuments;
  }
  public editUnTypeDocument(typededocument: TypeDocument){
    this.typeDocument = typededocument;
}
  set typeDocuments(value: Array<TypeDocument>) {
    this._typeDocuments = value;
  }

  get typeDocument(): TypeDocument {
    if(this._typeDocument == null){
      this._typeDocument = new TypeDocument();
    }
    return this._typeDocument;
  }

  set typeDocument(value: TypeDocument) {
    this._typeDocument = value;
  }
}
