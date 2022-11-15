import {
  Component,
  DoCheck,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  strenth = '';
  color = 'gray';
  // raiting = '';
  ngOnInit(): void {}
  easy = '';
  medium = '';
  strong = '';

  changeHandler(event: any) {
    // console.log(event);
    const lettersLow = 'qwertyuiopasdfghjklzxcvbnm';
    const lettersUp = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_-+=|/.,:;"[]{}';
    let isLeters = '';
    let isSymbols = '';
    let isDigits = '';

    for (let i = 0; i < event.length; i++) {
      if (lettersLow.includes(event[i]) || lettersUp.includes(event[i])) {
        isLeters = 'true';
      } else if (digits.includes(event[i])) {
        isDigits = 'true';
      } else if (symbols.includes(event[i])) {
        isSymbols = 'true';
      }
    }
    console.log(isDigits);
    console.log(isLeters);
    if (event.length === 0) {
      this.color = 'gray';
    }
    if (event.length < 8) {
      this.color = 'red';
    }
    if (isLeters === 'true' && isSymbols === 'true' && isDigits === 'true') {
      this.color = 'green';
      this.strong = 'strong';
    }
    if (
      (isLeters === 'true' && isSymbols === 'true') ||
      (isSymbols === 'true' && isDigits === 'true') ||
      (isLeters === 'true' && isDigits === 'true')
    ) {
      this.color = 'yellow';
      this.medium = 'medium';
    }
    if (isDigits === 'true' || isLeters === 'true' || isSymbols === 'true') {
      this.color = 'red';
      this.easy = 'easy';
    }
    // console.log(this.raiting);
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }
}
// console.log({color});
