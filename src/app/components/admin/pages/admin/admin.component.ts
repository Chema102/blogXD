import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/post.service';
import { IPost } from '../../core/interface/post.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent implements OnInit {
  isForm: boolean = false;

  listPost: IPost[] = [];
  
  post: IPost = {
    authorId: 0,
    body: '',
    id: 0,
    title: '',
  };

  constructor(private _postService: PostService) {}
  
  ngOnInit(): void {
    this.get();
  }

  addBlog() {
    this.isForm = !this.isForm;
  }

  visible(event: boolean) {
    this.isForm = event;
  }

  get() {
    this._postService.get().subscribe((op) => {
      this.listPost = op;
    });
  }

  delete(id: number) {
    const userInput = prompt('Escribe "yes" si quieres eliminar') || '';

    if (userInput.trim().toLocaleLowerCase() != 'yes')
      return alert('no se elimino, intentelo de nuevo');

    this._postService.Delete(id).subscribe((op) => {
      if (!op) return alert('no se elimino, Hubo un problema con el servidor');

      this.get();
      alert('se elimino correctamente');
    });
  }

  update(item: IPost) {
    this.post = item
    this.addBlog()
  }
}
