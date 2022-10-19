import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number = 0;
  num2: number = 0;

  mayorMenor: string = '...';

  constructor() {}

  calcular() {
    if(this.num1 < this.num2) {
      this.mayorMenor = 'menor';
    }else if(this.num1 > this.num2){
      this.mayorMenor = 'mayor';
    }else{
      this.mayorMenor = 'igual';
    }
  }
}
