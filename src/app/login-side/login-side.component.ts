import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { LogInService } from "../controller/service/log-in.service";
import { Employe } from "../controller/model/employe.model";
import { User } from "../controller/model/user.model";
import { ToastrService } from "ngx-toastr";
import {CongeService} from '../controller/service/conge.service';
import {PermanenceAdministrativeService} from '../controller/service/permanence-administrative.service';
import {AvancementServiceService} from '../controller/service/avancement-service.service';
import {GradeService} from '../controller/service/grade.service';
/**
 * @title Input with error messages
 */
@Component({
  selector: "app-login-side",
  templateUrl: "./login-side.component.html",
  styleUrls: ["./login-side.component.css"],
})
export class LoginSideComponent implements OnInit {
  nom: string;
  password: string;
  showErrors;
  constructor(
    private login: LogInService,
    private router: Router,
    private toast: ToastrService,
    private permanenceService: PermanenceAdministrativeService,
    private congeService: CongeService,
    private avancementService: GradeService
  ) {}
  get show(): boolean {
    return this.login.show;
  }
  ngOnInit(): void {
    this.login.ajouteLoginTitre();
    this.congeService.resetSoldeCongeEmploye();
    this.permanenceService.findAll();
    this.avancementService.getDateAvancement();
    this.avancementService.getDateEvaluation();
  }
  get userEmploye(): User {
    return this.login.userEmploye;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public showw(): boolean {
    return this.show;
  }

  public sendcodeeDeVerification() {
    this.login.sendCodeVerification(this.userEmploye.login);
  }
  public Login() {
    if (this.userEmploye.login === '' || this.userEmploye.pwd === '') {
      this.toast.warning(
        `Veuillez saisir votre email et votre mot de passe`,
        "Champ Email ou mot de passe est vide",
        {
          timeOut: 5500,
          progressBar: true,
          progressAnimation: "increasing",
          positionClass: "toast-top-right",
        }
      );
    } else {
      this.login.login();
    }

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
