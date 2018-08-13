import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  // providers: [UsersService]
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setActive(id);
  }
}
