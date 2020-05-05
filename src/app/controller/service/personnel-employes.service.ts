import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { HttpClient } from '@angular/common/http';
import { Departement } from '../model/departement.model';


@Injectable({
  providedIn: 'root'
})
export class PersonnelEmployesService {
  private _employe: Employe;
  private _employes: Array<Employe>;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Employee/';
  constructor(private http: HttpClient) { }
  public save() {
    this.http.post<number>(this._url + 'save', this.employe).subscribe(
      data => {
        console.log(data);
          this.employes.push(this.cloneEmploye(this.employe));
          this.employe = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  cloneEmploye(employe: Employe): Employe {
    const myClone = new Employe() ;
    myClone.adresse = employe.adresse;
    myClone.cin = employe.cin;
    myClone.compteBancaireRib = employe.compteBancaireRib;
    // myClone.dateAvancementPrevue = Ca sera calculer;
    myClone.dateEntree = employe.dateEntree;
    myClone.dateDeNaissance = employe.dateDeNaissance;
   myClone.dateProchainEvaluation = new Date(employe.dateEntree.getTime() + (1000 * 60 * 60 * 24 * 365 ));

    myClone.dateSortie = null
    myClone.dep = employe.dep;
    myClone.dernierGrade = employe.dernierGrade;
    myClone.dernierNote = null;
    myClone.doti = employe.doti;
    myClone.enfants = employe.enfants;
    myClone.fullName = employe.fullName;
    myClone.email = employe.email;
    myClone.lieuDeNaissance = employe.lieuDeNaissance;
    myClone.gender = employe.gender;
    myClone.situationFamiliale = employe.situationFamiliale;
    myClone.soldeRestantesCongéExceptionnel = employe.soldeRestantesCongéExceptionnel;
    myClone.sup = employe.dep.chef;
    myClone.tel = employe.tel;
    myClone.pays = employe.pays;
    return myClone;
  }





//
public findAll() {
  this.http.get<Array<Employe>>(this._url+'findAll').subscribe(
    data => {
      console.log('ha data' + data);
      this._employes = data ;
    }, eror => {
      console.log('eroro',eror);
    }
  );

}
  get employe(): Employe {
    if (this._employe == null) {
      this._employe = new Employe();
      this._employes.forEach(data => {
        data = new Employe();
       data.dep = new Departement();
 });
    }
    return this._employe;
  }
  set employe(value: Employe) {
    this._employe = value;
  }
  get employes(): Array<Employe> {
    if (this._employes == null) {
      this._employes = new Array<Employe>();
      this._employes.forEach(data => {
           data = new Employe();
          data.dep = new Departement();
    });
  }
    return this._employes;
}
  set employes(value: Array<Employe>) {
    this._employes = value;
  }
}
