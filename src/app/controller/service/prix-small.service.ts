import { Injectable } from '@angular/core';
import { Prix } from '../model/prix.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrixSmallService {
  private _ps: Array<Prix>;
  private _prix: Prix;

    constructor(private http: HttpClient) { }

    public findAll() {
      this.http.get<Array<Prix>>('http://localhost:8080/gestionDesEmployee-Api/Prix/findAll').subscribe(
        data => {
          this._ps= data;
        }, eror => {
          console.log('eroro', eror);
        }
      );
    }
    get ps(): Array<Prix> {
      if (this._ps == null) {
        this._ps = new Array<Prix>();

      }
      return this._ps;
    }

    set ps(value: Array<Prix>) {
      this._ps = value;
    }

    get prix(): Prix{
      if (this._prix == null) {
        this._prix= new Prix();

      }
      return this._prix;
    }

    set prix(value: Prix) {
      this._prix = value;
    }
}
