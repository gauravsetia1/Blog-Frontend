import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  users;
  bool=0;
  constructor(private http: HttpClient, private appService: AppService, private router: Router) { }
  name;
  phone;
  gender;
  email;
  password;
  cpassword;
  url = 'http://localhost:8080/users/addUsers';
  ngOnInit() {
    if (this.appService.checkLogin()) {
      this.router.navigate(['/home']);
    }
    this.appService.getusers().subscribe(data => {
      this.users = data;
    });
  }

  finalData() {
    // tslint:disable-next-line:triple-equals
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == this.email) {
        alert('Email is Taken');
        this.bool = 1;
        break;
      } else {
        this.bool = 0;
      }
    }

    if (this.bool == 0) {
      if (this.email != null && this.password != null && this.name != null && this.phone != null && this.gender != null) {
        /*if (this.phone.length == 10) {*/
          if (this.password == this.cpassword) {
            const ar = {email: this.email, password: this.password, name: this.name, phone: this.phone, gender: this.gender};
            return this.http.post(this.url, ar).subscribe(data => {
              alert('User Created');
              this.router.navigate(['/login']);
            });
          } else {
            alert('Re-Enter password');
          }
        /*} else {
          alert('Mobile No. should be of 10 digits');
        }*/
      } else {
        alert('fill all fields');
      }
    }

  }
}
