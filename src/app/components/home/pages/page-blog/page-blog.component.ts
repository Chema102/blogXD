import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/components/admin/core/interface/post.interface';
import { PostService } from 'src/app/components/admin/core/services/post.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.sass'],
})
export class PageBlogComponent implements OnInit {
  Post: IPost = {
    authorId : 0,
    body: '',
    id: 0,
    title: '' 
  }
  constructor(
    private route: ActivatedRoute,
    private _post: PostService
    ) {}
  
  ngOnInit() {

    let id = Number.parseInt( this.route.snapshot.paramMap.get('id') || "0") 

    this._post.getById(id).subscribe(op =>{      
      this.Post = op
    })
    
  }

}
