import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {LogInService} from '../controller/service/log-in.service';
import {Employe} from '../controller/model/employe.model';
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
  constructor(private login: LogInService) { }

  ngOnInit(): void {
  }
  get employe(): Employe {
    return this.login.employe;
  }
  public Login() {
    this.login.login();
  }

}
