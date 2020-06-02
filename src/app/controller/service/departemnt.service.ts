import { Injectable } from '@angular/core';
import { Departement } from '../model/departement.model';
import { HttpClient } from '@angular/common/http';
import {Employe} from '../model/employe.model';
import {ToastrService} from 'ngx-toastr';
import {PersonnelEmployesService} from './personnel-employes.service';
import {PunitionEmploye} from '../model/punition-employe.model';

@Injectable({
  providedIn: 'root'
})
export class DepartemntService {
  private _dep: Departement;
  private _deps: Array<Departement>;
  private _departement: Departement;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Departement/';
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
public EditerDepartement(value: Departement) {
    this._departement = value;
}
public findAll() {
  this.http.get<Array<Departement>>(this._url + 'findAll').subscribe(
    data => {
      this.deps = data ;
    }, eror => {
      console.log('eroro',eror);
    }
  );
}
public  cloneDepartement(departement: Departement): Departement {
    const myClone = new Departement() ;
    myClone.nom = departement.nom;
    myClone.chefdoti = departement.chefdoti;
    return myClone;
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.departement).subscribe(
      data => {
        this.toast.success(`${this.departement.nom} a été bien ajouté.`, 'Département ajouté', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.deps.push(this.cloneDepartement(this.departement));
        this._departement = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public update() {
    this.http.post<number>(this._url + 'update', this.departement).subscribe(
      data => {
        this.toast.info(`${this.departement.nom} a été bien modifié.`, 'Département modifié', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.deps.push(this.cloneDepartement(this.departement));
        this._departement = null;
      }, eror => {
        console.log('eroro',eror);
      });
  }

  get dep(): Departement {
    if (this._dep == null) {
      this._dep = new Departement();
    }
    return this._dep;
  }
  set dep(value: Departement) {
    this._dep = value;
  }
  get deps(): Array<Departement> {
    if (this._deps == null) {
      this._deps = new Array<Departement>();
      this._deps.forEach(department =>{
        department = new Departement();
      });
    }
    return this._deps;
  }
  public imprimerLesdepartements() {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/Departement/listedepartementPdf').subscribe(
      data => {
        this.toast.success(`Document est bien exporter en PDF`, ' Voir votre dossier de téléchargement', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }
  set deps(value: Array<Departement>) {
    this._deps = value;
  }

  get departement(): Departement {
    if(this._departement == null){
      this._departement = new  Departement();
    }
    return this._departement;
  }

  set departement(value: Departement) {
    this._departement = value;
  }
}
