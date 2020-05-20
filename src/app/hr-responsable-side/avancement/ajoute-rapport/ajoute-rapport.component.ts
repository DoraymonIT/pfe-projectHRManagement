import { Component, OnInit } from '@angular/core';
import {RapportDeEvaluation} from '../../../controller/model/rapport-de-evaluation.model';
import {Employe} from '../../../controller/model/employe.model';
import {Formation} from '../../../controller/model/formation.model';
import {NoteGeneraleDeAnnee} from '../../../controller/model/note-generale-de-annee.model';
import {PrixEmploye} from '../../../controller/model/prix-employe.model';
import {Prix} from '../../../controller/model/prix.model';
import {PunitionEmploye} from '../../../controller/model/punition-employe.model';
import {Punition} from '../../../controller/model/punition.model';
import {GradeEmploye} from '../../../controller/model/grade-employe.model';
import {Grade} from '../../../controller/model/grade.model';
import {AvancementServiceService} from '../../../controller/service/avancement-service.service';
import {PersonnelEmployesService} from '../../../controller/service/personnel-employes.service';
import {GradeService} from '../../../controller/service/grade.service';
import {FormationServiceService} from '../../../controller/service/formation-service.service';
import {PrixService} from '../../../controller/service/prix.service';
import {PrixSmallService} from '../../../controller/service/prix-small.service';
import {PunitionSmallService} from '../../../controller/service/punition-small.service';
import {PunitionService} from '../../../controller/service/punition.service';
import {NoteServiceService} from '../../../controller/service/note-service.service';

@Component({
  selector: 'app-ajoute-rapport',
  templateUrl: './ajoute-rapport.component.html',
  styleUrls: ['./ajoute-rapport.component.css']
})
export class AjouteRapportComponent implements OnInit {

