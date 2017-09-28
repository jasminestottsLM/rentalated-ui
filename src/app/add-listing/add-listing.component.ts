import { Component, OnInit } from '@angular/core';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Router } from '@angular/router';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  private apartments: Apartment[];
  private address: string;
  private city: string;
  private state: string;
  private zip_code: string;
  private rent: number;
  private number_of_bedrooms: number;
  private number_of_bathrooms: number;
  private square_footage: number;

  constructor(private data: ApartmentDataService, private router: Router) { }

  addApartment(apartment: Apartment) {
    this.data
      .add(this.address, this.city, this.state, this.zip_code, this.rent, this.number_of_bedrooms, this.number_of_bathrooms, this.square_footage)
      .subscribe(apartment => {
          this.router.navigate(['/my-listings']);
        });
  }

  ngOnInit() {
  }

}
