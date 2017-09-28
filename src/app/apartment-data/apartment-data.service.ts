import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Apartment } from '../apartment';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class ApartmentDataService {

  private baseUrl = 'http://localhost:4567/api/apartments';

  constructor(private http: Http, private router: Router) { }

  getActiveListings(): Observable<Apartment[]> {
    return this.http
      .get(this.baseUrl)
      .map(response => response.json());
  }

  getMyListings(): Observable<Apartment[]> {
    return this.http
      .get(`${this.baseUrl}/mine`, { withCredentials: true })
      .map(response => response.json());
  }

  deactivate(apartment: Apartment) {
    const payload = { apartment };
    return this.http
      .post(`${this.baseUrl}/deactivate`, payload, { withCredentials: true })
      .subscribe();
      
  }
}
