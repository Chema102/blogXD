import { Component } from '@angular/core';
import { IPost } from 'src/app/components/admin/core/interface/post.interface';
import { PostService } from 'src/app/components/admin/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  listPost: IPost[]= []
  constructor(private _PostService: PostService){
    _PostService.get().subscribe(a =>{
      this.listPost = a;
    })
  }
}
