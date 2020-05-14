import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';


@Component({
  selector: 'app-dialog-dep',
  templateUrl: './dialog-dep.component.html',
  styleUrls: ['./dialog-dep.component.css']
})
export class DialogDepComponent implements OnInit {
  constructor(private es: PersonnelEmployesService ) { }
  fully: string;
  ngOnInit(): void {
  }
  public listeVide1(): boolean {
    //    console.log(this.employes.length);
    return this.employesByDep.length < 1 ? true : false;
  }
  get employesByDep(): Array<Employe> {

    return this.es.employesByDep;
  }


}
