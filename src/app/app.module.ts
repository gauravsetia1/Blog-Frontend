import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppService} from './app.service';
import {AuthenticationService} from './authentication.service';
import {MyProfileService} from './myprofile/myprofile.service';
import {HomeService} from './home/home.service';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {BlogDetailService} from './blog-detail/blog-detail.service';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import {EditBlogService} from './edit-blog/edit-blog.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    MyprofileComponent,
    AddBlogComponent,
    BlogDetailComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppService,
    AuthenticationService,
    MyProfileService,
    HomeService,
    BlogDetailService,
    EditBlogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
