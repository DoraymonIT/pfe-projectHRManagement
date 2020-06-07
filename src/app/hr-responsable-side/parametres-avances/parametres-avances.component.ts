import { Component, OnInit } from '@angular/core';
import {LogInService} from '../../controller/service/log-in.service';
import {User} from '../../controller/model/user.model';

@Component({
  selector: 'app-parametres-avances',
  templateUrl: './parametres-avances.component.html',
  styleUrls: ['./parametres-avances.component.css']
})
export class ParametresAvancesComponent implements OnInit {
  showfrom: boolean;
  constructor(private loginService: LogInService) { }

  ngOnInit(): void {
    this.showfrom = false;
  }
  get userEmploye(): User {
    return this.loginService.userEmploye;
  }
  public modifierPasswordsansCodeConfirmation(){
    if(this.userEmploye.nvpassword === this.userEmploye.nvpasswordConfirmation){
      this.loginService.resetPassword(this.userEmploye.login, this.userEmploye.oldpassword, this.userEmploye.nvpassword);
    }
  }
  public show(){
    if(this.showfrom === false){
      document.getElementById('form').style.display = 'block';
      this.showfrom = true;
    } else {
      document.getElementById('form').style.display = 'none';
      this.showfrom = false;
    }
  }
}
