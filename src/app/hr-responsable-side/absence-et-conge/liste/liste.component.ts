import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor() { }
  sales: any[];

  ngOnInit() {
      this.sales = [
          { brand: 'Ahmed', lastYearSale: '5 jours' },
          { brand: 'Anas', lastYearSale: '8 jours'},
          { brand: 'Aziz', lastYearSale: '10 jours' },


      ];
  }

}
