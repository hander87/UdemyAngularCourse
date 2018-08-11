import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timerGoing = false;
  timer: any = null;

  @Output() numberEvent: EventEmitter<number> = new EventEmitter();
  timerNumber: number = 0;

  constructor() { }

  gameStart() {
      console.log('Start!');
      this.timerGoing = true;
      this.timer = setInterval( () => {
        this.timerNumber = this.timerNumber + 1;
        this.numberEvent.emit(this.timerNumber);
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
