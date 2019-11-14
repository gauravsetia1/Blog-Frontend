import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search;
  blog;
  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAllBlogs().subscribe(data => {
      this.blog = data;
    });
  }

  onSelect(blog) {
    this.router.navigate(['/home', blog.id]);
  }

  searchfortitle() {
    this.homeService.getsearch(this.search).subscribe(data => {
      this.blog = data;
    });
  }
}
