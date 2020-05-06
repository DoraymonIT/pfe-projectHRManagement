import { Injectable } from '@angular/core';
import {Employe} from '../model/employe.model';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {PermanenceSchedule} from '../model/permanence-schedule';

@Injectable({
  providedIn: 'root'
})
export class PermanenceAdministrativeService {
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  get permanences(): Array<PermanenceSchedule> {
    if(this._permanences == null){
      this._permanences = new Array<PermanenceSchedule>();
      this._permanences.forEach(permanence=>{
        permanence = new PermanenceSchedule();
        permanence.employe = new Employe();
      });
    }
    return this._permanences;
  }

  set permanences(value: Array<PermanenceSchedule>) {
    this._permanences = value;
  }
private _permanences: Array<PermanenceSchedule>;

  public findAll() {
    this.http.get<Array<PermanenceSchedule>>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findAll').subscribe(
      data => {
        console.log('ha data dial permanence' + data);
        this._permanences = data ;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
}
