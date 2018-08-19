import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  fblink = 'https://udemyangularcourse-http.firebaseio.com/data.json';

  storeServers(servers: any[]) {
    const myHeaders = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(this.fblink, servers, {headers: myHeaders});
    return this.http.put(this.fblink, servers, {headers: myHeaders});
  }

  getServers() {
    return this.http.get(this.fblink);
  }

}
