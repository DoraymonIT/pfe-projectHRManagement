import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from '../../../../controller/service/personnel-employes.service';
import {DepFonction} from '../../../../controller/model/dep-fonction.model';
import {DepFonctionService} from '../../../../controller/service/dep-fonction.service';
import {Departement} from '../../../../controller/model/departement.model';
import {Fonction} from '../../../../controller/model/fonction.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeFonctionComponent implements OnInit {

  constructor(private employeService: PersonnelEmployesService,
              private depFonction: DepFonctionService) { }

  ngOnInit(): void {
  }
  public listeVide(): boolean{
    return this.depFonfonction.length <1 ? true:false;
  }
  get depFonfonction(): Array<DepFonction> {
    return this.depFonction.depFonfonction;
  }
}
