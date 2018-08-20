import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  currentPage = 'recipies';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCKYSuqEwMTHXhDxHVzeIdTkmEPhk_vsbw',
      authDomain: 'udemyangularcourse-courseapp.firebaseapp.com'
    });
  }

  activateTopMenuPages(page: string) {
    this.currentPage = page;
  }

}
