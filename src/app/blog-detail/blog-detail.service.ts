import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogDetailService {

  constructor(private http: HttpClient) {}

  getDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/blog/detail/' + id;
    return this.http.get(url, {headers});
  }

  addFollower(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/follow/new/UserId/' + id;
    return this.http.get(url, {headers});
  }

  currentUser() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/users/logUser';
    return this.http.get(url, {headers});
  }

  getFollowers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/follow/followers';
    return this.http.get(url, {headers});
  }

  getComment(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/comment/getCmt/' + id;
    return this.http.get(url, {headers});
  }
}
