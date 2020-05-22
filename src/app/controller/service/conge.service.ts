import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { CongeEmploye } from '../model/conge-employe.model';
import { TypeCongee } from '../model/type-congee.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
// tslint:disable-next-line:variable-name
private _conges: Array<CongeEmploye>;
// tslint:disable-next-line:variable-name
private _congeEmploye: CongeEmploye;
// tslint:disable-next-line:variable-name
private _typeConge: Array<TypeCongee>;
// tslint:disable-next-line:variable-name
private _filterrsult: TypeCongee;
// tslint:disable-next-line:variable-name
private _employefullname: string;
// tslint:disable-next-line:variable-name
  private _ajouteCongeEmp: string;
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  public trouverCongéParSonDoti(value: number) {
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        this._conges = data;
        this._conges.forEach(conge => {
          this.employefullname = conge.employe.fullName;
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
    if ((this.congeEmploye.dateDeDebut == null || this.congeEmploye.periode == null || this.congeEmploye.raison == null || this.congeEmploye.congee == null || this.congeEmploye.etat == null || this.congeEmploye.employe == null) || (this.congeEmploye.dateDeDebut == null && this.congeEmploye.periode == null && this.congeEmploye.raison == null && this.congeEmploye.congee == null && this.congeEmploye.etat == null && this.congeEmploye.employe == null)) {
        this.toast.error(`remplir toutes les champ`, 'champ vide', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteCongeEmp = 'champ est vide';
        document.getElementById('span').style.color = 'red';
      } else {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/update', this.congeEmploye).subscribe(
      data => {
        if (data > 0) {
          this.toast.info(`le conge employe est bien modifie`, ' champ modified', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteCongeEmp = 'comge employe est bien modified';
          document.getElementById('span').style.color = 'greed';
        }
        this.conges.push(this.cloneConge(this.congeEmploye));
        this.congeEmploye = null;
      }, eror => {
        console.log('eroro', eror);
      });
    }
  }
  public imprimerListeDeCongeDeEmploye() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/listeDesCongéPdf' , this.conges).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(` document liste congé est bien preparé.`, 'document prepared', {
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

  set congeEmploye(value: CongeEmploye) {
    this._congeEmploye = value;
  }
  public save() {
    // tslint:disable-next-line:max-line-length
    if ((this.congeEmploye.dateDeDebut == null || this.congeEmploye.periode == null || this.congeEmploye.raison == null || this.congeEmploye.congee == null || this.congeEmploye.etat == null || this.congeEmploye.employe == null) || (this.congeEmploye.dateDeDebut == null && this.congeEmploye.periode == null && this.congeEmploye.raison == null && this.congeEmploye.congee == null && this.congeEmploye.etat == null && this.congeEmploye.employe == null)) {
      this.toast.error(`remplir toutes les champ`, 'champ vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteCongeEmp = 'champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/save', this.congeEmploye).subscribe(
      data => {
        if (data > 0) {
          this.toast.success(`${this.congeEmploye.employe.fullName} add conge employe to the database.`, 'conge Added', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.conges.push(this.cloneConge(this.congeEmploye));
          this.congeEmploye = null;
          this._ajouteCongeEmp = 'comge employe est bien added';
          document.getElementById('span').style.color = 'greed';
        }
      }, eror => {
        console.log('eroro', eror);
      });
    }
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
    myClone.etat = conge.etat;
    myClone.raison = conge.raison;
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
}
