import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  theTimerNumber: number = 0;
  theOddTimerNumber: number = 0;
  theEvenTimerNumber: number = 1;

  // Arrays
  oddNumberArray: number[] = [];
  evenNumberArray: number[] = [];

  numberFromGameControl(number) {
    if( number % 2 == 0) {
      this.evenNumberArray.push(number);
    } else {
      this.oddNumberArray.push(number);
    }
  }

}
