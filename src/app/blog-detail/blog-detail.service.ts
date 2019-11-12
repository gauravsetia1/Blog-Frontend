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
    const url = 'http://localhost:8080/blog/getBlog/' + id;
    return this.http.get(url, {headers});
  }

}
