import { Component, OnInit } from '@angular/core';
import {LogInService} from '../../controller/service/log-in.service';
import {User} from '../../controller/model/user.model';
import {Departement} from '../../controller/model/departement.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ListeFonctionComponent} from '../architecture-de-fstg/departement/ListeFonction/liste.component';
import {NotificationEmployeService} from '../../controller/service/notification-employe.service';
import {HistoriqueComponent} from './historique/historique.component';

@Component({
  selector: 'app-parametres-avances',
  templateUrl: './parametres-avances.component.html',
  styleUrls: ['./parametres-avances.component.css']
})
export class ParametresAvancesComponent implements OnInit {
  showfrom: boolean;
  constructor(private loginService: LogInService,
              private hisoriqueService: NotificationEmployeService,
              private dialog: MatDialog) { }

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
  public trouverHistoriqueParNomDepDialog() {
    this.hisoriqueService.findAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    dialogConfig.height = '100%';
    this.dialog.open(HistoriqueComponent, dialogConfig);
  }
}
