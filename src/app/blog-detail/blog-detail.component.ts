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

  blogId;
  blog;
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
  }

}
