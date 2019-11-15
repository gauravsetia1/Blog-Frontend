import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) {}

  getAllBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/blog/getBlog';
    return this.http.get(url, {headers});
  }

  getsearch(name) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/blog/search/' + name;
    return this.http.get(url, {headers});
  }

  addFollower(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:8080/blog/search/' + name;
    return this.http.get(url, {headers});
  }

}
