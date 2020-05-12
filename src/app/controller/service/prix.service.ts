import { Injectable } from '@angular/core';
import { PrixEmploye } from '../model/prix-employe.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Prix } from '../model/prix.model';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class PrixService {
  private _prixs: Array<PrixEmploye>;
  private _prixEmploye: PrixEmploye;

    constructor(private http: HttpClient,
      private toast: ToastrService) { }

    // public findAll() {
    //   this.http.get<Array<Formation>>('http://localhost:8080/gestionDesEmployee-Api/CongeeService/findAll').subscribe(
    //     data => {
    //       console.log('ha data dyal types de conges' + data);
    //       this._formations = data;
    //       //console.log('ha  employe' + this._EditEmploye);
    //     }, eror => {
    //       console.log('eroro', eror);
    //     }
    //   );
    // }
    get prixs(): Array<PrixEmploye> {
      if (this._prixs == null) {
        this._prixs = new Array<PrixEmploye>();
        this._prixs.forEach(p => {
          p = new PrixEmploye();
          p.prix = new Prix();
     p.employe = new Employe();
        })
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
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/PrixEmploye/save', this.prixEmploye).subscribe(
        data => {
          // console.log(data);
          this.toast.success(`${this.prixEmploye.employe.fullName} add prix employe to the database.`, 'prix Added', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.prixs.push(this.clonePrix(this.prixEmploye));
          console.log('data lli b7ra d5lty dyal prix hhh'+ data);
          this.prixEmploye = null;
        }, eror => {
          console.log('eroro', eror);
        }
      );
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