  constructor(private avancementService: AvancementServiceService,
              private employeService: PersonnelEmployesService,
              private gradeService: GradeService,
              private formationService: FormationServiceService,
              private prixService: PrixService,
              private prixSmall: PrixSmallService,
              private punitionSmall: PunitionSmallService,
              private punitionService: PunitionService,
              private noteService: NoteServiceService) { }
  public div1: boolean;
  public div2: boolean;
  public div3: boolean;
  public div4: boolean;
  public div5: boolean;
  public div6: boolean;
  public div7: boolean;
  public div8: boolean;
  public div9: boolean;
  public div10: boolean;
  public div11: boolean;
  ngOnInit(): void {
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
    this.div6 = false;
    this.div7 = false;
    this.div8 = false;
    this.div9 = false;
    this.div10 = false;
    this.div11 = false;
    this.prixSmall.findAll();
    this.punitionSmall.findAll();
  }
  public findAllGradeEmployeByDoti(doti: number) {
    this.gradeService.findAllGradeEmployeByDoti(doti);
  }
  get punitionEmploye(): PunitionEmploye {
    return this.punitionService.punitionEmploye;
  }
  get punitions(): Array<Punition> {
    return this.punitionSmall.ps;
  }
  get ps(): Array<Prix> {
    return this.prixSmall.ps;
  }
  get gradesEployess(): Array<GradeEmploye> {
    return this.gradeService.gradesEployess;
  }
  get rapportEvaluation(): RapportDeEvaluation {
    return this.avancementService.rapportEvaluation;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;
  }
  get formationEmploye(): Formation {
    return this.formationService.formationEmploye;
  }
  get prixEmploye(): PrixEmploye {
    return this.prixService.prixEmploye;
  }
  public afficher1() {
    if (this.div1 === false) {
      document.getElementById('div1').style.display = 'inline-flex';
      this.div1 = true;
    } else {
      document.getElementById('div1').style.display = 'none';
      this.div1 = false;

    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
    document.getElementById('div6').style.display = 'none';
  }
  public afficher2() {
    if (this.div2 === false) {
      document.getElementById('div2').style.display = 'inline-flex';
      this.div2 = true;
    } else {
      document.getElementById('div2').style.display = 'none';
      this.div2 = false;
    }
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
    document.getElementById('div6').style.display = 'none';

  }
  public afficher3() {
    if (this.div3 === false) {
      document.getElementById('div3').style.display = 'inline-block';
      this.div3 = true;
    } else {
      document.getElementById('div3').style.display = 'none';
      this.div3 = false;
    }
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
    document.getElementById('div6').style.display = 'none';

  }
  public afficher4() {
    if (this.div4 === false) {
      document.getElementById('div4').style.display = 'inline-block';
      this.div4 = true;
    } else {
      document.getElementById('div4').style.display = 'none';
      this.div4 = false;
    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
    document.getElementById('div6').style.display = 'none';

  }
  public afficher5() {
    document.getElementById('div7').style.display = 'none';
    document.getElementById('div8').style.display = 'none';
    document.getElementById('div9').style.display = 'none';
    document.getElementById('div10').style.display = 'none';
    document.getElementById('div11').style.display = 'none';
    if (this.div5 === false) {
      document.getElementById('div5').style.display = 'inline-block';
      this.div5 = true;
    } else {
      document.getElementById('div5').style.display = 'none';
      this.div5 = false;
    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div6').style.display = 'none';
  }
  public afficher6() {
    if (this.div6 === false) {
      document.getElementById('div6').style.display = 'inline-block';
      this.div6 = true;
    } else {
      document.getElementById('div6').style.display = 'none';
      this.div6 = false;
    }
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div4').style.display = 'none';
    document.getElementById('div5').style.display = 'none';
  }
  public saveformation() {
this.rapportEvaluation.formation.push(this.formationEmploye);
}
  public saveprix() {
    this.rapportEvaluation.prix.push(this.prixEmploye);
}
  public savepunition() {
    this.rapportEvaluation.punition.push(this.punitionEmploye);
}
  get note(): NoteGeneraleDeAnnee {
    return this.noteService.note;
  }
  public saveNote() {
    this.rapportEvaluation.noteGenerale.push(this.note);
}
  public afficher7() {
    if (this.div7 === false) {
      document.getElementById('div7').style.display = 'inline-block';
      this.div7 = true;
    } else {
      document.getElementById('div7').style.display = 'none';
      this.div7 = false;

    }
    document.getElementById('div8').style.display = 'none';
    document.getElementById('div9').style.display = 'none';
    document.getElementById('div10').style.display = 'none';
    document.getElementById('div11').style.display = 'none';
  }
  public afficher8() {
    if (this.div8 === false) {
      document.getElementById('div8').style.display = 'inline-block';
      this.div8 = true;
    } else {
      document.getElementById('div8').style.display = 'none';
      this.div8 = false;

    }
    document.getElementById('div7').style.display = 'none';
    document.getElementById('div9').style.display = 'none';
    document.getElementById('div10').style.display = 'none';
    document.getElementById('div11').style.display = 'none';
  }
  public afficher9() {
    if (this.div9 === false) {
      document.getElementById('div9').style.display = 'inline-block';
      this.div9 = true;
    } else {
      document.getElementById('div9').style.display = 'none';
      this.div9 = false;
    }
    document.getElementById('div8').style.display = 'none';
    document.getElementById('div7').style.display = 'none';
    document.getElementById('div10').style.display = 'none';
    document.getElementById('div11').style.display = 'none';
  }
  public afficher10() {
    if (this.div10 === false) {
      document.getElementById('div10').style.display = 'inline-block';
      this.div10 = true;
    } else {
      document.getElementById('div10').style.display = 'none';
      this.div10 = false;

    }
    document.getElementById('div8').style.display = 'none';
    document.getElementById('div9').style.display = 'none';
    document.getElementById('div7').style.display = 'none';
    document.getElementById('div11').style.display = 'none';
  }
  public afficher11() {
    if (this.div11 === false) {
      document.getElementById('div11').style.display = 'inline-block';
      this.div11 = true;
    } else {
      document.getElementById('div11').style.display = 'none';
      this.div11 = false;

    }
    document.getElementById('div8').style.display = 'none';
    document.getElementById('div9').style.display = 'none';
    document.getElementById('div10').style.display = 'none';
    document.getElementById('div7').style.display = 'none';
  }
  public getformation() {
    this.rapportEvaluation.formation.forEach(formation => {
      if (formation.attestation === this.formationEmploye.attestation) {
        this.formationService.setformation(formation);
      }
    });
  }
  public getprix() {
    this.rapportEvaluation.prix.forEach(prixx => {
      if (prixx.prix.libelle === this.prixEmploye.prix.libelle) {
        this.prixService.setprix(prixx);
      }
    });

  }
  public getpunition() {
    this.rapportEvaluation.punition.forEach(punitionn => {
      if (punitionn.punition.libelle === this.punitionEmploye.punition.libelle) {
        this.punitionService.setPunition(punitionn);
      }
    });
  }
  public getnote() {
    this.rapportEvaluation.noteGenerale.forEach(notee => {
      if (notee.id === this.note.id) {
        this.noteService.setNote(notee);
      }
    });
  }
}
