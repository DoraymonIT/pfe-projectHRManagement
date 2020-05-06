import { Component, OnInit } from '@angular/core';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';
import {PermanenceAdministrativeService} from '../../controller/service/permanence-administrative.service';

@Component({
  selector: 'app-permanence',
  templateUrl: './permanence.component.html',
  styleUrls: ['./permanence.component.css']
})
export class PermanenceComponent implements OnInit {

  constructor(private pemanenceAdministrative : PermanenceAdministrativeService) { }

  ngOnInit(): void {
  }

}
