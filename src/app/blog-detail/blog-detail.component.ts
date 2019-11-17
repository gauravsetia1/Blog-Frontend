import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlogDetailService} from './blog-detail.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
user;
  blogId;
  blog;
  cmt;
  abc;
  constructor(private blogDetailService: BlogDetailService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.blogId = id;
    }),
      this.blogDetailService.getDetails(this.blogId).subscribe((data) => {
        this.blog = data;
        console.log(data);
      });
    this.blogDetailService.currentUser().subscribe( data => {
      this.user = data;
      console.log(data);
    });
    this.blogDetailService.getComment(this.blogId).subscribe( data => {
      this.abc = data;
    });
  }

  following(id) {
    this.blogDetailService.addFollower(id).subscribe( data => {
      console.log(data);
      alert('You Started Following ' + this.blog.users.name);
      this.router.navigate(['/home']);
    });
  }

  addComment() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const ar = {comment: this.cmt }
    return this.http.post('http://localhost:8080/comment/add/' + this.blogId, ar, {headers}).subscribe(data => {
      console.log(data);
      /*this.ngOnInit();*/
      alert('Comment Added');
      this.blogDetailService.getComment(this.blogId).subscribe( data => {
        this.abc = data;
      });
    });
  }
}
