import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {LogInService} from '../controller/service/log-in.service';
import {Employe} from '../controller/model/employe.model';
import {User} from '../controller/model/user.model';
/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {
  nom: string;
  password: string;
  showErrors;
  constructor(private login: LogInService,  private router: Router) { }
  get show(): boolean {
    return this.login.show;
  }
  ngOnInit(): void {
    this.login.ajouteLoginTitre();
  }
  get userEmploye(): User {
    return this.login.userEmploye;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public showw(): boolean{
    return  this.show;
  }
  public sendcodeeDeVerification() {
    this.login.sendCodeVerification(this.userEmploye.login);
  }
  public Login() {
    // console.log('ha email' + this.userEmploye.login);
    // console.log('ha password' + this.userEmploye.pwd);
    this.login.login();
    //this.router.navigate(['RhResponsable']).then();
  }
  get loginTitre(): string {
    return this.login.loginTitre;
  }

  get userLogin(): string {
    return this.login.userLogin;
  }

  get userpdw(): string {
    return this.login.userpdw;
  }
}
