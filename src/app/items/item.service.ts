import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

  private authUrl = 'http://192.168.99.100:3000//users';  // URL to web api

  private currentUser = JSON.parse(localStorage.getItem('currentUser'));

  private headers = new Headers({'Content-Type' : 'application/json'});

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    this.headers.set('X-User-Email', this.currentUser.email);
    this.headers.set('X-User-Token', this.currentUser.authentication_token);
    return this.http.get(`${this.authUrl}//${this.currentUser.id}//items`, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Item[])
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    this.headers.set('X-User-Email', this.currentUser.email);
    this.headers.set('X-User-Token', this.currentUser.authentication_token);
    return this.http.delete(`${this.authUrl}//${this.currentUser.id}//items//${id}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }

}
