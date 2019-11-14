import { Component, OnInit } from '@angular/core';
import {BlogDetailService} from '../blog-detail/blog-detail.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EditBlogService} from './edit-blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  constructor(private editBlogService: EditBlogService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}
  blog;
  blogId;
  url = 'http://localhost:8080/blog/updateBlog';
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.blogId = id;
    }),
      this.editBlogService.getDetails(this.blogId).subscribe((data) => {
        this.blog = data;
        console.log(data);
      });
  }

  save() {
    if (this.blog.title != null && this.blog.category != null && this.blog.privacy != null && this.blog.description != null && this.blog.blog != null) {
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.http.post(this.url, this.blog, {headers}).subscribe( data => {
        console.log(data);
        alert('Changes Saved');
        this.router.navigate(['/myprofile']);
      });
    } else {
      alert('Fill All Marked Fields');
    }
  }

}
