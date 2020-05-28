import { Injectable } from '@angular/core';
import { Punition } from '../model/punition.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PunitionSmallService {
  private _ps: Array<Punition>;
  private _punition: Punition;

    constructor(private http: HttpClient) { }

    public findAll() {
      this.http.get<Array<Punition>>('http://localhost:8080/gestionDesEmployee-Api/Punition/findAll').subscribe(
        data => {
          this._ps= data;
        }, eror => {
          console.log('eroro', eror);
        }
      );
    }
    get ps(): Array<Punition> {
      if (this._ps == null) {
        this._ps = new Array<Punition>();

      }
      return this._ps;
    }

    set ps(value: Array<Punition>) {
      this._ps = value;
    }

    get punition(): Punition{
      if (this._punition == null) {
        this._punition= new Punition();

      }
      return this._punition;
    }

    set punition(value: Punition) {
      this._punition = value;
    }
}
