import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

import {TreeNode} from 'primeng/api';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
export interface ages {
  range: string;
  total: number;
  color: ThemePalette;
}
@Component({
  selector: 'app-overreview',
  templateUrl: './overreview.component.html',

  styleUrls: ['./overreview.component.css'],

})
export class OverreviewComponent implements OnInit {

  data: any; data2: any;

  constructor() {
      this.data = {
          labels: ['Biology','Informatique','Chimie','physique'],
          datasets: [
              {
                  data: [300, 50, 100,12],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          };
          this.data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Homme',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Femme',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
  }
  availableColors: ChipColor[] = [
    {name: 'Ahmed', color: 'accent'},
    {name: 'Khadija', color: 'accent'},
    {name: 'Khalid', color: 'accent'},
    {name: 'Hafssa', color: 'accent'}
  ];
  agesCa: ages[] = [
    {range: '30-35',total: 12, color: 'accent'},
    {range: '35-40',total: 112, color: 'warn'},
    {range: '40-45',total: 20, color: 'primary'},
    {range: '45-50',total: 33, color: 'accent'},
    {range: '55-60',total: 18, color: 'primary'},

  ];
  ngOnInit() {

}


}
