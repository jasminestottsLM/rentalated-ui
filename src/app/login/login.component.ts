import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  private message: string;
  private email: string;
  private password: string;

  constructor(private data: SessionDataService) { }

  submitLogin() {
    this.data
      .login(this.email, this.password)
      .subscribe(
        user => this.message = 'HOORAY! Your name is ' + user.first_name,
        e => this.message = 'Oh no!' + e
      );
    }

  ngOnInit() {
  } 
}
