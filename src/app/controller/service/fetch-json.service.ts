import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {
  constructor(private http: HttpClient) {

}
private _cities : Array<City>=[];

get cities(): Array<City> {
  if (this._cities == null) {
    this._cities = new Array<City>();

  }
  return this._cities;
}
set cities(value: Array<City>) {
  this._cities = value;
}

public findAll() {
  this.http.get< Array<City>>("./assets/cities.json").subscribe(
    data => {
      console.log('cities :'+ data);
      this._cities = data ;
    }, eror => {
      console.log('eroro del cities', eror);
    }
  );
}

}
