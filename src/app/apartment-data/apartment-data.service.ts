import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Apartment } from '../apartment';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApartmentDataService {

  private baseUrl = 'http://localhost:4567/api/apartments';
  id: string;
  apartment: Apartment;

  apartmentChanged: Subject<Apartment>;

  constructor(private http: Http, private router: Router) { 
    this.apartmentChanged = new Subject<Apartment>();
  }

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

  deactivate(apartment) {
    const payload = { id: apartment.id }; 
     return this.http
       .post(`${this.baseUrl}/deactivate`, payload, { withCredentials: true });
  }

  activate(apartment) {
    const payload = { id: apartment.id };
     return this.http
       .post(`${this.baseUrl}/activate`, payload, { withCredentials: true });
  }
}
