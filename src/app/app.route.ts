import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {AddBlogComponent} from './add-blog/add-blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';

export const MAIN_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: BlogDetailComponent},
  {path: 'myprofile', component: MyprofileComponent},
  {path: 'myprofile/:id', component: EditBlogComponent},
  {path: 'addblog', component: AddBlogComponent},

];
