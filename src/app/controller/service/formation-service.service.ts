import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {
  private _formations: Array<Formation>;
  private _formationEmploye: Formation;

    constructor(private http: HttpClient,
      private toast: ToastrService) { }

    // public findAll() {
    //   this.http.get<Array<Formation>>('http://localhost:8080/gestionDesEmployee-Api/CongeeService/findAll').subscribe(
    //     data => {
    //       console.log('ha data dyal types de conges' + data);
    //       this._formations = data;
    //       //console.log('ha  employe' + this._EditEmploye);
    //     }, eror => {
    //       console.log('eroro', eror);
    //     }
    //   );
    // }
    get formations(): Array<Formation> {
      if (this._formations == null) {
        this._formations = new Array<Formation>();
        this._formations.forEach(formation => {
          formation = new Formation();
     formation.employe = new Employe();
        })
      }
      return this._formations;
    }

    set formations(value: Array<Formation>) {
      this._formations = value;
    }

    get formationEmploye(): Formation {
      if (this._formationEmploye == null) {
        this._formationEmploye= new Formation();
        this._formationEmploye.employe = new Employe();
      }
      return this._formationEmploye;
    }

    set formationEmploye(value: Formation) {
      this._formationEmploye = value;
    }
    public save() {
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Formation/save', this.formationEmploye).subscribe(
        data => {
          // console.log(data);
          this.toast.success(`${this.formationEmploye.employe.fullName} add formation employe to the database.`, 'conge Added', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.formations.push(this.cloneFormation(this.formationEmploye));
          console.log('data lli b7ra d5lty dyal formation hhh'+ data);
          this.formationEmploye = null;
        }, eror => {
          console.log('eroro', eror);
        }
      );
    }
    // public deleteByReference(conge: CongeEmploye) {
    //   this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/conge/deleteById/id/' + conge.id).subscribe(
    //     data => {
    //       console.log('delete sucess' + data);
    //       this.findAll();
    //     });
    // }


    cloneFormation(formation: Formation): Formation {
      const myClone = new Formation();
      myClone.annee = formation.annee;
      myClone.attestation = formation.attestation;
      myClone.domaine = formation.domaine;
      myClone.employe = formation.employe;
      myClone.etablissement= formation.etablissement;
      myClone.id = formation.id;
      myClone.mention = formation.mention;
      myClone.ville = formation.ville;
      return myClone;
    }


    public findFormationByDoti( doti: number) {

      this.http.get<Array<Formation>>('http://localhost:8080/gestionDesEmployee-Api/Formation/findByemployeDoti/doti/'+ doti).subscribe(
        data => {
          console.log('ha data formations d un emp' + data);
          this.formations = data
         , eror => {
          console.log('eroro'+ eror);
        }

    });
  }
}
