import { Injectable } from '@angular/core';
import {Employe} from '../model/employe.model';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {PermanenceAdministrative} from '../model/PermanenceAdministrative';

@Injectable({
  providedIn: 'root'
})
export class PermanenceAdministrativeService {
  private _perm: Array<PermanenceAdministrative>;
  private _permanenceAdministrative: PermanenceAdministrative;
  private _permanenceAdministrative1: PermanenceAdministrative;
  private _pemanenceListe: Array<PermanenceAdministrative>;
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  public findAllPermanenceByDoti(value: string) {
    this.http.get<Array<PermanenceAdministrative>>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findByemployeDoti/doti/' + value).subscribe(
      data => {
        this.pemanenceListe = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllPermanenceByannee(value: number) {
    this.http.get<Array<PermanenceAdministrative>>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findByAnnee/annee/' + value).subscribe(
      data => {
        this.pemanenceListe = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllPermanenceByanneeAndDoti(annee: number, doti: string) {
    this.http.get<Array<PermanenceAdministrative>>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findByAnneeAndemployeDoti/annee/' + annee + '/doti/' + doti).subscribe(
      data => {
        this.pemanenceListe = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAll() {
    this.http.get<Array<PermanenceAdministrative>>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findAll').subscribe(
      data => {
        this.perm = data ;
        this.pemanenceListe = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  get perm(): Array<PermanenceAdministrative> {
    if(this._perm == null){
      this._perm = new Array<PermanenceAdministrative>();
      this._perm.forEach(per =>{
        per.employe = new Employe();
      });
    }
    return this._perm;
  }

  set perm(value: Array<PermanenceAdministrative>) {
    this._perm = value;
  }
  public deleteByReference(permanence: PermanenceAdministrative){
    this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/deleteById/id/' + permanence.id).subscribe(
      data => {
        console.log('delete sucess' + data);
        this.findAll();
      });
  }
  public editerUnEmployer(permanence: PermanenceAdministrative){
    this._permanenceAdministrative = permanence;
  }
  get permanenceAdministrative(): PermanenceAdministrative {
 if(this._permanenceAdministrative == null){
   this._permanenceAdministrative = new PermanenceAdministrative();
   this._permanenceAdministrative.employe = new Employe();
 }
    return this._permanenceAdministrative;
  }

  get permanenceAdministrative1(): PermanenceAdministrative {
    if(this._permanenceAdministrative1 == null){
      this._permanenceAdministrative1 = new PermanenceAdministrative();
      this._permanenceAdministrative1.employe = new Employe();
    }
    return this._permanenceAdministrative1;
  }

  set permanenceAdministrative1(value: PermanenceAdministrative) {
    this._permanenceAdministrative1 = value;
  }

  get pemanenceListe(): Array<PermanenceAdministrative> {
    if(this._pemanenceListe == null){
      this._pemanenceListe = new Array<PermanenceAdministrative>();
      this._pemanenceListe.forEach(per =>{
        per = new PermanenceAdministrative();
        per.employe = new Employe();
      });
    }
    return this._pemanenceListe;
  }

  set pemanenceListe(value: Array<PermanenceAdministrative>) {
    this._pemanenceListe = value;
  }

  public trouverEmployerParSonDoti(value: string){
    this.http.get<PermanenceAdministrative>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/findByemployeDoti//doti/' + value).subscribe(
      data => {
//        console.log('ha data' + data);
        this.permanenceAdministrative = data ;
  //      console.log('ha  permanence Adminitrative' + this._permanenceAdministrative);
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public save() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/PermanenceAdministrative/save', this._permanenceAdministrative).subscribe(
      data => {
        console.log(data);
        this.toast.success(` Une permanence a ete affecte a  ${this.permanenceAdministrative.employe.firstName +' '+ this.permanenceAdministrative.employe.lastName}. `, 'Permanence a ete effectue avec success', {
          timeOut: 2500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.perm.push(this.clonePermanenceAdministrative(this.permanenceAdministrative));
        this._permanenceAdministrative = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
public  clonePermanenceAdministrative(permanence: PermanenceAdministrative): PermanenceAdministrative {
    const myClone = new PermanenceAdministrative() ;
    myClone.employe = new Employe();
    myClone.employe = permanence.employe;
    myClone.date = permanence.date;
    myClone.recuperation = permanence.recuperation;
    myClone.periodeDeRecuperation = permanence.periodeDeRecuperation;
    myClone.periode = permanence.periode;
    return myClone;
  }
  set permanenceAdministrative(value: PermanenceAdministrative) {
    this._permanenceAdministrative = value;
  }
}
