import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})

export class MyListingsComponent implements OnInit {

  private apartments: Apartment[];
  private error: string;
  private selectedApartment: Apartment;

  constructor(private data: ApartmentDataService) { }

  ngOnInit() {
    this.data
      .getMyListings()
      .subscribe(
        apartments => this.apartments = apartments,
        () => this.error = 'Could not load apartment data'
      )
  }

  selectApartment(apartment: Apartment) {
    this.selectedApartment = apartment;
  }

  hideDetail() {
    this.selectedApartment = null;
  }

  deactivate(apartment: Apartment) {
     this.data
       .deactivate(apartment)
       .subscribe(() => apartment.is_active = false);
  }

  activate(apartment: Apartment) {
     this.data
       .activate(apartment)
       .subscribe(() => apartment.is_active = true);
  }
}
