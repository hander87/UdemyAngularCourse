import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  fblink = 'https://udemyangularcourse-http.firebaseio.com/data.json';

  storeServers(servers: any[]) {
    return this.http.post(this.fblink, servers);
  }

}
