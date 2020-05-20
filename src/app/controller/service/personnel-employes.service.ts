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
import {EmailValidator} from '@angular/forms';
import {Email} from '../model/email.model';



@Injectable({
  providedIn: 'root'
})
export class PersonnelEmployesService {
  // tslint:disable-next-line:variable-name
  private _employe: Employe;
  // tslint:disable-next-line:variable-name
  private _employes: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _depFonctions: Array<DepFonction>;
  // tslint:disable-next-line:variable-name
  private _EditEmploye: Employe;
  // tslint:disable-next-line:variable-name
  private _indice: number;
  // tslint:disable-next-line:variable-name
  private _employeInfo: Employe;
  // tslint:disable-next-line:variable-name
  private _saleireEmolye: SalaireEmploye;
  // tslint:disable-next-line:variable-name
  private _email: Email;
  // tslint:disable-next-line:variable-name
  private _employesByDep: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _employesByGrade: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _ajouteEmp: string;
  // tslint:disable-next-line:variable-name
  private _modifyEmp: string;
  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Employee/';
  constructor(private http: HttpClient,
              private toast: ToastrService) { }
  public infoUnEmployer(employe: Employe) {
    this._employeInfo = employe;
  }

public ajouterEmpString() {
    this.ajouteEmp = ' Formulaire pour ajouter un employe au FSTG';
}
  public modifyEmpString() {
    this.modifyEmp = ' Modifier Les donnes d un employe ';
  }
// trouver Employer Par Nom Grade
  public trouverEmployerParNomGrade(value: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/' + value).subscribe(
      data => {
        this.employesByGrade = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  // save
  public contacterUnEmploye() {
    // tslint:disable-next-line:max-line-length
      this.http.get<number>('http://localhost:8080//gestionDesEmployee-Api/NotificationEmploye/sendmail/email/' + this._email.email + '/subject/' + this._email.subject + '/content/' + this._email.text).subscribe(
        data => {
          if (data == 1) {
            this.toast.success(`${this._email.email} `, 'email sended', {
              timeOut: 1500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
          }}, eror => {
          console.log('eroro', eror);
        }
      );
    }
// save
  public save() {
    // tslint:disable-next-line:max-line-length
    if (this.employe.fullName == null || this.employe.cin == null || this.employe.adresse == null || this.employe.fonction == null || this.employe.dateDeNaissance == null || this.employe.lieuDeNaissance == null || this.employe.email == null) {
      this.toast.error(`remplir toutes les champ`, 'champ vide', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteEmp = 'champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
    this.http.post<number>(this._url + 'save', this.employe).subscribe(
      data => {
        if (data === -1) {
          this.toast.error(`format du nom est incorrect`, 'format error', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteEmp = 'format du nom est incorrect';
          document.getElementById('span').style.color = 'red';
        } else if (data === -2) {
          this.toast.error(`format du email est incorrect`, 'format error', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteEmp = 'format du email est incorrect';
          document.getElementById('span').style.color = 'red';
        } else {
        this.toast.success(`${this.employe.fullName} add employe to the database.`, 'employe Added', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._ajouteEmp = 'employe est bien ajouter';
        document.getElementById('span').style.color = 'green';
        this.employes.push(this.cloneEmploye(this.employe));
        this.employe = null;
        }
      }, eror => {
        console.log('eroro', eror);
      });
    }
  }
  public update() {
    // tslint:disable-next-line:max-line-length
    if (this.employe.fullName == null || this.employe.cin == null || this.employe.adresse == null || this.employe.fonction == null || this.employe.dateDeNaissance == null || this.employe.lieuDeNaissance == null || this.employe.email == null) {
      this.toast.error(`remplir toutes les champ`, 'champ vide', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._modifyEmp = 'champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
      this.http.post<number>(this._url + 'update', this.EditEmploye).subscribe(
      data => {
        if (data === -1) {
          this.toast.error(`format du nom est incorrect`, 'format error', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteEmp = 'format du nom est incorrect';
          document.getElementById('span').style.color = 'red';
        } else if (data === -2) {
          this.toast.error(`format du email est incorrect`, 'format error', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this._ajouteEmp = 'format du email est incorrect';
          document.getElementById('span').style.color = 'red';
        } else {
        this.toast.info(`${this.EditEmploye.fullName} modify employe to the database.`, 'employe Modified', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        this._modifyEmp = 'employe est bien modifie';
        document.getElementById('span').style.color = 'green';
        this.findAll();
        this.EditEmploye = null;
        }
      }, eror => {
        console.log('eroro', eror);
      });
    }
  }
  cloneEmploye(employe: Employe): Employe {
    const myClone = new Employe() ;
    myClone.adresse = employe.adresse;
    myClone.cin = employe.cin;
    myClone.compteBancaireRib = employe.compteBancaireRib;
    myClone.dateEntree = employe.dateEntree;
    myClone.dateDeNaissance = employe.dateDeNaissance;
    myClone.dateSortie = null;
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
    myClone.sup = employe.sup;
    myClone.tel = employe.tel;
    myClone.pays = employe.pays;
    return myClone;
  }
  public findFonctionByDepartement(value: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<DepFonction>>('http://localhost:8080/gestionDesEmployee-Api/DepFonction/findByDepartemantNom/nomDepartemant/' + value).subscribe(
      data => {
        this.depFonctions = data ;
        console.log('ha dep fonction' + this._depFonctions);
        }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverEmployerParSonDoti(value: number) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        this.EditEmploye = data ;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public imprimerInfoLesEmploye() {
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/infoEmployePdf' , this.employeInfo).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(` document info employe est bien preparé.`, 'document prepared', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverEmployerParNomDepartement(value: string) {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/' + value).subscribe(
      data => {
       this.employesByDep = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverSalaireParSonDoti(value: number) {
    this.http.get<SalaireEmploye>('http://localhost:8080/gestionDesEmployee-Api/SalaireEmploye/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        this._saleireEmolye = data ;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public deleteByReference(employe: Employe) {
  this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/deleteById/id/' + employe.id).subscribe(
    data => {
  this.findAll();
});
   }
  public editerUnEmployer(employe: Employe) {
    this.EditEmploye = employe;
  }
  public imprimerListeEmploye() {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployePdf').subscribe(
      data => {
        if (data > 0) {
        this.toast.success(` la liste des employe est bien imprimer`, 'ListeFonction imprimer', {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
public findAll() {
  this.http.get<Array<Employe>>(this._url + 'findAll').subscribe(
    data => {
      this._employes = data ;
    }, eror => {
      console.log('eroro', eror);
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
    if (this._depFonctions ==  null) {
      this._depFonctions = new Array<DepFonction>();
      this._depFonctions.forEach( deep => {
        deep = new DepFonction();
        deep.departemant = new Departement();
        deep.fonction = new Fonction();
      });
    }
    return this._depFonctions;
  }

  set depFonctions(value: Array<DepFonction>) {
    this._depFonctions = value;
  }

  get EditEmploye(): Employe {
    if ( this._EditEmploye == null ) {
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
    if (this._employeInfo == null) {
      this._employeInfo = new Employe();
      this._employeInfo.dernierGrade = new GradeEmploye();
      this._employeInfo.dernierGrade.grade = new Grade();
      this._employeInfo.dernierNote = new NoteGeneraleDeAnnee();
      this._employeInfo.sup = new Employe();
      this._employeInfo.fonction = new Fonction();
      this._employeInfo.dep = new Departement();
      this._employeInfo.dernierNote = new NoteGeneraleDeAnnee();
    }
    return this._employeInfo;
  }

  set employeInfo(value: Employe) {
    this._employeInfo = value;
  }

  get saleireEmolye(): SalaireEmploye {
    if (this._saleireEmolye == null) {
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

  get email(): Email {
    if (this._email == null) {
      this._email = new Email();
    }
    return this._email;
  }

  set email(value: Email) {
    this._email = value;
  }

  get ajouteEmp(): string {
    return this._ajouteEmp;
  }

  set ajouteEmp(value: string) {
    this._ajouteEmp = value;
  }

  get modifyEmp(): string {
    return this._modifyEmp;
  }

  set modifyEmp(value: string) {
    this._modifyEmp = value;
  }
}
