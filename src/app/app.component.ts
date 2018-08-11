import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theTimerNumber: number = 0;
  theOddTimerNumber: number = 0;
  theEvenTimerNumber: number = 0;

  // Arrays
  oddNumberArray: number[] = [];
  evenNumberArray: number[] = [];


  numberFromGameControl(number) {
    if( number % 2 == 0) {
      this.theEvenTimerNumber = number;
      this.oddNumberArray.push(number + 1);
      console.log(this.oddNumberArray);
    } else {
      this.theOddTimerNumber = number;
      this.evenNumberArray.push(number + 1);
      console.log(this.evenNumberArray);
    }
  }

}
