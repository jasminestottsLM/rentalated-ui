import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SessionDataService } from '../session-data/session-data.service';

@Injectable()
export class UserDataService {

  baseUrl = 'http://localhost:4567/api/users';
  options = { withCredentials: true };
  
  constructor(private http: Http, private service: SessionDataService) { }

  addUser(first_name, last_name, email, password) {
    const payload = { first_name, last_name, email, password };
    return this.http
      .post(`${this.baseUrl}`, payload, this.options)
      .map(response=> response.json())
      .do(user => this.service.currentUser = user);
  }
}
