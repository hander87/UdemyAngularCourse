import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timerGoing = false;
  timer: any = null;
  timerNumber: number = 0;

  constructor() { }

  gameStart() {
      console.log('Start!');
      this.timerGoing = true;
      this.timer = setInterval( () => {
        this.timerNumber = this.timerNumber + 1;
      } , 1000);
  }

  gameStop() {
      console.log('Stop.');
      this.timerGoing = false;
      clearInterval(this.timer);
  }

  ngOnInit() {
  }

}
