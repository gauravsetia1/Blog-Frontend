import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
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
  follow;
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
    this.blogDetailService.getFollowers().subscribe( data => {
      this.follow = data;
    });
  }

  following(id) {
    this.blogDetailService.addFollower(id).subscribe( data => {
      console.log(data);
      alert('You Started Following ' + this.blog.users.name);

    });
  }
}
