import { Injectable } from '@angular/core';
import { PunitionEmploye } from '../model/punition-employe.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Punition } from '../model/punition.model';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class PunitionService {
  private _punitions: Array<PunitionEmploye>;
  private _punitionEmploye: PunitionEmploye;

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
    get punitions(): Array<PunitionEmploye> {
      if (this._punitions == null) {
        this._punitions = new Array<PunitionEmploye>();
        this._punitions.forEach(p => {
          p = new PunitionEmploye();
          p.punition = new Punition();
     p.employe = new Employe();
        })
      }
      return this._punitions;
    }

    set punitions(value: Array<PunitionEmploye>) {
      this._punitions = value;
    }

    get punitionEmploye(): PunitionEmploye {
      if (this._punitionEmploye == null) {
        this._punitionEmploye= new PunitionEmploye();
        this._punitionEmploye.punition= new Punition();
        this._punitionEmploye.employe = new Employe();
      }
      return this._punitionEmploye;
    }

    set punitionEmploye(value: PunitionEmploye) {
      this._punitionEmploye = value;
    }
    public save() {
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/PunitionEmploye/save', this.punitionEmploye).subscribe(
        data => {
          // console.log(data);
          this.toast.success(`${this.punitionEmploye.employe.fullName} add prix employe to the database.`, 'prix Added', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.punitions.push(this.clonePunition(this.punitionEmploye));
          console.log('data lli b7ra d5lty dyal punition hhh'+ data);
          this.punitionEmploye = null;
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


    clonePunition(p: PunitionEmploye): PunitionEmploye {
      const myClone = new PunitionEmploye();
      myClone.punition = p.punition;
      myClone.dateObtenation = p.dateObtenation;
      myClone.id = p.id;
      myClone.employe = p.employe;


      return myClone;
    }

}
