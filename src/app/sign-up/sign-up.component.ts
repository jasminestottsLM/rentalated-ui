import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data/user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private first_name: string;
  private last_name: string;
  private email: string;
  private password: string;
  private user: User;

  constructor(private service: UserDataService, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.service
      .addUser(this.first_name, this.last_name, this.email, this.password)
      .subscribe(user => this.router.navigate(['/'])
    );
  }
}
