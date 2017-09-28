import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Apartment } from '../apartment';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class ApartmentDataService {

  constructor(private http: Http, private router: Router) { }

  getActiveListings(): Observable<Apartment[]> {
    return this.http
      .get('http://localhost:4567/api/apartments')
      .map(response => response.json());
  }

  getMyListings(): Observable<Apartment[]> {
    return this.http
      .get('http://localhost:4567/api/apartments/mine', { withCredentials: true })
      .map(response => response.json());
  }

  deactivate(apartment: Apartment) {
    //    const payload = { apartment };
    console.log("hello?");
    return this.http
      .post('http://localhost:4567/api/apartments/deactivate', { withCredentials: true })
      .map(response => null);
  }
}
