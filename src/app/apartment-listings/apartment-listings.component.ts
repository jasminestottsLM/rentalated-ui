import { Component, OnInit, Input } from '@angular/core';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Apartment } from '../apartment';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';

@Component({
  selector: 'app-apartment-listings',
  templateUrl: './apartment-listings.component.html',
  styleUrls: ['./apartment-listings.component.css']
})
export class ApartmentListingsComponent implements OnInit {

  apartments: Apartment[];
  error: string;
  selectedApartment: Apartment;
  currentUser: User;
  likedUsers: User[];

  constructor(private data: ApartmentDataService, private service: SessionDataService) { }

  ngOnInit() {
    this.data
      .getActiveListings()
      .subscribe(
        apartments => this.apartments = apartments,
        () => this.error = 'Could not load apartment data'
      );
    this.currentUser = this.service.currentUser;
  }

  selectApartment(apartment: Apartment) {
    this.selectedApartment = apartment;
  }

  hideDetail() {
    this.selectedApartment = null;
  }

  like(apartment: Apartment) {
     this.data
       .like(apartment)
       .subscribe(likedBy => this.likedUsers = likedBy);
    console.log(this.likedUsers);
  }
}
