import { Injectable } from '@angular/core';
import { Departement } from '../model/departement.model';
import { HttpClient } from '@angular/common/http';
import {Employe} from '../model/employe.model';
import {ToastrService} from 'ngx-toastr';
import {PersonnelEmployesService} from './personnel-employes.service';

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

public findAll() {
  this.http.get<Array<Departement>>(this._url+'findAll').subscribe(
    data => {
      console.log('ha data dyal departement' + data);
      this.deps = data ;
    }, eror => {
      console.log('eroro',eror);
    }
  );
}
public  cloneDepartement(departement: Departement): Departement {
    const myClone = new Departement() ;
    myClone.nom = departement.nom;
    myClone.chef = departement.chef;
    return myClone;
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.departement).subscribe(
      data => {
    //    console.log(data);
        this.toast.success(`${this.departement.nom} add departement to the database.`, 'depatrement Added', {
          timeOut: 1500,
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
  get dep(): Departement {
    if (this._dep == null) {
      this._dep = new Departement();
      this._dep.chef = new Employe();
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
        department.chef = new Employe();
      });
    }
    return this._deps;
  }
  set deps(value: Array<Departement>) {
    this._deps = value;
  }

  get departement(): Departement {
    if(this._departement == null){
      this._departement = new  Departement();
      this._departement.chef = new Employe();
    }
    return this._departement;
  }

  set departement(value: Departement) {
    this._departement = value;
  }
}
