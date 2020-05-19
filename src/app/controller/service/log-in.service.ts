import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private _userEmploye: User;
  private _userLogin: string;
  private _userpdw: string;
  private _loginTitre: string;
  private _show: boolean;
  constructor(private http: HttpClient,
              private toast: ToastrService,
              private router: Router) { }

public ajouteLoginTitre(){
    this._loginTitre = 'Authentification';
}
  public login() {
    this.findUser();
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/User/seConnecter', this.userEmploye).subscribe(
       data => {
         if (data === 1) {
     this.toast.success(`$ login est bien faites`, 'login reussit', {
       timeOut: 1500,
       progressBar: true,
       progressAnimation: 'increasing',
       positionClass: 'toast-top-right'
     });
     this.router.navigate(['RhResponsable']).then();
         } else if (data === -1) {
           this.toast.error(`$ login not found`, 'login failed', {
             timeOut: 1500,
             progressBar: true,
             progressAnimation: 'increasing',
             positionClass: 'toast-top-right'
           });
         } else if (data === -3) {
           this.toast.error(`$ mot de pass erroné`, 'login failed', {
             timeOut: 1500,
             progressBar: true,
             progressAnimation: 'increasing',
             positionClass: 'toast-top-right'
           });
           this.findUser();
           document.getElementById('span').style.color = 'red';
         } else if (data === -2) {
           this.toast.error(`$ authentification est bloqué `, 'login failed', {
             timeOut: 1500,
             progressBar: true,
             progressAnimation: 'increasing',
             positionClass: 'toast-top-right'
           });
           document.getElementById('count').style.display = 'inline';
           this._show = true;
           document.getElementById('span').style.color = 'red';
           this.findUser();
         } else if (data === -4) {
           this.toast.error(`$ authentification est bloqué 15min`, 'login failed', {
             timeOut: 1500,
             progressBar: true,
             progressAnimation: 'increasing',
             positionClass: 'toast-top-right'
           });
           document.getElementById('count').style.display = 'inline';
           this._loginTitre = 'please wait 15min ';
           document.getElementById('span').style.color = 'red';
         }
       }, eror => {
         console.log('eroro');
       });
  }
public  findUser() {
  this.http.get<User>('http://localhost:8080/gestionDesEmployee-Api/User/findByLogin/login/' +  this.userEmploye.login).subscribe(
    data => {
      this.userEmploye = data;
      this._loginTitre = 'vous avez' + this.userEmploye.nbrTentatifRestant + 'restatntes';
    }, eror => {
      console.log('eroro');
    });
}

  get loginTitre(): string {
    return this._loginTitre;
  }

  set loginTitre(value: string) {
    this._loginTitre = value;
  }

  get userLogin(): string {
    return this._userLogin;
  }

  set userLogin(value: string) {
    this._userLogin = value;
  }

  get userpdw(): string {
    return this._userpdw;
  }

  set userpdw(value: string) {
    this._userpdw = value;
  }

  get userEmploye(): User {
    if (this._userEmploye == null) {
      this._userEmploye = new User();
    }
    return this._userEmploye;
  }

  set userEmploye(value: User) {
    this._userEmploye = value;
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }
}
