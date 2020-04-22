import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
  }
  login(nom: string, password: string) {
    this.showErrors =false;
    if (this.nom === 'mail@gmail.com' && this.password === '1234') {
      window.alert("It is correct");
    } else {
      this.password = "";
      this.showErrors=true;
    }
  }
}
