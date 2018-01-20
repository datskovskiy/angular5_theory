import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates = [
    new Date(2015, 4, 3).toDateString(),
    new Date(2015, 2, 1).toDateString(),
    new Date(2018, 1, 2).toDateString()
  ];
 
  constructor(){

  }

  addCar(){
    this.addCarStatus = true; 
    this.cars.push(this.carName);
    this.carName = ''; 
  }

}
