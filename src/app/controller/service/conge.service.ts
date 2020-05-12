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
private _conges: Array<CongeEmploye>;
private _congeEmploye: CongeEmploye;
private _typeConge: Array<TypeCongee>;
private _filterrsult: TypeCongee;
  constructor(private http: HttpClient,
    private toast: ToastrService) { }
  public trouverCongéParSonDoti(value: number) {
    this.http.get<Array<CongeEmploye>>('http://localhost:8080/gestionDesEmployee-Api/conge/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        //console.log('ha data' + data);
        this._conges = data;
        //console.log('ha  employe' + this._EditEmploye);
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public findAll() {
    this.http.get<Array<TypeCongee>>('http://localhost:8080/gestionDesEmployee-Api/CongeeService/findAll').subscribe(
      data => {
        console.log('ha data dyal types de conges' + data);
        this._typeConge = data;
        //console.log('ha  employe' + this._EditEmploye);
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
      })
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
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/conge/save', this.congeEmploye).subscribe(
      data => {
        // console.log(data);
        this.toast.success(`${this.congeEmploye.employe.fullName} add conge employe to the database.`, 'conge Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.conges.push(this.cloneConge(this.congeEmploye));
        console.log('data lli b7ra d5lty dyal conge hhh'+data);
        this.congeEmploye = null;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public deleteByReference(conge: CongeEmploye) {
    this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/conge/deleteById/id/' + conge.id).subscribe(
      data => {
        console.log('delete sucess' + data);
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
    if(this.filterrsult == null){
      this.filterrsult = new TypeCongee();
    }
    return this._filterrsult;
  }

  set filterrsult(value: TypeCongee) {
    this._filterrsult = value;
  }
}
