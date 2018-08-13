import { Component, Input } from '@angular/core';

import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]

})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // SERVICE is made here, w IMPORT, PROVIDERS and CONST. SERVICE is then Outputed below
  constructor(
    private logginService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.logginService.logStatusChanged(status);
    this.accountService.statusUpdated.emit(status);
  }
}
