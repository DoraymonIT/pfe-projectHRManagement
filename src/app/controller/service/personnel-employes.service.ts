import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { HttpClient } from '@angular/common/http';
import { Departement } from '../model/departement.model';
import {GradeEmploye} from '../model/grade-employe.model';
import {Grade} from '../model/grade.model';
import {DepFonction} from '../model/dep-fonction.model';
import {Fonction} from '../model/fonction.model';
import {ToastrService} from 'ngx-toastr';
import {NoteGeneraleDeAnnee} from '../model/note-generale-de-annee.model';
import {SalaireEmploye} from '../model/salaire-employe.model';
import {Emoluments} from '../model/emoluments.model';
import {Revenu} from '../model/revenu.model';



@Injectable({
  providedIn: 'root'
})
export class PersonnelEmployesService {
  private _employe: Employe;
  private _employes: Array<Employe>;
  private _depFonctions: Array<DepFonction>;
  private _EditEmploye: Employe;
  private _indice: number;
  private _employeInfo: Employe;
  private _saleireEmolye: SalaireEmploye;
  private _employesByDep : Array<Employe>;
  private _employesByGrade : Array<Employe>;
  // private _url = 'http://localhost:3000/characters';
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Employee/';
  constructor(private http: HttpClient,
              private toast: ToastrService,
              ) { }
  public infoUnEmployer(employe: Employe){
    this._employeInfo = employe;
  }


  public trouverEmployerParNomGrade(value: string) {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/' + value).subscribe(
      data => {
        // console.log('ha data' + data);
        console.log('ha data dyal employes qui ont m grade' + data);
        this.employesByGrade = data ;
        //console.log('ha  employe' + this._EditEmploye);
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }

  public save() {
    this.http.post<number>(this._url + 'save', this.employe).subscribe(
      data => {
        console.log('hadi hya data li inseriina new'+data);
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
        console.log('this employe hya lli drna lih update'+data);
        this.toast.info(`${this.EditEmploye.fullName} modify employe to the database.`, 'employe Modified', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this.findAll();
        this.EditEmploye = null;
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
        console.log('ha data dyal fonctions trouver a partir de dep' + data);
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
        console.log('ha data dyal find employe by son doti' + data);
        this._EditEmploye = data ;
        console.log('ha  employe' + this._EditEmploye);
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public trouverEmployerParNomDepartement(value: string) {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/' + value).subscribe(
      data => {
       console.log('ha data dyal employes dans un dep' + data);
        this.employesByDep = data ;

      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public trouverSalaireParSonDoti(value: number) {
    this.http.get<SalaireEmploye>('http://localhost:8080/gestionDesEmployee-Api/SalaireEmploye/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        console.log('ha data dyal salaires' + data);
        this._saleireEmolye = data ;
  //      console.log(this.saleireEmolye.assuranceMaladieObligatoire.montant)
    //    console.log(this.saleireEmolye.caisseMarocaineDeretrait.montant)
      //  console.log(this.saleireEmolye.impotSurLeRevenu.montant)
        //console.log(this.saleireEmolye.mutuelleCaisseRetraitEtDeces.montant)
        //console.log('ha  employe' + this._EditEmploye);
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
      console.log('ha data dyal all employes' + data);
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
  get employesByDep(): Array<Employe> {
    if (this._employesByDep == null) {
      this._employesByDep = new Array<Employe>();
      this._employesByDep.forEach(data => {
           data = new Employe();
           data.dep = new Departement();
           data.dernierGrade = new GradeEmploye();
           data.dernierGrade.grade = new Grade();
           data.sup = new Employe();
    });
  }
    return this._employesByDep;
}
set employesByDep(value: Array<Employe>) {
  this._employesByDep = value;
}

  get employesByGrade(): Array<Employe> {
    if (this._employesByGrade == null) {
      this._employesByGrade = new Array<Employe>();
      this._employesByGrade.forEach(data => {
           data = new Employe();
           data.dep = new Departement();
           data.dernierGrade = new GradeEmploye();
           data.dernierGrade.grade = new Grade();
           data.sup = new Employe();
    });
  }
    return this._employesByGrade;
}

   set employesByGrade(value: Array<Employe>) {
    this._employesByGrade = value;
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

  get employeInfo(): Employe {
    if(this._employeInfo == null){
      this._employeInfo = new Employe();
      this._employeInfo.dernierGrade = new GradeEmploye();
      this._employeInfo.dernierGrade.grade = new Grade();
      this._employeInfo.dernierNote = new NoteGeneraleDeAnnee();
      this._employeInfo.dernierNote.employe = new Employe();
      this._employeInfo.sup = new Employe();
      this._employeInfo.fonction = new Fonction();
      this._employeInfo.dep = new Departement();
      this._employeInfo.dep.chef = new Employe();
      this._employeInfo.dernierNote = new NoteGeneraleDeAnnee();
    }
    return this._employeInfo;
  }

  set employeInfo(value: Employe) {
    this._employeInfo = value;
  }

  get saleireEmolye(): SalaireEmploye {
    if(this._saleireEmolye == null){
      this._saleireEmolye = new SalaireEmploye();
      this._saleireEmolye.allocationDeEncadrement = new Emoluments();
      this._saleireEmolye.allocationDeEnseignement = new Emoluments();
      this._saleireEmolye.idemDeLaResidence = new Emoluments();
      this._saleireEmolye.idemFamialieleMarocaine = new Emoluments();
      this._saleireEmolye.assuranceMaladieObligatoire = new Revenu();
      this._saleireEmolye.caisseMarocaineDeretrait = new Revenu();
      this._saleireEmolye.impotSurLeRevenu = new Revenu();
      this._saleireEmolye.mutuelleCaisseRetraitEtDeces = new Revenu();
    }
    return this._saleireEmolye;
  }

  set saleireEmolye(value: SalaireEmploye) {
    this._saleireEmolye = value;
  }
}
