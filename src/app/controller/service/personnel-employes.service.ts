import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { HttpClient } from '@angular/common/http';
import { Departement } from '../model/departement.model';
import { GradeEmploye } from '../model/grade-employe.model';
import { Grade } from '../model/grade.model';
import { DepFonction } from '../model/dep-fonction.model';
import { Fonction } from '../model/fonction.model';
import { ToastrService } from 'ngx-toastr';
import { NoteGeneraleDeAnnee } from '../model/note-generale-de-annee.model';
import { SalaireEmploye } from '../model/salaire-employe.model';
import { Emoluments } from '../model/emoluments.model';
import { Revenu } from '../model/revenu.model';
import { EmailValidator } from '@angular/forms';
import { Email } from '../model/email.model';
import {RapportDeEvaluation} from '../model/rapport-de-evaluation.model';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonnelEmployesService {
  // tslint:disable-next-line:variable-name
  private _employe: Employe;
  // tslint:disable-next-line:variable-name
  private _employeNote: Array<Employe>
  // tslint:disable-next-line:variable-name
  private _employeConge: Array<Employe>
  // tslint:disable-next-line:variable-name
  private _employeFormation: Employe;
  // tslint:disable-next-line:variable-name
  private _employePrix: Employe;
  // tslint:disable-next-line:variable-name
  private _employePunition: Employe;
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
  private _employesByNoteGeneraleToday: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _employesByEvaluationToday: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _employesConge: Array<Employe>;
  private _employeDateEvaluation: Employe;
  // tslint:disable-next-line:variable-name
  private _employesByGrade: Array<Employe>;
  // tslint:disable-next-line:variable-name
  private _ajouteEmp: string;
  // tslint:disable-next-line:variable-name
  private _modifyEmp: string;
  // tslint:disable-next-line:variable-name
  private _Employesearch: Employe;
  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/gestionDesEmployee-Api/Employee/';
  constructor(private http: HttpClient,
    private toast: ToastrService) { }
  public infoUnEmployer(employe: Employe) {
    this.employeInfo = employe;
  }

  public ajouterEmpString() {
    this.ajouteEmp = ' Formulaire pour ajouter un employé au FSTG';
  }
  public modifyEmpString() {
    this.modifyEmp = ' Modifier Les données d un employé ';
  }
  // trouver Employer Par Nom Grade
  public trouverEmployerParNomGrade(value: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/' + value).subscribe(
      data => {
        this.employesByGrade = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade1: number;

  get grade1(): number {
    return this._grade1;
  }

  set grade1(value: number) {
    this._grade1 = value;
  }

  public trouverEmployerParNomGrade1() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade1').subscribe(
      data => {
       this.grade1 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _grade2: number;

  get grade2(): number {
    return this._grade2;
  }

  set grade2(value: number) {
    this._grade2 = value;
  }

  public trouverEmployerParNomGrade2() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade2').subscribe(
      data => {
        this.grade2 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _grade3: number;

  get grade3(): number {
    return this._grade3;
  }

  set grade3(value: number) {
    this._grade3 = value;
  }

  public trouverEmployerParNomGrade3() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade3').subscribe(
      data => {
        this.grade3 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _grade4: number;

  get grade4(): number {
    return this._grade4;
  }

  set grade4(value: number) {
    this._grade4 = value;
  }

  public trouverEmployerParNomGrade4() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade4').subscribe(
      data => {
        this.grade4 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade5: number;

  get grade5(): number {
    return this._grade5;
  }

  set grade5(value: number) {
    this._grade5 = value;
  }

  public trouverEmployerParNomGrade5() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade5').subscribe(
      data => {
        this.grade5 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade6: number;

  get grade6(): number {
    return this._grade6;
  }

  set grade6(value: number) {
    this._grade6 = value;
  }

  public trouverEmployerParNomGrade6() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade6').subscribe(
      data => {
        this.grade6 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade7: number;

  get grade7(): number {
    return this._grade7;
  }

  set grade7(value: number) {
    this._grade7 = value;
  }

  public trouverEmployerParNomGrade7() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade7').subscribe(
      data => {
        this.grade7 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade8: number;

  get grade8(): number {
    return this._grade8;
  }

  set grade8(value: number) {
    this._grade8 = value;
  }

  public trouverEmployerParNomGrade8() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade8').subscribe(
      data => {
        this.grade8 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade9: number;

  get grade9(): number {
    return this._grade9;
  }

  set grade9(value: number) {
    this._grade9 = value;
  }

  public trouverEmployerParNomGrade9() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade9').subscribe(
      data => {
        this.grade9 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _grade10: number;

  get grade10(): number {
    return this._grade10;
  }

  set grade10(value: number) {
    this._grade10 = value;
  }

  public trouverEmployerParNomGrade10() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDernierGradeGradeLibelle/libelle/grade10').subscribe(
      data => {
        this.grade10 = data.length;
      }, eror => {
        console.log('eroro', eror);
      });
  }


  // save
  public contacterUnEmploye() {
    // tslint:disable-next-line:max-line-length
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/NotificationEmploye/sendmail/email/' + this._email.emaill + '/subject/' + this._email.subject + '/content/' + this._email.text).subscribe(
      data => {
        if (data === 1) {
          this.toast.success(`${this.email.emaill} `, 'E-mail a été envoyé', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.email = null;
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouveremployeByDate(value: Date){
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDateDeProchainNote/dateDeProchainNote/' + value).subscribe(
      data => {
        this.employesByNoteGeneraleToday = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouveremployeByDateEvaluation(value: Date){
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDateProchainEvaluation/dateProchainEvaluation/' + value).subscribe(
      data => {
        this.employesByEvaluationToday = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouveremployeByDateAvancement(value: Date){
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDateAvancementPrevue/dateAvancementPrevue/' + value).subscribe(
      data => {
        this.employesByEvaluationToday = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public trouveremployeAyantEpuiselesoldeRestantes(){
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findLesEmployeAyantEpuiseSoldeRestant').subscribe(
      data => {
        this.employesConge = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouveremployeBysoldeRestantes(value: number) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findBySoldeRestantesCongeExceptionnel/soldeRestantesCongeExceptionnel/' + value).subscribe(
      data => {
        this.employesConge = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public findAllemployeAyantDateAvancementProche() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/getProchaineAvancement').subscribe(
      data => {
        this.employesByEvaluationToday = data ;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  // save
  public save() {
    // tslint:disable-next-line:max-line-length
    if ((this.employe.firstName == null ||this.employe.lastName == null || this.employe.cin == null || this.employe.adresse == null || this.employe.fonction == null || this.employe.dateDeNaissance == null || this.employe.lieuDeNaissance == null || this.employe.email == null) || (this.employe.firstName == null &&this.employe.lastName == null && this.employe.cin == null && this.employe.adresse == null && this.employe.fonction == null && this.employe.dateDeNaissance == null && this.employe.lieuDeNaissance == null && this.employe.email == null)) {
      this.toast.error(`Remplir toutes les champs`, 'Un champ est  vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._ajouteEmp = 'Champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
      this.http.post<number>(this._url + 'save', this.employe).subscribe(
        data => {
          if (data === -1) {
            this.toast.error(`Format du nom est incorrect`, 'format error', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
            this._ajouteEmp = 'format du nom est incorrect';
            document.getElementById('span').style.color = 'red';
          } else if (data === -2) {
            this.toast.error(`Format du email est incorrect`, 'format error', {
              timeOut: 1500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
            this._ajouteEmp = 'Format du email est incorrect';
            document.getElementById('span').style.color = 'red';
          } else {
            this.toast.success(`${this.employe.firstName +' '+ this.employe.lastName} a été ajouté au base de données`, 'employé ajouté', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
            this._ajouteEmp = 'Employé est bien ajouté avec succées';
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
    if ((this.EditEmploye.firstName == null ||this.EditEmploye.lastName == null || this.EditEmploye.adresse == null || this.EditEmploye.fonction == null  || this.EditEmploye.email == null || this.EditEmploye.tel == null) || (this.EditEmploye.firstName == null && this.EditEmploye.lastName && this.employe.adresse == null && this.EditEmploye.fonction == null &&  this.EditEmploye.email == null && this.EditEmploye.tel == null)) {
      this.toast.error(`Remplir toutes les champs`, 'champ est vide', {
        timeOut: 2500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
      this._modifyEmp = 'Un Champ est vide';
      document.getElementById('span').style.color = 'red';
    } else {
      this.http.post<number>(this._url + 'update', this.EditEmploye).subscribe(
        data => {
          if (data === -1) {
            this.toast.error(`format du nom est incorrect`, 'format error', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
            this._ajouteEmp = 'format du nom est incorrect';
            document.getElementById('span').style.color = 'red';
          } else if (data === -2) {
            this.toast.error(`format du email est incorrect`, 'format error', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
            this._ajouteEmp = 'format du email est incorrect';
            document.getElementById('span').style.color = 'red';
          } else {
            this.toast.info(`${this.EditEmploye.firstName +' '+ this.EditEmploye.lastName} a été bien modifié`, 'employé modifié', {
              timeOut: 2500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right'
            });
            this._modifyEmp = 'Employé est bien modifié aec succées';
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
    const myClone = new Employe();
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
    myClone.firstName = employe.firstName;
    myClone.lastName = employe.lastName;
    myClone.email = employe.email;
    myClone.lieuDeNaissance = employe.lieuDeNaissance;
    myClone.gender = employe.gender;
    myClone.situationFamiliale = employe.situationFamiliale;
    myClone.soldeRestantesCongeExceptionnel = employe.soldeRestantesCongeExceptionnel;
    myClone.sup = employe.sup;
    myClone.tel = employe.tel;
    myClone.pays = employe.pays;
    return myClone;
  }
  public findFonctionByDepartement(value: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<DepFonction>>('http://localhost:8080/gestionDesEmployee-Api/DepFonction/findByDepartemantNom/nomDepartemant/' + value).subscribe(
      data => {
        this.depFonctions = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameGrade: string;

  get fullnameGrade(): string {
    return this._fullnameGrade;
  }

  set fullnameGrade(value: string) {
    this._fullnameGrade = value;
  }

  public trouverEmployerGradeParDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if (data != null){
          this.fullnameGrade =  "==> Numero correspond employe : "+this.EditEmploye.firstName + " "+ this.EditEmploye.lastName;
          document.getElementById('fullnameGrade').style.color= 'white';
        }else {
          this.fullnameGrade = " Numero Incorrect";
          document.getElementById('fullnameGrade').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }

  private _fullname: string;

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  public trouverEmployerParSonDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if (data != null){
          this.EditEmploye = data;
          this.email.emaill = data.email;
          this.fullname =  "==> Numero correspond employe : "+this.EditEmploye.firstName + " "+ this.EditEmploye.lastName;
          document.getElementById('fullname').style.color= 'white';
        }else {
          this.fullname = " Numero Incorrect";
          document.getElementById('fullname').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameContacter: string;

  get fullnameContacter(): string {
    return this._fullnameContacter;
  }

  set fullnameContacter(value: string) {
    this._fullnameContacter = value;
  }

  public trouverEmployerContacteerParSonDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if (data != null){
          this.email.emaill = data.email;
          this.fullnameContacter = "==> Numero correspond employe : "+ data.firstName + " "+ data.lastName;
          document.getElementById('fullnameContacter').style.color= 'white';
        }else {
          this.fullnameContacter = "Numero incorrect";
          document.getElementById('fullnameContacter').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameDemande: string;

  get fullnameDemande(): string {
    return this._fullnameDemande;
  }

  set fullnameDemande(value: string) {
    this._fullnameDemande = value;
  }

  public trouverEmployerDemandeParSonDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnameDemande = "==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnamedemande').style.color= 'white';
        }else{
          this.fullnameDemande = "Numero Incorrect";
          document.getElementById('fullnamedemande').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameConge: string;

  get fullnameConge(): string {
    return this._fullnameConge;
  }

  set fullnameConge(value: string) {
    this._fullnameConge = value;
  }

  public trouverEmployerCongeParSonDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnameConge = "==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnameconge').style.color= 'white';
        }else{
          this.fullnameConge = "Numero Incorrect";
          document.getElementById('fullnameconge').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameFormation: string;

  get fullnameFormation(): string {
    return this._fullnameFormation;
  }

  set fullnameFormation(value: string) {
    this._fullnameFormation = value;
  }
  public GetEmployerFormationByDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnameFormation ="==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnameformation').style.color= 'white';
        }else{
          this.fullnameFormation = "Numero Incorrect";
          document.getElementById('fullnameformation').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnamePrix: string;

  get fullnamePrix(): string {
    return this._fullnamePrix;
  }

  set fullnamePrix(value: string) {
    this._fullnamePrix = value;
  }
  public GetEmployerPrixByDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnamePrix ="==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnamePrix').style.color= 'white';
        }else{
          this.fullnamePrix = "Numero Incorrect";
          document.getElementById('fullnamePrix').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnamePunition: string;

  get fullnamePunition(): string {
    return this._fullnamePunition;
  }

  set fullnamePunition(value: string) {
    this._fullnamePunition = value;
  }
  public GetEmployePunitionByDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnamePunition ="==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnamePunition').style.color= 'white';
        }else{
          this.fullnamePunition = "Numero Incorrect";
          document.getElementById('fullnamePunition').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameNote: string;

  get fullnameNote(): string {
    return this._fullnameNote;
  }

  set fullnameNote(value: string) {
    this._fullnameNote = value;
  }

  public GetEmployeNoteByDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnameNote ="==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnameNote').style.color= 'white';
        }else{
          this.fullnameNote = "Numero Incorrect";
          document.getElementById('fullnameNote').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnameDepartement: string;

  get fullnameDepartement(): string {
    return this._fullnameDepartement;
  }

  set fullnameDepartement(value: string) {
    this._fullnameDepartement = value;
  }

  public GetEmployeDepartementByDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this.fullnameDepartement ="==>  Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnameDepartement').style.color= 'white';
        }else{
          this.fullnameDepartement = "Numero Incorrect";
          document.getElementById('fullnameDepartement').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  private _fullnamePermanence: string;

  get fullnamePermanence(): string {
    return this._fullnamePermanence;
  }

  set fullnamePermanence(value: string) {
    this._fullnamePermanence = value;
  }

  public GetEmployePermanenceParSonDoti(value: string) {
    this.http.get<Employe>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDoti/doti/' + value).subscribe(
      data => {
        if(data != null){
          this._fullnamePermanence ="==> Numero correspond employe : " + data.firstName + " " + data.lastName;
          document.getElementById('fullnamePermanence').style.color= 'white';
        }else{
          this._fullnamePermanence = "Numero Incorrect";
          document.getElementById('fullnamePermanence').style.color= 'red';
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverEmployerAyantBesoinDeNote() {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findLesEmployeAyantLaNoteGeneraleAujourdHui').subscribe(
      data => {
        this.employeNote = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public exporterLaListeDesEmployeExcel() : void{
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeExcel').subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format excel.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesEmployeAvecSoldeDonneePdf(employes: Array<Employe>) : void{
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeAvecSoldeDonneePdf', employes).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employes est bien exporter en format pdf.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesEmployeAvecSoldeCongéDonneeExcel(employes: Array<Employe>) : void{
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeAvecSoldeCongéDonneeExcel', employes).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format Excel.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }


  public listeDesEmployeAvecSoldeCongéExcel() : void{
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeAvecSoldeCongéExcel').subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format Excel.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesEmployeParGradeExcel(value: Array<Employe>) : void{
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeParGradeExcel', value).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format Excel.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesEmployeDeDepartementPdf(value : Array<Employe>) : void{
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeDeDepartementPdf',value).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format PDF.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesEmployeDeGradePdf(value: Array<Employe>) : void{
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeDeGradePdf', value).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format PDF.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public listeDesEmployeParDepartementExcel(value: Array<Employe>) : void{
    this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeParDepartementExcel', value).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format Excel.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public listeDesEmployeAvecSoldePdf() : void{
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployeAvecSoldePdf').subscribe(
      data => {
        if(data == 1){
          this.toast.success(` liste des employés est bien exporter en format Excel.`, 'document prepared', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public imprimerInfoLesEmploye() : void{
     this.http.post<number>('http://localhost:8080/gestionDesEmployee-Api/demandeDeDocument/infoEmployePdf', this.employeInfo).subscribe(
      data => {
        if(data == 1){
          this.toast.success(` Document info employé est bien preparé.`, 'Document preparer', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
        }
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverListeEmployesParNomDepartement(value: string): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/' + value).subscribe(
      data => {
        this.employesByDep = data;
        console.log(value+" :  "+this.employesByDep.length);
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }
private _biologie: number;

  get biologie(): number {
    return this._biologie;
  }

  set biologie(value: number) {
    this._biologie = value;
  }

  public trouverListeEmployesParNomDepartementBiologie(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/Biologie').subscribe(
      data => {
        this.biologie=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }

  private _informatique: number;


  get informatique(): number {
    return this._informatique;
  }

  set informatique(value: number) {
    this._informatique = value;
  }

  public trouverListeEmployesParNomDepartementInformatique(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/Informatique').subscribe(
      data => {
        this.informatique=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }

  private _chimie: number;

  get chimie(): number {
    return this._chimie;
  }

  set chimie(value: number) {
    this._chimie = value;
  }

  public trouverListeEmployesParNomDepartementChimie(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/Chimie').subscribe(
      data => {
        this.chimie=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }

  private _physique: number;


  get physique(): number {
    return this._physique;
  }

  set physique(value: number) {
    this._physique = value;
  }

  public trouverListeEmployesParNomDepartementphysique(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/physique').subscribe(
      data => {
        this.physique=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }

  private _TEC: number;

  get TEC(): number {
    return this._TEC;
  }

  set TEC(value: number) {
    this._TEC = value;
  }

  public trouverListeEmployesParNomDepartementTec(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/TEC').subscribe(
      data => {
        this.TEC=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }

  private _Mathémathique: number;


  get Mathémathique(): number {
    return this._Mathémathique;
  }

  set Mathémathique(value: number) {
    this._Mathémathique = value;
  }

  public trouverListeEmployesParNomDepartementMathémathique(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/Mathémathique').subscribe(
      data => {
        this.Mathémathique=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }

  private _Géologie: number;


  get Géologie(): number {
    return this._Géologie;
  }

  set Géologie(value: number) {
    this._Géologie = value;
  }

  public trouverListeEmployesParNomDepartementGéologie(): number {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/Géologie').subscribe(
      data => {
        this.Géologie=data.length
      }, eror => {
        console.log('eroro', eror);
      });
    return this.employesByDep.length
  }
  public getCongeActuelle() {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/getCongeActuelle').subscribe(
      data => {
        this.employeConge = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public getCongeBetween(date1: Date, date2: Date) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/getCongeBetween/date1/'+date1 + '/date2/'+ date2 ).subscribe(
      data => {
        this.employeConge = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public trouverEmployerParNomDepartement(value: string) {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findByDepNom/nomDepartement/' + value).subscribe(
      data => {
        this.employesByDep = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }
  public trouverEmployerNoteGeneraleToday() {
    this.http.get<Array<Employe>>('http://localhost:8080/gestionDesEmployee-Api/Employee/findLesEmployeAyantLaNoteGeneraleAujourdHui').subscribe(
      data => {
        this.employesByNoteGeneraleToday = data;
      }, eror => {
        console.log('eroro', eror);
      });
  }

  public trouverSalaireParSonDoti(value: string) {
    this.http.get<SalaireEmploye>('http://localhost:8080/gestionDesEmployee-Api/SalaireEmploye/findByEmployeDoti/doti/' + value).subscribe(
      data => {
        this._saleireEmolye = data;
      }, eror => {
        console.log('eroro', eror);
      }
    );
  }
  public deleteByReference(employe: Employe) {
    this.http.delete<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/deleteById/id/' + employe.id).subscribe(
      data => {
        if(data == 1){
          this.toast.success(`  employé est bien Supprimé.`, 'Supprimer employé', {
            timeOut: 2500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.findAll();
        }
      });
  }
  public editerUnEmployer(employe: Employe) {
    this.EditEmploye = employe;
  }
  public imprimerListeEmploye() {
    this.http.get<number>('http://localhost:8080/gestionDesEmployee-Api/Employee/listeDesEmployePdf').subscribe(
      data => {
        if (data > 0) {
          this.toast.success(` la liste des employes est bien traité sous format PDF`, 'Voir votre fichier de téléchargement', {
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
  private _employeess: any[];

  get employeess(): any[] {
    return this._employeess;
  }

  set employeess(value: any[]) {
    this._employeess = value;
  }

  public findAll() {
    this.http.get<Array<Employe>>(this._url + 'findAll').subscribe(
      data => {
        this.employes = data;
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
        data.dernierNote = new NoteGeneraleDeAnnee();
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
  get employesByNoteGeneraleToday(): Array<Employe> {
    if (this._employesByNoteGeneraleToday == null) {
      this._employesByNoteGeneraleToday = new Array<Employe>();
      this._employesByNoteGeneraleToday.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierGrade = new GradeEmploye();
        data.dernierNote = new NoteGeneraleDeAnnee();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employesByNoteGeneraleToday;
  }
  set employesByNoteGeneraleToday(value: Array<Employe>) {
    this._employesByNoteGeneraleToday = value;
  }


  get depFonctions(): Array<DepFonction> {
    if (this._depFonctions == null) {
      this._depFonctions = new Array<DepFonction>();
      this._depFonctions.forEach(deep => {
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
    if (this._EditEmploye == null) {
      this._EditEmploye = new Employe();
      this._EditEmploye.dernierGrade = new GradeEmploye();
      this._EditEmploye.dernierGrade.grade = new Grade();
      this._EditEmploye.dep = new Departement();
      this._EditEmploye.fonction = new Fonction();
      this._EditEmploye.dernierNote = new NoteGeneraleDeAnnee();
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

  get employeFormation(): Employe {
    if (this._employeFormation == null) {
      this._employeFormation = new Employe();
      this._employeFormation.dernierGrade = new GradeEmploye();
      this._employeFormation.dernierGrade.grade = new Grade();
      this._employeFormation.dernierNote = new NoteGeneraleDeAnnee();
      this._employeFormation.sup = new Employe();
      this._employeFormation.fonction = new Fonction();
      this._employeFormation.dep = new Departement();
      this._employeFormation.dernierNote = new NoteGeneraleDeAnnee();
    }

    return this._employeFormation;
  }

  set employeFormation(value: Employe) {
    this._employeFormation = value;
  }

  get employePrix(): Employe {
    if (this._employePrix == null) {
      this._employePrix = new Employe();
      this._employePrix.dernierGrade = new GradeEmploye();
      this._employePrix.dernierGrade.grade = new Grade();
      this._employePrix.dernierNote = new NoteGeneraleDeAnnee();
      this._employePrix.sup = new Employe();
      this._employePrix.fonction = new Fonction();
      this._employePrix.dep = new Departement();
      this._employePrix.dernierNote = new NoteGeneraleDeAnnee();
    }
    return this._employePrix;
  }

  set employePrix(value: Employe) {
    this._employePrix = value;
  }

  get employePunition(): Employe {
    if (this._employePunition == null) {
      this._employePunition = new Employe();
      this._employePunition.dernierGrade = new GradeEmploye();
      this._employePunition.dernierGrade.grade = new Grade();
      this._employePunition.dernierNote = new NoteGeneraleDeAnnee();
      this._employePunition.sup = new Employe();
      this._employePunition.fonction = new Fonction();
      this._employePunition.dep = new Departement();
      this._employePunition.dernierNote = new NoteGeneraleDeAnnee();
    }
    return this._employePunition;
  }

  set employePunition(value: Employe) {
    this._employePunition = value;
  }

  get employesByEvaluationToday(): Array<Employe> {
    if (this._employesByEvaluationToday == null) {
      this._employesByEvaluationToday = new Array<Employe>();
      this._employesByEvaluationToday.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierGrade = new GradeEmploye();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employesByEvaluationToday;
  }


  get employesConge(): Array<Employe> {
    if (this._employesConge == null) {
      this._employesConge = new Array<Employe>();
      this._employesConge.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierGrade = new GradeEmploye();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employesConge;
  }

  set employesConge(value: Array<Employe>) {
    this._employesConge = value;
  }

  set employesByEvaluationToday(value: Array<Employe>) {
    this._employesByEvaluationToday = value;
  }

  get employeDateEvaluation(): Employe {
    if (this._employeDateEvaluation == null) {
      this._employeDateEvaluation = new Employe();
      this._employeDateEvaluation.dernierGrade = new GradeEmploye();
      this._employeDateEvaluation.dernierGrade.grade = new Grade();
      this._employeDateEvaluation.dernierNote = new NoteGeneraleDeAnnee();
      this._employeDateEvaluation.sup = new Employe();
      this._employeDateEvaluation.fonction = new Fonction();
      this._employeDateEvaluation.dep = new Departement();
      this._employeDateEvaluation.dernierNote = new NoteGeneraleDeAnnee();
    }
    return this._employeDateEvaluation;
  }

  set employeDateEvaluation(value: Employe) {
    this._employeDateEvaluation = value;
  }

  get employeNote(): Array<Employe> {
    if (this._employeNote == null) {
      this._employeNote = new Array<Employe>();
      this._employeNote.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierNote = new NoteGeneraleDeAnnee();
        data.dernierGrade = new GradeEmploye();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employeNote;
  }

  set employeNote(value: Array<Employe>) {
    this._employeNote = value;
  }

  get employeConge(): Array<Employe> {
    if (this._employeConge == null) {
      this._employeConge = new Array<Employe>();
      this._employeConge.forEach(data => {
        data = new Employe();
        data.dep = new Departement();
        data.dernierGrade = new GradeEmploye();
        data.dernierGrade.grade = new Grade();
        data.sup = new Employe();
      });
    }
    return this._employeConge;
  }

  set employeConge(value: Array<Employe>) {
    this._employeConge = value;
  }

  get Employesearch(): Employe {
    if(this._Employesearch== null){
      this.Employesearch = new Employe();
    }
    return this._Employesearch;
  }

  set Employesearch(value: Employe) {
    this._Employesearch = value;
  }
}
