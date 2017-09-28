import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private message: string;
  private email: string;
  private password: string;

  constructor(private data: SessionDataService, private router: Router) { }

  submitLogin() {
    this.data
      .login(this.email, this.password)
      .subscribe(
      user => {
        if (user) {
          this.router.navigate(['/my-listings']);
        }
        else {
          this.message = 'Incorrect Username or password';
        }
      },
      e => this.message = 'Oh no!' + e
      );
  }

  ngOnInit() {
  }
}

