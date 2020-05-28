import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {CongeService} from '../../../controller/service/conge.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Employe} from '../../../controller/model/employe.model';
import {CongeEmploye} from '../../../controller/model/conge-employe.model';
import {TypeCongee} from '../../../controller/model/type-congee.model';
import {LazyLoadEvent} from 'primeng/api/lazyloadevent';
import {ListeDesJoursFriesComponent} from '../liste-des-jours-fries/liste-des-jours-fries.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

constructor() {
}
ngOnInit(): void {
}
}
