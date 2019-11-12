import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  title;
  image;
  category;
  privacy;
  description;
  blog;
  url = 'http://localhost:8080/blog/addBlog';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addBlog() {
    if (this.title != null && this.category != null && this.privacy != null && this.description != null && this.blog != null) {
      const ar = {title: this.title, category: this.category, image: this.image, description: this.description, privacy: this.privacy, blog: this.blog};
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.http.post(this.url, ar, {headers}).subscribe( data => {
        console.log(data);
        alert('Product Added');
        this.router.navigate(['/home']);
      });
    } else {
      alert('Fill All Marked Fields');
    }
  }
}
