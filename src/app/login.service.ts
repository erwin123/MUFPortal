import { Injectable } from '@angular/core';
import { Usermaster } from './models/usermaster';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
  }

  login(username: string, password: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
      .post(this.loginUrl, { username: username, password: password, grant_type:"password" },{ headers: headers })
      .map(res => {
          if (res.json()[0]) {
              localStorage.setItem('currentUser',JSON.stringify(res.json()[0]));
              return JSON.stringify(res.json()[0]);
          }else
          {
            throw new Error("Ops, invalid username or password");
          }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
