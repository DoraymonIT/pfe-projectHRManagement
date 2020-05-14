import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from '../../../../controller/service/personnel-employes.service';
import { Employe } from '../../../../controller/model/employe.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
