import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type' : 'application/json'});

  private authUrl = 'https://blocitoffapi.herokuapp.com//users';  // URL to web api

  constructor(private http: Http) { }

  signUp(user: User): Promise<any> {
    return this.http.post(this.authUrl, JSON.stringify({user: user}), {headers: this.headers})
      .toPromise()
      .then((response: Response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('This request has failed' + response.status);
        } else {
          return response;
        }
      });
  }

  signIn(email: string, password: string): Promise<any> {
    return this.http.post(`${this.authUrl}//sign_in`, JSON.stringify({ user: { email: email, password: password }}), {headers: this.headers})
    .toPromise()
    .then((response: Response) => {
        let user = response.json();
        if (user && user.authentication_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        } else {
          throw new Error('This request has failed' + response.status);
        }

    });
  }

  signOut() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.headers.set('X-User-Token', user.authentication_token);
    localStorage.removeItem('currentUser');
    return this.http.delete(`${this.authUrl}//sign_out`, {headers: this.headers})
      .subscribe((res) => {
    });
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
