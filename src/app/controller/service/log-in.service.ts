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
  // tslint:disable-next-line:variable-name
  private _conncter = false;
  constructor(private http: HttpClient,
              private toast: ToastrService,
              private router: Router) {}

  public ajouteLoginTitre(){
    this._loginTitre = 'Authentification';
  }

  public login() {
    //this.router.navigate(['RhResponsable']).then();
    this.findUser();
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/User/seConnecter', this.userEmploye).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(`Re-bonjour sur l'Application`, 'Login est bien réussi', {
            timeOut: 500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._conncter = true;
          this.router.navigate(['RhResponsable']).then();
        } else if (data === -1) {
          this.toast.error(`Votre Email ou mot de passe est incorrect`, 'Echéc Echéc', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        } else if (data === -3) {
          this.toast.error(`Mot de Passe Erroné`, 'Echéc d Authentification', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.findUser();
          document.getElementById('span').style.color = 'red';
        } else if (data === -2) {
          this.toast.error(`$ Authentification est bloqué `, 'Echéc d Authentification', {
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
          this.toast.error(`$ Authentification est bloqué durant 15 min`, 'Echéc d Authentification', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          document.getElementById('count').style.display = 'inline';
          this._loginTitre = 'SVP ,Attendez 15 Minutes...';
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
        this._loginTitre = 'Vous avez ' +' '+ this.userEmploye.nbrTentatifRestant +' ' +' tentatives restantes';
      }, eror => {
        console.log('eroro');
      });
  }
  public  sendCodeVerification(login: string) {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/User/sendCode/email/' + login).subscribe(
      data => {
        if(data === 1){
          this.toast.info(`Un Code a été envoyer à votre Email`, 'Code est bien envoyé', {
            timeOut: 4000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public  resetPasswordCodeVerification(login: string, nvPassword: string, code: number) {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/User/resetPasswordCodeVerification/email/' + login + '/nvpassword/' + nvPassword + '/code/' + code).subscribe(
      data => {
        if(data === 1){
          this.toast.info(`Mot de passe est bien Modifé`, 'Mot de passe modifié', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro');
      });
  }
  public  resetPassword(login: string, oldPassword: string, nvPassword: string) {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/User/resetPassword/email/' + login + '/oldPassword/' + oldPassword + '/nvPassword/' + nvPassword).subscribe(
      data => {
        if(data === 1) {
          this.toast.info(`Mot de passe est bien Modifé`, 'Mot de passe modifié', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
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

  get conncter(): boolean {
    return this._conncter;
  }

  set conncter(value: boolean) {
    this._conncter = value;
  }
}
