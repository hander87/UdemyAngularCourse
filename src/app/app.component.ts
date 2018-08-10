import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = new Date();
  secretOut = false;
  logs = [];

  switchSecretStatus() {
    if (this.secretOut == false) {
      this.secretOut = true;
    } else {
      this.secretOut = false;
    }

    // Timestamp
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeLog = hr + ':' + min + ':'  + sec + '"';

    // ID
    let idNum = this.logs.length + 1;

    // Insert Data into log
    this.logs.push('#ID ' + idNum + ' ' + timeLog);

  }

  getColor() {
    if ( this.logs.length > 5 ) {
       return 'blue';
    } else {
      return 'white';
    }
  }

}
