import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { HttpClient } from '@angular/common/http';
import { Departement } from '../model/departement.model';
import {GradeEmploye} from '../model/grade-employe.model';
import {Grade} from '../model/grade.model';
import {DepFonction} from '../model/dep-fonction.model';
import {Fonction} from '../model/fonction.model';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class PersonnelEmployesService {
  private _employe: Employe;
  private _employes: Array<Employe>;
  private _depFonctions: Array<DepFonction>;
  private _EditEmploye: Employe;
  private _indice: number;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Employee/';
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  public save() {
    this.http.post<number>(this._url + 'save', this.employe).subscribe(
      data => {
        console.log(data);
        this.toast.success(`${this.employe.fullName} add employe to the database.`, 'employe Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
          this.employes.push(this.cloneEmploye(this.employe));
          this.employe = null;
      }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public update() {
    this.http.post<number>(this._url + 'update', this.EditEmploye).subscribe(
      data => {
        console.log(data);
        this.toast.info(`${this.employe.fullName} modify employe to the database.`, 'employe Modified', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.findAll();
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
//   myClone.dateProchainEvaluation = new Date(employe.dateEntree.getTime() + (1000 * 60 * 60 * 24 * 365 ));
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
  public findFonctionByDepartement(value: string) {
    this.http.get<Array<DepFonction>>('http://localhost:8080/gestionDesEmployee-Api/DepFonction/findByDepartemantNom/nomDepartemant/'+ value).subscribe(
      data => {
        console.log('ha data' + data);
        this._depFonctions = data ;
        console.log('ha dep fonction'+this.depFonctions);
        }, eror => {
        console.log('eroro',eror);
      }
    );
  }
  public trouverEmployerParSonDoti(value: number) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        console.log('ha data' + data);
        this._EditEmploye = data ;
        console.log('ha  employe' + this._EditEmploye);
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public deleteByReference(employe: Employe){
  this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/deleteById/id/' + employe.id).subscribe(
    data => {
  console.log('delete sucess' + data);
  this.findAll();
});
   }
  public editerUnEmployer(employe: Employe){
    this.EditEmploye = employe;
  }

public findAll() {
  this.http.get<Array<Employe>>(this._url + 'findAll').subscribe(
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
      this._employe.dernierGrade = new GradeEmploye();
      this._employe.dernierGrade.grade = new Grade();
      this._employe.dep = new Departement();
      this._employe.fonction = new Fonction();
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
           data.dernierGrade = new GradeEmploye();
           data.dernierGrade.grade = new Grade();
           data.sup = new Employe();
    });
  }
    return this._employes;
}
  set employes(value: Array<Employe>) {
    this._employes = value;
  }

  get depFonctions(): Array<DepFonction> {
    if(this._depFonctions ==  null) {
      this._depFonctions = new Array<DepFonction>();
      this._depFonctions.forEach( deep =>{
        deep.depatement = new Departement();
        deep.fonction = new Fonction();
      });
    }
    return this._depFonctions;
  }

  get EditEmploye(): Employe {
    if( this._EditEmploye == null ) {
      this._EditEmploye = new Employe();
      this._EditEmploye.dernierGrade = new GradeEmploye();
      this._EditEmploye.dernierGrade.grade = new Grade();
      this._EditEmploye.dep = new Departement();
      this._EditEmploye.fonction = new Fonction();
    }
    return this._EditEmploye;
  }

  set EditEmploye(value: Employe) {
    this._EditEmploye = value;
  }


  get indice(): number {
    return this._indice;
  }

  set indice(value: number) {
    this._indice = value;
  }
}
