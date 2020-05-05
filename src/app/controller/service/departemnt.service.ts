import { Injectable } from '@angular/core';
import { Departement } from '../model/departement.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartemntService {
  private _dep: Departement;
  private _deps: Array<Departement>;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Departement/';
  constructor(private http: HttpClient) { }

public findAll() {
  this.http.get<Array<Departement>>(this._url+'findAll').subscribe(
    data => {
      console.log('ha data dyal departement' + data);
      this._deps = data ;
    }, eror => {
      console.log('eroro',eror);
    }
  );

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
    }
    return this._deps;
  }
  set deps(value: Array<Departement>) {
    this._deps = value;
  }
}
