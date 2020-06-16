import { Component, OnInit } from '@angular/core';
import {GradeService} from '../../controller/service/grade.service';
import {Employe} from '../../controller/model/employe.model';

@Component({
  selector: 'app-liste-avancement',
  templateUrl: './liste-avancement.component.html',
  styleUrls: ['./liste-avancement.component.css']
})
export class ListeAvancementComponent implements OnInit {

  constructor(
    private avancementService: GradeService
  ) { }

  ngOnInit(): void {
  }
  public listeVide(): boolean {
    return this.employeAvancement.length < 1 ? true : false;
  }
  get employeAvancement(): Array<Employe> {
    return this.avancementService.employeAvancement;
  }
}
