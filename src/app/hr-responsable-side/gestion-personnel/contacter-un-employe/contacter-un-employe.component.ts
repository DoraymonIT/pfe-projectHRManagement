import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {FormationServiceService} from '../../../controller/service/formation-service.service';
import {Employe} from '../../../controller/model/employe.model';
import {Email} from '../../../controller/model/email.model';


@Component({
  selector: 'app-contacter-un-employe',
  templateUrl: './contacter-un-employe.component.html',
  styleUrls: ['./contacter-un-employe.component.css']
})
export class ContacterUnEmployeComponent implements OnInit {
  constructor(private employeService: PersonnelEmployesService, private fs: FormationServiceService) { }
  panelOpenState = false;
  ngOnInit(): void {
    this.employeService.findAll();
  }
  public trouverEmployerParSonDoti(value: string) {
    this.employeService.trouverEmployerParSonDoti(value);
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get email(): Email {
    return this.employeService.email;
  }
  get employeInfo(): Employe {
    return this.employeService.EditEmploye;
  }
public envoyer() {
    while (this.email.text.search('<p>') !== -1) {
      this.email.text = this.email.text.replace('<p>', '                                         ');
    }
    while (this.email.text.search('</p>') !== -1) {
    this.email.text = this.email.text.replace('</p>', '                                                    ');
  }
    this.employeService.contacterUnEmploye();
  }
}
