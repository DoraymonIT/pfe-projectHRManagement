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
          { brand: 'Apple', lastYearSale: '51%' },
          { brand: 'Samsung', lastYearSale: '83%'},
          { brand: 'Microsoft', lastYearSale: '38%' },
          { brand: 'Philips', lastYearSale: '49%'},
          { brand: 'Song', lastYearSale: '17%' },
          { brand: 'LG', lastYearSale: '52%'},

      ];
  }

}
