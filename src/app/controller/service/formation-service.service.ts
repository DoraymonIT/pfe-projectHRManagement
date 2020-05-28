import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {
  get ajouteFormation(): String {
    return this._ajouteFormation;
  }
public formationEmployeNull(){
    this.formationEmploye = null;
}
  set ajouteFormation(value: String) {
    this._ajouteFormation = value;
  }
  public ajouteFormationTitre(){
    this._ajouteFormation = 'Formulaire pour affecter une formation a un employe';
  }
  private _formations: Array<Formation>;
  private _formationEmploye: Formation;
  private _ajouteFormation: String;
    constructor(private http: HttpClient,
      private toast: ToastrService) { }
public setformation(formationn: Formation) {
      this._formationEmploye = formationn;
}
public editercetteFormation(formation: Formation){
      this._formationEmploye = formation;
}
public imprimerLesFormations(value: Array<Formation>) {
  this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Formation/listeDesFormationsPdf', value).subscribe(
    data => {
      this.toast.success(` document est bien preparer`, ' document preparer', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
    }, eror => {
      console.log('eroro', eror);
    });
}
     public findallFourmationsByDoti(value: string) {
       this.http.get<Array<Formation>>('http://localhost:8080/gestionDesEmployee-Api/Formation/findByemployeDoti/doti/' + value).subscribe(
         data => {
           this._formations = data;
         }, eror => {
           console.log('eroro', eror);
         });
     }
    get formations(): Array<Formation> {
      if (this._formations == null) {
        this._formations = new Array<Formation>();
        this._formations.forEach(formation => {
          formation = new Formation();
          formation.employe = new Employe();
        });
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
    // tslint:disable-next-line:max-line-length
    if ((this.formationEmploye.employe == null || this.formationEmploye.annee == null || this.formationEmploye.mention == null || this.formationEmploye.domaine == null || this.formationEmploye.ville == null || this.formationEmploye.etablissement == null || this.formationEmploye.attestation == null) || (this.formationEmploye.employe == null && this.formationEmploye.annee == null && this.formationEmploye.mention == null && this.formationEmploye.domaine == null && this.formationEmploye.ville == null && this.formationEmploye.etablissement == null && this.formationEmploye.attestation == null)) {
      this.toast.error(`remplir toutes les champ`, 'champ vide', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteFormation = 'champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
      this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Formation/save', this.formationEmploye).subscribe(
        data => {
          // console.log(data);
          this.toast.success(`${this.formationEmploye.employe.fullName} add formation employe to the database.`, 'conge Added', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.formations.push(this.cloneFormation(this.formationEmploye));
          this._ajouteFormation = 'formation ajouter';
          document.getElementById('span').style.color = 'green';
          this.formationEmploye = null;
        }, eror => {
          console.log('eroro', eror);
        }
      );
    }
  }
  public update() {
      // tslint:disable-next-line:max-line-length
      if ((this.formationEmploye.employe == null || this.formationEmploye.annee == null || this.formationEmploye.mention == null || this.formationEmploye.domaine == null || this.formationEmploye.ville == null || this.formationEmploye.etablissement == null || this.formationEmploye.attestation == null) || (this.formationEmploye.employe == null && this.formationEmploye.annee == null && this.formationEmploye.mention == null && this.formationEmploye.domaine == null && this.formationEmploye.ville == null && this.formationEmploye.etablissement == null && this.formationEmploye.attestation == null)) {
        this.toast.error(`remplir toutes les champ`, 'champ vide', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteFormation = 'champ est vide';
        document.getElementById('span').style.color = 'red';
      } else {
        this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Formation/update', this.formationEmploye).subscribe(
        data => {
          this.toast.info(`${this.formationEmploye.employe.fullName} add formation employe to the database.`, 'conge Added', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.formations.push(this.cloneFormation(this.formationEmploye));
          this._ajouteFormation = 'formation modifier';
          document.getElementById('span').style.color = 'green';
          this.formationEmploye = null;
        }, eror => {
          console.log('eroro', eror);
        }
      );
    }
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


    public findFormationByDoti( doti: string) {
      this.http.get<Array<Formation>>('http://localhost:8080/gestionDesEmployee-Api/Formation/findByemployeDoti/doti/'+ doti).subscribe(
        data => {
          this.formations = data
         , eror => {
          console.log('eroro'+ eror);
        }

    });
  }
}
