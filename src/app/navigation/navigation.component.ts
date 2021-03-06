import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private currentUser: User;

  constructor(private service: SessionDataService, private router: Router) { }

  logout() {
    this.service
      .logout()
      .subscribe(currentUser => this.currentUser = currentUser);
    // have to subscribe or nothing will happen when you click the logout button
    // observables don't fire unless subscribers are present
    this.router.navigate(['/']);
    this.service.currentUser = null;
  }

  ngOnInit() {
    this.service  
      .getUser()
      .subscribe(currentUser => this.currentUser = currentUser);
    
    this.service
      .userChanged
      .subscribe(user => this.currentUser = user);
    // listens for changes to .userChanged and sets currentUser to the user passed in
  }

}
