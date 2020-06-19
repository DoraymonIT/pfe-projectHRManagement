import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {DemaneDeDocument} from '../model/demane-de-document.model';
import {TypeDocument} from '../model/type-document.model';
import {Employe} from '../model/employe.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {
  // tslint:disable-next-line:variable-name
  private _documents: Array<DemaneDeDocument>;
  // tslint:disable-next-line:variable-name
  private _documentNonSigne: Array<DemaneDeDocument>;
// tslint:disable-next-line:variable-name
private _documentsByDoti: Array<DemaneDeDocument>;
// tslint:disable-next-line:variable-name
private _typeDocuments: Array<TypeDocument>;
// tslint:disable-next-line:variable-name
private _document: DemaneDeDocument;
// tslint:disable-next-line:variable-name
private _typeDocument: TypeDocument;
// tslint:disable-next-line:variable-name
  private _fullname: string;
  // tslint:disable-next-line:variable-name
  private _ajouteDemandeDocument: string;
  // tslint:disable-next-line:variable-name
  private _ajoutedocument: string;
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
    public imprimerLesListedemande() {
      // tslint:disable-next-line:max-line-length
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/listeDesDemandePdf', this.documentsByDoti).subscribe(
        data => {
          this.toast.success(`Document est bien preparé`, ' Voir votre fichier de telechargement', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
         }, eror => {
          console.log('eroro', eror);
        });
              }
 // postFile(fileToUpload: File): Observable<boolean> {
   // const endpoint = 'your-destination-url';
    //const formData: FormData = new FormData();
    //formData.append('fileKey', fileToUpload, fileToUpload.name);
    //return this.httpClient
      //.post(endpoint, formData, { headers: yourHeadersConfig })
      //.map(() => { return true; })
      //.catch((e) => this.handleError(e));
 // }
  public sendDocument(email: string, subject: string, content: string, file: FormData) {

    // tslint:disable-next-line:max-line-length
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/sendmail/email/' + email + '/subject/' + subject +'/content/' +content , file).subscribe(
      data => {
        this.toast.success(` Document est bien envoyé avec succes`, ' Document envoyé', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public saveDocumentEmloye() {
    // tslint:disable-next-line:max-line-length
    if ((this.document.employe == null || this.document.typeDeDocument == null || this.document.copieEmail == null ) || (this.document.employe == null && this.document.typeDeDocument == null && this.document.copieEmail == null )) {
      this.toast.error(`Remplir toutes les champ`, 'Il y a un champ vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteDemandeDocument = 'IL y a un champ est vide, Veuillez verifier';
      document.getElementById('span').style.color = 'red';
    } else {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/save', this.document).subscribe(
      data => {
        this.toast.success(`Le demande de ${this.document.employe.lastName} a ete bien enregistre`, ' La demande a ete enregistre avec succes', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteDemandeDocument = 'La demande a ete enregistre avec succes';
        document.getElementById('span').style.color = 'green';
        this.documents.push(this.cloneDocumentEmploye(this.document));
        this.document = null;
        this.findAllDemandeNonTraite();
      }, eror => {
        console.log('eroro', eror);
      });
    }
  }
  public updateDocumentEmloye() {
    // tslint:disable-next-line:max-line-length
    if ((this.document.employe == null || this.document.typeDeDocument == null || this.document.copieEmail == null ) || (this.document.employe == null && this.document.typeDeDocument == null && this.document.copieEmail == null )) {
      this.toast.error(`Remplir toutes les champ`, 'champ vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteDemandeDocument = 'champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/update', this.document).subscribe(
        data => {
          this.toast.success(`${this.document.id} update demande document employe to the database.`, ' demande document employe updated', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteDemandeDocument = 'demande est bien modifier';
          document.getElementById('span').style.color = 'green';
          this.documents.push(this.cloneDocumentEmploye(this.document));
          this.findAllDemandeNonTraite();
          this.document = null;
        }, eror => {
          console.log('eroro', eror);
        });
    }
  }
  public imprimerAttestationDeSalaire(demande: DemaneDeDocument) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/attestationDeSalaire', demande).subscribe(
      data => {
        this.toast.success(`L attestation a ete traiter avec succes`, ' Voir votre fichier de telechargement', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.findAllDemandeNonTraite();
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public imprimerAttestationDeTravail(demande: DemaneDeDocument) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/attestationDeTravail', demande).subscribe(
      data => {
        this.toast.success(`L attestation a ete traiter avec succes`, ' Voir votre fichier de telechargement', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.findAllDemandeNonTraite();
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesDemandesExcel(demandes: Array<DemaneDeDocument>) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/listeDesDemandesExcel', demandes).subscribe(
      data => {
        this.toast.success(`Le document est bien exporter en excel`, ' Voir votre fichier de telechargement', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }
public ajoutedemandeDecumentTitre() {
    this.ajouteDemandeDocument = 'Formulaire pour ajouter une demande de document d une employe';
}
  public ajoutedocumentTitre() {
    this.ajoutedocument = ' Formulaire pour cree un document ';
  }
  public saveTypeDocument() {
    if ((this.typeDocument.titre == null || this.typeDocument.body == null) || (this.typeDocument.titre == null && this.typeDocument.body == null)) {
      // tslint:disable-next-line:max-line-length
        this.toast.error(`remplir toutes les champ`, 'champ vide', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteDemandeDocument = 'champ est vide';
        document.getElementById('span').style.color = 'red';
      } else {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/TypeDocument/creeDocument/titre/' + this.typeDocument.titre + '/body/' + this.typeDocument.body.toString()).subscribe(
      data => {
        if( data === 1){
        this.toast.success(`$ cree document to pdf.`, '  document  crée', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteDemandeDocument = 'document cree';
        document.getElementById('span').style.color = 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
    }
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
    myClone.copieEmail = demande.copieEmail;
    myClone.id = demande.id;
    return myClone;
  }
  public findAll() {
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findAll').subscribe(
      data => {
        this.documents = data ;
       }, eror => {
        console.log('eroro', eror);
      });
  }
  public getByTypeDocument(libelle: string, doti: string) {
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findByTypeDeDocumentLibelleAndEmployeDoti/libelle/' + libelle + '/doti/' + doti).subscribe(
      data => {
        this.documentsByDoti = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public findAllTypeDocument() {
    this.http.get<Array<TypeDocument>>('http://localhost:8080/gestionDesEmployee-Api/TypeDocument/findAll').subscribe(
      data => {
        this.typeDocuments = data ;
        }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllDemandeNonTraite() {
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findDemandeNonTraite').subscribe(
      data => {
        this.documents = data ;
       }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllDemandeNonSigne() {
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findDemandeNonSigne').subscribe(
      data => {
        this.documentNonSigne = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  get documents(): Array<DemaneDeDocument> {
  if (this._documents == null) {
    this._documents = new Array<DemaneDeDocument>();
    this._documents.forEach(document => {
      document.employe = new Employe();
      document.typeDeDocument = new TypeDocument();
    });
  }
  return this._documents;
  }
  get documentsByDoti(): Array<DemaneDeDocument> {
    if (this._documentsByDoti == null) {
      this._documentsByDoti = new Array<DemaneDeDocument>();
      this._documentsByDoti.forEach(document => {
        document.employe = new Employe();
        document.typeDeDocument = new TypeDocument();
      });
    }
    return this._documentsByDoti;
    }
    set documentsByDoti(value: Array<DemaneDeDocument>) {
      this._documentsByDoti = value;
    }
  public  deleteByReference(demande: DemaneDeDocument) {
      this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/deleteById/id/' + demande.id).subscribe(
        data => {
          console.log('delete sucess' + data);
          this.findAll();
        });
    }
  public  deleteTypeDocumentByReference(demande: TypeDocument) {
    this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/TypeDocument/deleteById/id/' + demande.id).subscribe(
      data => {
        console.log('delete sucess' + data);
        this.findAll();
      });
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set documents(value: Array<DemaneDeDocument>) {
    this._documents = value;
  }
  public trouverDemandeParSonDoti(employe: Employe) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<DemaneDeDocument>>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/findByEmployeDoti/doti/' + employe.doti).subscribe(
      data => {
        this.documentsByDoti = data ;
        this.fullname = employe.firstName + employe.lastName;
       }, eror => {
        console.log('eroro', eror);
      });
  }

  get document(): DemaneDeDocument {
    if (this._document == null) {
      this._document = new DemaneDeDocument();
      this._document.employe = new Employe();
      this._document.typeDeDocument = new TypeDocument();
    }
    return this._document;
  }

  set document(value: DemaneDeDocument) {
    this._document = value;
  }
public editeUneDemande(demande: DemaneDeDocument) {
    this.document = demande;
}
  get typeDocuments(): Array<TypeDocument> {
    if (this._typeDocuments == null) {
      this._typeDocuments = new Array<TypeDocument>();
      this._typeDocuments.forEach(doc =>{
        doc = new TypeDocument();
      });
    }
    return this._typeDocuments;
  }
  public editUnTypeDocument(typededocument: TypeDocument) {
    this.typeDocument = typededocument;
}
  // tslint:disable-next-line:adjacent-overload-signatures
  set typeDocuments(value: Array<TypeDocument>) {
    this._typeDocuments = value;
  }
  get typeDocument(): TypeDocument {
    if (this._typeDocument == null) {
      this._typeDocument = new TypeDocument();
    }
    return this._typeDocument;
  }
  set typeDocument(value: TypeDocument) {
    this._typeDocument = value;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  get ajouteDemandeDocument(): string {
    return this._ajouteDemandeDocument;
  }

  set ajouteDemandeDocument(value: string) {
    this._ajouteDemandeDocument = value;
  }

  get ajoutedocument(): string {
    return this._ajoutedocument;
  }

  set ajoutedocument(value: string) {
    this._ajoutedocument = value;
  }

  get documentNonSigne(): Array<DemaneDeDocument> {
    if (this._documentNonSigne == null) {
      this._documentNonSigne = new Array<DemaneDeDocument>();
      this._documentNonSigne.forEach(document => {
        document.employe = new Employe();
        document.typeDeDocument = new TypeDocument();
      });
    }
    return this._documentNonSigne;
  }

  set documentNonSigne(value: Array<DemaneDeDocument>) {
    this._documentNonSigne = value;
  }
}
