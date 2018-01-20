import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: [{name: string, year: number}] = 
    [
      {name: 'Audi', year: 2015},
      {name: 'BMW', year: 2017},
      {name: 'Mazda', year: 2014},
    ]
  
  constructor(){
  }

  updateCarList(car: {name: string, year: number}){
    this.cars.push(car);
  }
}
