import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  fblink = 'https://udemyangularcourse-http.firebaseio.com/data';

  storeServers(servers: any[]) {
    const myHeaders = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(this.fblink, servers, {headers: myHeaders});
    return this.http.put(this.fblink, servers, {headers: myHeaders});
  }

  getServers() {
    return this.http.get(this.fblink)
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED: ' + server.name;
          }
          return data;
        }
      )
    ).pipe(catchError((error: Response) => {
        return throwError('Something went wrong :( ' + error);
      }
    ));
  }

}
