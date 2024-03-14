import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogFromComponent } from './components/blog-from/blog-from.component';
import { PostService } from './core/services/post.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    BlogFromComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[]
})
export class AdminModule { }
