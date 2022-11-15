import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  strenth = '';

  ngOnInit(): void {}
  color = 'gray';
  easy = '';
  medium = '';
  strong = '';

  changeHandler(event: any) {
    console.log(event);
    const lettersLow = 'qwertyuiopasdfghjklzxcvbnm';
    const lettersUp = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_-+=|/.,:;"[]{}';
    let isLeters = '';
    let isSymbols = '';
    let isDigits = '';
    if (event.length === 0) {
      this.color = 'gray';
    } else if (event.length < 8) {
      this.color = 'red';
    } else {
      for (let i = 0; i < event.length; i++) {
        if (lettersLow.includes(event[i]) || lettersUp.includes(event[i])) {
          isLeters = 'true';
        } else if (digits.includes(event[i])) {
          isDigits = 'true';
        } else if (symbols.includes(event[i])) {
          isSymbols = 'true';
        }
      }

      if (event.length === 0) {
        this.strenth = 'gray';
      }
      if (event.length < 8) {
        this.strenth = 'red';
      }
      if (isLeters && isSymbols && isDigits) {
        this.strong = 'green';
        this.color = this.strong;
        this.medium = '';
      }
      if (
        (isLeters && isSymbols) ||
        (isSymbols && isDigits) ||
        (isLeters && isDigits)
      ) {
        this.medium = 'yellow';
        this.color = this.medium;
        this.easy = '';
      }
      if (isDigits || isLeters || isSymbols) {
        this.easy = 'red';
        this.color = this.easy;
      }
    }
    console.log(this.color);
  }
}
