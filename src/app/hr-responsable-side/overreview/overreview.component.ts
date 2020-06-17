import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import {DepartemntService} from '../../controller/service/departemnt.service';
import {Departement} from '../../controller/model/departement.model';
import {PersonnelEmployesService} from '../../controller/service/personnel-employes.service';


export interface ages {
  nom: string;
  color: ThemePalette;
}
@Component({
  selector: "app-overreview",
  templateUrl: "./overreview.component.html",
  styleUrls: ["./overreview.component.css"],
})
export class OverreviewComponent implements OnInit {
  data: any;
  data2: any;
  data3: any;
//  employeService.trouverListeEmployesParNomDepartement("Biologie"),
  //employeService.trouverListeEmployesParNomDepartement("Informatique"),
  //employeService.trouverListeEmployesParNomDepartement("Chimie"),
  //employeService.trouverListeEmployesParNomDepartement("physique"),
  //employeService.trouverListeEmployesParNomDepartement("TEC"),
  //employeService.trouverListeEmployesParNomDepartement("Mathémathique"),
  //employeService.trouverListeEmployesParNomDepartement("Géologie")],
  constructor(private departementService: DepartemntService,
              private employeService: PersonnelEmployesService) {
    this.data = {
      labels: [
        "Biologie",
        "Informatique",
        "Chimie",
        "physique",
        "TEC",
        "Mathémathique",
        "Géologie",
      ],
      datasets: [
        {
          data: [29, 31, 33, 32, 15, 34, 30],
          backgroundColor: [
            "yellow",
            "black",
            "red",
            "green",
            "orange",
            "white",
            "pink",
          ],
        },
      ],
    };

    this.data2 = {
      labels: [
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5",
        "Grade 6",
        "Grade 7",
        "Grade 8",
        "Grade 9",
        "Grade 10",
        "Grade 11",
      ],
      datasets: [
        {
          backgroundColor: "#42A5F5",
          label:"Nombre d'employés par grade",
          data: [65, 59, 80, 81, 56, 55, 54, 80, 81, 56, 55],
        },
      ],
    };
  }

  agesCa: ages[] = [
    { nom: "Département de Phisique", color: "accent" },
    { nom: "Département de Chimie", color: "warn" },
    { nom: "Département de Matématique", color: "primary" },
    { nom: "Département de de Biologie", color: "accent" },
    { nom: "Département de Géologie", color: "primary" },
  ];
  ngOnInit() {this.departementService.findAll()}
  get deps(): Array<Departement> {
    return this.departementService.deps;
  }
}
