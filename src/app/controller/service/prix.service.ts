import { Injectable } from '@angular/core';
import { PrixEmploye } from '../model/prix-employe.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Prix } from '../model/prix.model';
import { Employe } from '../model/employe.model';
import {Formation} from '../model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class PrixService {
  private _prixs: Array<PrixEmploye>;
  private _prixEmploye: PrixEmploye;
  private _ajoutePrix: string;

  get ajoutePrix(): string {
    return this._ajoutePrix;
  }
public prixEmployeNull(){
    this.prixEmploye = null;
  }
  set ajoutePrix(value: string) {
    this._ajoutePrix = value;
  }
public  ajoutePrixTitre(){
    this._ajoutePrix = 'Formulaire pour ajouter un prix à un employé';
}
  constructor(private http: HttpClient,
      private toast: ToastrService) { }
    public setprix(prixx: PrixEmploye){
      this._prixEmploye = prixx;
}
  public imprimerLesPrix(value: Array<PrixEmploye>) {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/PrixEmploye/listeDesPrixPdf', value).subscribe(
      data => {
        this.toast.success(` document est bien preparer`, ' document preparer', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }, eror => {
        console.log('eroro', eror);
      });
  }
public editerCePrixx(prix: PrixEmploye){
      this._prixEmploye = prix;
}
     public findallPrixByDoti(value: string) {
       // tslint:disable-next-line:max-line-length
       this.http.get<Array<PrixEmploye>>('http://localhost:8080/gestionDesEmployee-Api/PrixEmploye/findByEmployeDoti/doti/' + value).subscribe(
         data => {
           this._prixs = data;
         }, eror => {
           console.log('eroro', eror);
         });
     }
    get prixs(): Array<PrixEmploye> {
      if (this._prixs == null) {
        this._prixs = new Array<PrixEmploye>();
        this._prixs.forEach(p => {
          p = new PrixEmploye();
          p.prix = new Prix();
     p.employe = new Employe();
        });
      }
      return this._prixs;
    }

    set prixs(value: Array<PrixEmploye>) {
      this._prixs = value;
    }

    get prixEmploye(): PrixEmploye {
      if (this._prixEmploye == null) {
        this._prixEmploye= new PrixEmploye();
        this._prixEmploye.prix= new Prix();
        this._prixEmploye.employe = new Employe();
      }
      return this._prixEmploye;
    }

    set prixEmploye(value: PrixEmploye) {
      this._prixEmploye = value;
    }
    public save() {
      // tslint:disable-next-line:max-line-length
      if ((this.prixEmploye.employe == null || this.prixEmploye.prix == null || this.prixEmploye.dateDeObtenation == null ) || (this.prixEmploye.employe == null && this.prixEmploye.prix == null && this.prixEmploye.dateDeObtenation == null )) {
        this.toast.error(`Remplir toutes les champs`, 'Un champ est  vide', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajoutePrix = 'Un Champ est vide';
        document.getElementById('span').style.color = 'red';
      } else {
        this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/PrixEmploye/save', this.prixEmploye).subscribe(
        data => {
          // console.log(data);
          this.toast.success(`${this.prixEmploye.employe.fullName} add prix employe to the database.`, 'prix Added', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.prixs.push(this.clonePrix(this.prixEmploye));
          this._ajoutePrix = 'Un prix a été bien affecté';
          document.getElementById('span').style.color = 'green';
          this.prixEmploye = null;
        }, eror => {
          console.log('eroro', eror);
        });
    }
  }
  public update() {
    // tslint:disable-next-line:max-line-length
    if ((this.prixEmploye.employe == null || this.prixEmploye.prix == null || this.prixEmploye.dateDeObtenation == null ) || (this.prixEmploye.employe == null && this.prixEmploye.prix == null && this.prixEmploye.dateDeObtenation == null )) {
      this.toast.error(`Remplir toutes les champs`, ' Un Champ est vide', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajoutePrix = 'Un Champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/PrixEmploye/update', this.prixEmploye).subscribe(
        data => {
          this.toast.info(`${this.prixEmploye.employe.fullName} add prix employe to the database.`, 'prix Added', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.prixs.push(this.clonePrix(this.prixEmploye));
          this._ajoutePrix = 'Un prix a été bien modifié';
          document.getElementById('span').style.color = 'green';
          this.prixEmploye = null;
        }, eror => {
          console.log('eroro', eror);
        });
    }
  }
    // public deleteByReference(conge: CongeEmploye) {
    //   this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/conge/deleteById/id/' + conge.id).subscribe(
    //     data => {
    //       console.log('delete sucess' + data);
    //       this.findAll();
    //     });
    // }


    clonePrix(p: PrixEmploye): PrixEmploye {
      const myClone = new PrixEmploye();
      myClone.prix = p.prix;
      myClone.id = p.id;
      myClone.employe = p.employe;
      myClone.dateDeObtenation = p.dateDeObtenation;

      return myClone;
    }


}
