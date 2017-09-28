import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';
import { Router } from '@angular/router';

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
      .subscribe(user => this.currentUser = user);
    // have to subscribe or nothing will happen when you click the logout button
    // observables don't fire unless subscribers are present
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.service
      .userChanged
      .subscribe(user => this.currentUser = user);
    // listens for changes to .userChanged and sets currentUser to the user passed in
  }

}
