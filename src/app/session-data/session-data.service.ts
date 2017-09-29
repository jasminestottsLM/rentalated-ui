import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
//importing classes
import 'rxjs/add/operator/do';
//importing source code for the .do operation

@Injectable()
export class SessionDataService {

  baseUrl = 'http://localhost:4567/api/sessions';
  options = { withCredentials: true };

  userChanged: Subject<User>;
  //declaring the subject- an object that represents an observable- to be broadcast

  currentUser: User;

  constructor(private http: Http) {
    this.userChanged = new Subject<User>();
    // initializing the subject
  }

  login(email: string, password: string): Observable<User> {
    const payload = { email, password };
    return this.http
      .post(this.baseUrl, payload, this.options)
      .map(response => response.status === 201 ? response.json() : null)
      // set status and response in java api to match
      // implicit response of responsejson() or null
      .do(user => this.userChanged.next(user))
      .do(user=> this.currentUser=user);
      // userChanged is a broadcast channel, and the next value sent is "user"
  }

  logout(): Observable<User> {
    return this.http
      .delete(`${this.baseUrl}/mine`, { withCredentials: true })
      .map(response => null)  //TODO finish the failure path?
      .do(user => this.userChanged.next(user));
  }
}
