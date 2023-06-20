import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  celear(){
    this.mainDisply='0';
    this.oldNumber='';
    this.operator=''
  }
  mainDisply: string = '0';
  oldNumber: string = '';
  operator: string = '';

  digitclick(digi: string) {
    this.mainDisply = this.mainDisply + digi;
    this.mainDisply = Number(this.mainDisply).toString();
  }
  operatorclick(op: string) {
    this.oldNumber = this.mainDisply;
    this.mainDisply = '0';
    this.operator = op;
  }
  equal() {
    const a = Number(this.oldNumber);
    this.oldNumber='';
    const b = Number(this.mainDisply);
    switch (this.operator) {
      case '+':
        this.mainDisply = (a + b).toString();
        break;
      case '-':
        this.mainDisply = (a - b).toString();
        break;
      case '*':
        this.mainDisply = (a * b).toString();
        break;
      case '/':
        this.mainDisply = (a / b).toString();
        break;

      default:
        break;
    }
    this.operator='';
  }
}
