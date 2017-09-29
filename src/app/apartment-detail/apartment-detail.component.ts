import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { User } from '../user';
import { SessionDataService } from '../session-data/session-data.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
  
  @Input()
  apartment: Apartment;
  currentUser: User;

  constructor(private service: SessionDataService) { 
  }

  ngOnInit() {
    this.service  
      .userChanged
      .subscribe(user=> this.currentUser = user);   
    this.currentUser = this.service.currentUser;
  }

}
