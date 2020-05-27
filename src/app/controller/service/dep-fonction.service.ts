import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {DepFonction} from '../model/dep-fonction.model';
import {Departement} from '../model/departement.model';
import {Fonction} from '../model/fonction.model';

@Injectable({
  providedIn: 'root'
})
export class DepFonctionService {
  get depfonction(): DepFonction {
    if(this._depfonction == null){
      this._depfonction = new DepFonction();
      this._depfonction.departemant = new Departement();
      this._depfonction.fonction = new Fonction();
    }
    return this._depfonction;
  }
public save(){
  this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/DepFonction/save', this.depfonction).subscribe(
    data => {
      if (data > 0){
        this.toast.success(` dep fonction est bien ajout&`, ' fonction ajouté', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.depfonction = null;
      }
    }, eror => {
      console.log('eroro', eror);
    });
}
  set depfonction(value: DepFonction) {
    this._depfonction = value;
  }

  constructor(private http: HttpClient,
              private toast: ToastrService) { }
// tslint:disable-next-line:variable-name
  private _depFonfonction: Array<DepFonction>;
  private _fonctions: Array<Fonction>;
  private _depfonction: DepFonction;

  public findDepFonctionByDepartement(value: Departement) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<DepFonction>>('http://localhost:8080/gestionDesEmployee-Api/DepFonction/findByDepartemantNom/nomDepartemant/' + value.nom).subscribe(
      data => {
        this.depFonfonction = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findALL() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Fonction>>('http://localhost:8080/gestionDesEmployee-Api/Fonction/findAll').subscribe(
      data => {
        this.fonctions = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  get depFonfonction(): Array<DepFonction> {
    if (this._depFonfonction ==  null) {
    this._depFonfonction = new Array<DepFonction>();
    this._depFonfonction.forEach( deepFonction => {
      deepFonction = new DepFonction();
      deepFonction.departemant = new Departement();
      deepFonction.fonction = new Fonction();
      });
    }
    return this._depFonfonction;
  }

  set depFonfonction(value: Array<DepFonction>) {
    this._depFonfonction = value;
  }

  get fonctions(): Array<Fonction> {
    if (this._fonctions ==  null) {
      this._fonctions = new Array<Fonction>();
      this._fonctions.forEach( deepFonction => {
        deepFonction = new Fonction();
      });
   }
    return this._fonctions;
  }

  set fonctions(value: Array<Fonction>) {
    this._fonctions = value;
  }
}
