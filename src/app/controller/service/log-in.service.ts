import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../model/employe.model';
import { Route, Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private _employe: Employe;
  constructor(private http: HttpClient,
              private toast: ToastrService,
              private router: Router) { }

  url = 'http://localhost:4000';
  getCharacters() : any{
    return this
      .http
      .get(`${this.url}/characters`);
  }

  employes() {
    return this
      .http
      .get(`${this.url}/employes`);
  }
  public login() {
    // this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByEmail/email/' + this._employe.email).subscribe(
    //   data => {
    //     if (data != null) {
    // if(data.password === this._employe.password) {
    this.toast.success(`${this.employe.fullName} add employe to the database.`, 'employe Added', {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
    this.router.navigate(['RhResponsable']).then();
    // }
    //     }
    //   }, eror => {
    //     console.log('eroro');
    //   }
    // );
  }

  get employe(): Employe {
    if (this._employe == null) {
      this._employe = new Employe();
    }
    return this._employe;
  }
}
