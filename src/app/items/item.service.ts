import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

  private authUrl = 'https://blocitoffapi.herokuapp.com//users';  // URL to web api

  private headers = new Headers({'Content-Type' : 'application/json'});

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    let headers: Headers = this.getHeaders();
    let currentUser: any = this.getCurrentUser();
    return this.http.get(`${this.authUrl}//${currentUser.id}//items`, {headers: headers})
      .toPromise()
      .then(response => response.json() as Item[])
      .catch(this.handleError);
  }

  create(name: String): Promise<Item> {
    let currentUser: any = this.getCurrentUser();
    return this.http.post(`${this.authUrl}//${currentUser.id}//items`, JSON.stringify({item: {name: name, user_id: currentUser.id}}), {headers: this.headers})
      .toPromise()
      .then((response: Response) => response.json() as Item)
      .catch(this.handleError);
  }

  update(item: Item): Promise<Item> {
    let headers: Headers = this.getHeaders();
    let currentUser: any = this.getCurrentUser();
    return this.http.put(`${this.authUrl}//${currentUser.id}//items//${item.id}`, JSON.stringify({item: { completed: true }}), {headers: headers})
      .toPromise()
      .then((response: Response) => response.json() as Item)
      .catch(this.handleError);
  }

  private getCurrentUser(): any {
    return JSON.parse(localStorage.currentUser);
  }

  private getHeaders(): Headers {
    let currentUser: any = this.getCurrentUser();
    this.headers.set('X-User-Email', currentUser.email);
    this.headers.set('X-User-Token', currentUser.authentication_token);
    return this.headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('an error occurred', error);
    return Promise.reject(error.message || error);
  }

}
