import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private appService: AppService, private router: Router, private  authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.appService.checkLogin()) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.authenticationService.authenticate(this.email, this.password).subscribe(
      data => {
        this.appService.isLoggedIn(true);
        this.router.navigate(['/home']);
      }, (err) => {
        alert('Invalid email and password');
      });
  }

}
