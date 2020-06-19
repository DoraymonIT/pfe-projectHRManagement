import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { CongeEmploye } from '../model/conge-employe.model';
import { TypeCongee } from '../model/type-congee.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {PersonnelEmployesService} from './personnel-employes.service';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
// tslint:disable-next-line:variable-name
private _conges: Array<CongeEmploye>;
// tslint:disable-next-line:variable-name
private _congesCertificat: Array<CongeEmploye>;
// tslint:disable-next-line:variable-name
  private _congesCertificatCalendrier: Array<CongeEmploye>;
// tslint:disable-next-line:variable-name
private _congeEmploye: CongeEmploye;
// tslint:disable-next-line:variable-name
  private _congeEmployeCOnge: CongeEmploye;
// tslint:disable-next-line:variable-name
  private _congeEmploye2: CongeEmploye;
// tslint:disable-next-line:variable-name
private _typeConge: Array<TypeCongee>;
// tslint:disable-next-line:variable-name
private _filterrsult: TypeCongee;
// tslint:disable-next-line:variable-name
private _employefullname: string;
// tslint:disable-next-line:variable-name
  private _ajouteCongeEmp: string;

  constructor(private http: HttpClient,
              private toast: ToastrService,
              private employeService: PersonnelEmployesService) { }
  public trouverCongéParSonDoti(value: string) {
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        this.conges = data;
        this.conges.forEach(conge => {
          this.employefullname = conge.employe.firstName + conge.employe.lastName;
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public ajouteCongeEmploye() {
    this._ajouteCongeEmp = 'Editer / Ajouter un congée';
  }
  public update() {
    // tslint:disable-next-line:max-line-length
    if ((this.congeEmploye.dateDeDebut == null || this.congeEmploye.periode == null || this.congeEmploye.congee == null ||  this.congeEmploye.employe == null) || (this.congeEmploye.dateDeDebut == null && this.congeEmploye.periode == null  && this.congeEmploye.congee == null  && this.congeEmploye.employe == null)) {
        this.toast.error(`Remplir toutes les champs`, 'champ vide', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteCongeEmp = 'Un Champ est vide';
        document.getElementById('span').style.color = 'red';
      } else {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/update', this.congeEmploye).subscribe(
      data => {
        if (data > 0) {
          this.toast.info(`le congé a été bien modifié`, 'Congé Modifié', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteCongeEmp = 'Congé est Modifié avec Succees';
          document.getElementById('span').style.color = 'green';
        }
        this.conges.push(this.cloneConge(this.congeEmploye));
        this.congeEmploye = null;
      }, eror => {
        console.log('eroro', eror);
      });
    }
  }
  public  resetSoldeCongeEmploye(){
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/conge/AutoRestSoldeCongeEmplye').subscribe(
      data => {
      if(data == 1){
       //  this.toast.success(` le solde de congé employé est initialisé`, 'initialisation des soldes congé', {
       //    timeOut: 2500,
        //   progressBar: true,
        //   progressAnimation: 'increasing',
        //   positionClass: 'toast-top-right'
       //  });

            }
      }, eror => {
        console.log('eroro', eror);
      });

  }
  public imprimerListeDeCongeDeEmploye() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/listeDesCongéPdf' , this.conges).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(` le document à été est bien exporter`, 'Voir votre dossier de téléchargement', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public exporterListeDeCongeDeEmployeExcel() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/listeDesCongesExcel' , this.conges).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(` le document à été est bien exporter`, 'Voir votre dossier de téléchargement', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesCertificatsPdf(conges: Array<CongeEmploye>) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/listeDesCertificatsPdf' , conges).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(` le document à été est bien exporter en pdf`, 'Voir votre dossier de téléchargement', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesCertificatsExcel(conges: Array<CongeEmploye>) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/listeDesCertificatsExcel' , conges).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(` le document à été est bien exporter en excel`, 'Voir votre dossier de téléchargement', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAll() {
    this.http.get<Array<TypeCongee>>('http://localhost:8080/gestionDesEmployee-Api/CongeeService/findAll').subscribe(
      data => {
        this._typeConge = data;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  get conges(): Array<CongeEmploye> {
    if (this._conges == null) {
      this._conges = new Array<CongeEmploye>();
      this._conges.forEach(conge => {
        conge = new CongeEmploye();
        conge.congee = new TypeCongee();
        conge.employe = new Employe();
      });
    }
    return this._conges;
  }

  set conges(value: Array<CongeEmploye>) {
    this._conges = value;
  }

  get congeEmploye(): CongeEmploye {
    if (this._congeEmploye == null) {
      this._congeEmploye = new CongeEmploye();
      this._congeEmploye.congee = new TypeCongee();
      this._congeEmploye.employe = new Employe();
    }
    return this._congeEmploye;
  }

  get congeEmploye2(): CongeEmploye {
    if (this._congeEmploye2 == null) {
      this._congeEmploye2 = new CongeEmploye();
      this._congeEmploye2.congee = new TypeCongee();
      this._congeEmploye2.employe = new Employe();
    }
    return this._congeEmploye2;
  }

  set congeEmploye2(value: CongeEmploye) {
    this._congeEmploye2 = value;
  }

  set congeEmploye(value: CongeEmploye) {
    this._congeEmploye = value;
  }
  public save() {
    // tslint:disable-next-line:max-line-length
    if ((this.congeEmploye.dateDeDebut == null || this.congeEmploye.periode == null || this.congeEmploye.congee == null ||  this.congeEmploye.employe == null) || (this.congeEmploye.dateDeDebut == null && this.congeEmploye.periode == null && this.congeEmploye.congee == null  && this.congeEmploye.employe == null)) {
      this.toast.error(`Remplir toutes les champs`, 'Un Champ est vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteCongeEmp = 'Un Champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/save', this.congeEmploye).subscribe(
      data => {
        if (data == 1) {
          this.toast.success(`Un congé a été effectuer au ${this.congeEmploye.employe.firstName +" "+ this.congeEmploye.employe.lastName} `, 'congé est Bien affecter', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.conges.push(this.cloneConge(this.congeEmploye));
          this.congeEmploye = null;
          this._ajouteCongeEmp = 'Le congé est bien affecté';
          document.getElementById('span').style.color = 'green';
        } else if(data  == -4){
          this.toast.error(`la période de congé est superieur de solde congé de employé `, 'error congé', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteCongeEmp = 'Le congé est annulé';
          document.getElementById('span').style.color = 'red';
        } else if(data  == -5){
          this.toast.error(`la durée de certificat court durée (3 mois) ne doit pas dépasse 90 jours  `, 'error congé', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteCongeEmp = 'Le congé est annulé';
          document.getElementById('span').style.color = 'red';
        } else if(data  == -6){
          this.toast.error(`la durée de certificat court durée (6mois) ne doit pas dépasse 180 jours  `, 'error congé', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteCongeEmp = 'Le congé est annulé';
          document.getElementById('span').style.color = 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
    }
  }

  public findCOngeByLibelle(libelle: string) {
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findByCongeeLibelle/libelle/' + libelle).subscribe(
      data => {
        this.congesCertificat = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
public  findcongeByDotiAndLibelle(doti: String, libelle: string ){
  // tslint:disable-next-line:max-line-length
  this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findByEmployeDotiAndCongeeLibelle/matricule/' + doti + '/libelle/' + libelle).subscribe(
    data => {
      this.conges = data;
      if(this.conges != null){
        document.getElementById('table').style.display = 'inline';
      }
    }, eror => {
      console.log('eroro', eror);
    });

}
  public findCongeByAnne(annee: number, type: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findCongeByAnne/annee/' + annee + '/type/' + type).subscribe(
      data => {
        this.congesCertificat = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }


  public findallCertificatDansCetteAnnee() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findListeCertificatByAnnee').subscribe(
      data => {
        this.congesCertificat = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public findCongeBydateAndType(date1: Date,date2: Date, type: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findByCongeeLibelleAndDateDeDebut/libelle/' + type + '/date1/' + date1 + '/date2/'+ date2).subscribe(
      data => {
        this.congesCertificat = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findCongeCertificatCourtDuree() {
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findCongeCertificatcourtDuree').subscribe(
      data => {
        this.congesCertificat = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public deleteByReference(conge: CongeEmploye) {
    this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/conge/deleteById/id/' + conge.id).subscribe(
      data => {
        this.findAll();
      });
  }
  public editerUnEmployer(conge: CongeEmploye) {
    this._congeEmploye = conge;
  }

  cloneConge(conge: CongeEmploye): CongeEmploye {
    const myClone = new CongeEmploye();
    myClone.employe = conge.employe;
    myClone.congee = conge.congee;
    myClone.periode = conge.periode;
    myClone.dateDeDebut = conge.dateDeDebut;
    myClone.id = conge.id;
    return myClone;
  }

  get typeConge(): Array<TypeCongee> {
    if (this._typeConge == null) {
      this._typeConge = new Array<TypeCongee>();
    }
    return this._typeConge;
  }

  set typeConge(value: Array<TypeCongee>) {
    this._typeConge = value;
  }

  get filterrsult(): TypeCongee {
    if (this.filterrsult == null) {
      this.filterrsult = new TypeCongee();
    }
    return this._filterrsult;
  }

  set filterrsult(value: TypeCongee) {
    this._filterrsult = value;
  }

  get employefullname(): string {
    return this._employefullname;
  }

  set employefullname(value: string) {
    this._employefullname = value;
  }


  get ajouteCongeEmp(): string {
    return this._ajouteCongeEmp;
  }

  set ajouteCongeEmp(value: string) {
    this._ajouteCongeEmp = value;
  }

  get congesCertificatCalendrier(): Array<CongeEmploye> {
    if (this._congesCertificatCalendrier == null) {
      this._congesCertificatCalendrier = new Array<CongeEmploye>();
      this._congesCertificatCalendrier.forEach(conge => {
        conge = new CongeEmploye();
        conge.congee = new TypeCongee();
        conge.employe = new Employe();
      });
    }
    return this._congesCertificatCalendrier;
  }

  set congesCertificatCalendrier(value: Array<CongeEmploye>) {
    this._congesCertificatCalendrier = value;
  }

  get congesCertificat(): Array<CongeEmploye> {
    if (this._congesCertificat == null) {
      this._congesCertificat = new Array<CongeEmploye>();
      this._congesCertificat.forEach(conge => {
        conge = new CongeEmploye();
        conge.congee = new TypeCongee();
        conge.employe = new Employe();
      });
    }
    return this._congesCertificat;
  }

  set congesCertificat(value: Array<CongeEmploye>) {
    this._congesCertificat = value;
  }

  get congeEmployeCOnge(): CongeEmploye {
    if (this._congeEmployeCOnge == null) {
      this._congeEmployeCOnge = new CongeEmploye()
      this._congeEmployeCOnge.congee = new TypeCongee();
      this._congeEmployeCOnge.employe = new Employe();
      }
    return this._congeEmployeCOnge;
  }

  set congeEmployeCOnge(value: CongeEmploye) {
    this._congeEmployeCOnge = value;
  }
}
