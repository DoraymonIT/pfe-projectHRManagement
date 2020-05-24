import { Component, OnInit } from '@angular/core';
import { PersonnelEmployesService } from 'src/app/controller/service/personnel-employes.service';
import { Employe } from 'src/app/controller/model/employe.model';


@Component({
  selector: 'app-dialog-dep',
  templateUrl: './dialog-dep.component.html',
  styleUrls: ['./dialog-dep.component.css']
})
export class DialogDepComponent implements OnInit {
  depfullname: string;
  constructor(private es: PersonnelEmployesService ) { }
  fully: string;
  ngOnInit(): void {
    this.getFullName();
  }
  public  getFullName() : string{
    this.employesByDep.forEach(dep =>{
      this.depfullname = dep.dep.nom;
    });
    return this.depfullname;
  }
  public listeVide1(): boolean {
    return this.employesByDep.length < 1 ? true : false;
  }
  get employesByDep(): Array<Employe> {
    return this.es.employesByDep;
  }



}
