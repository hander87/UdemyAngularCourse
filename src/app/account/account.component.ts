import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]

})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // SERVICE is made here, w IMPORT, PROVIDERS and CONST. SERVICE is then Outputed below
  constructor(private logginService: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.logginService.logStatusChanged(status);
  }
}
