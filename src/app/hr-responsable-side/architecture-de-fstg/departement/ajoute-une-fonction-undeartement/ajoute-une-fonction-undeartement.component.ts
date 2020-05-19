import { Component, OnInit } from '@angular/core';
import {DepartemntService} from '../../../../controller/service/departemnt.service';
import {Departement} from '../../../../controller/model/departement.model';
import {DepFonctionService} from '../../../../controller/service/dep-fonction.service';
import {Fonction} from '../../../../controller/model/fonction.model';
import {DepFonction} from '../../../../controller/model/dep-fonction.model';

@Component({
  selector: 'app-ajoute-une-fonction-undeartement',
  templateUrl: './ajoute-une-fonction-undeartement.component.html',
  styleUrls: ['./ajoute-une-fonction-undeartement.component.css']
})
export class AjouteUneFonctionUndeartementComponent implements OnInit {

  constructor(private deparetementService: DepartemntService,
              private fonctionService: DepFonctionService) { }
autre: boolean;
  ngOnInit(): void {
    this.fonctionService.findALL();
    this.autre = false;
  }
  public show() {
    if(this.depfonction.fonction.libelle === 'autre'){
      document.getElementById('autre').style.display = 'inline-block';
      this.autre = true;
    } else{
      document.getElementById('autre').style.display = 'none';
      this.autre = false;
    }
  }
  public save(){
    this.fonctionService.save();
  }
  get deps(): Array<Departement> {
    return this.deparetementService.deps;
  }
  get fonctions(): Array<Fonction> {
      return this.fonctionService.fonctions;
    }
  get depfonction(): DepFonction {
    return this.fonctionService.depfonction;
  }
}
