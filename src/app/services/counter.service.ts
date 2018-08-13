import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  counterActions: string[] = [];

  constructor() { }

  countAction(id, status) {
    this.counterActions.push(status + ':' + id);
    console.log('counterActions: ' + this.counterActions);
  }


}
