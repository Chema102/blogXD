import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/pages/login/login.component';
import { HomeComponent } from './components/home/pages/home/home.component';
import { AdminComponent } from './components/admin/pages/admin/admin.component';
import { PageBlogComponent } from './components/home/pages/page-blog/page-blog.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'blog/:id', component: PageBlogComponent },
  { path: '', component: HomeComponent,},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
