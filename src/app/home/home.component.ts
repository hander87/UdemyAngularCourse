import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   },
    // );

    // My Observable
    const myObs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First package')
      }, 2000);
      setTimeout(() => {
        observer.next('Second package')
      }, 4000);
      setTimeout(() => {
        // observer.error('Something went wrong...')
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next('Third unused package (will not output)')
      }, 8000);
    });

    myObs.subscribe(
      (data: string) => { console.log('Calling Obs : ' + data); },
      (error: string) => { console.log('Calling Error: ' + error); },
      () => { console.log('Completed'); }
    );

  }

}
