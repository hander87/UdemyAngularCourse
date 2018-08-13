import { Component, OnInit } from '@angular/core';

import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  accounts: { name:string, status: string }[] = [];

  constructor(private AccountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.AccountService.accounts;
  }

}
