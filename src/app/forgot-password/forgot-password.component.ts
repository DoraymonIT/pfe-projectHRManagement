import { Component, OnInit } from '@angular/core';
import {LogInService} from '../controller/service/log-in.service';
import {User} from '../controller/model/user.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private loginService: LogInService,
              private toast: ToastrService) { }

  ngOnInit(): void {
  }
  get userEmploye(): User {
    return this.loginService.userEmploye;
  }
  public  modifierPasswordParcodeVerification(){
    if (this.userEmploye.nvpassword === this.userEmploye.nvpasswordConfirmation){
      this.loginService.resetPasswordCodeVerification(this.userEmploye.login, this.userEmploye.nvpassword, this.userEmploye.code);
    } else {
      this.toast.error(`$le nouveau password et la confirmation ne sont pas identique`, 'password non identique', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
    }
  }
}
