import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent implements OnInit {

  // counterWithActions: string[];

  constructor(private counterService: CounterService) {
    // this.counterWithActions = this.counterService.counterActions;
  }

  ngOnInit() {
  }

}
