import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService {

  private headers = new Headers({'Content-Type' : 'application/json'});

  private authUrl = 'http://192.168.99.100:3000//users';  // URL to web api

  constructor(private http: Http) { }

  signUp(user: User) {
    return this.http.post(this.authUrl, JSON.stringify({user: user}), {headers: this.headers});
  }

  signIn(email: string, password: string) {
    return this.http.post(`${this.authUrl}//sign_in`, JSON.stringify({ user: { email: email, password: password }}), {headers: this.headers})
      .map((response: Response) => {
        let user = response.json();
        if (user && user.authentication_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  signOut() {
    localStorage.removeItem('currentUser');
    return this.http.delete(`${this.authUrl}//sign_out`, {headers: this.headers});
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
