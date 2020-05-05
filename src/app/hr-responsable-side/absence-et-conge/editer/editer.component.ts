import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/controller/model/car.model';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {


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
  clonedCars: { [s: string]: Car; } = {};
  onRowEditInit(car: Car) {
    //
}

onRowEditSave(car: Car) {
 //
}

onRowEditCancel(car: Car, index: number) {
//
}
}
