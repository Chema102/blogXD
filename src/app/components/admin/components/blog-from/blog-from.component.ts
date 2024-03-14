import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost, IPostAdd } from '../../core/interface/post.interface';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-blog-from',
  templateUrl: './blog-from.component.html',
  styleUrls: ['./blog-from.component.sass'],
})
export class BlogFromComponent implements OnInit {
  @Input() isPadre!: boolean;
  @Input() pots!: IPost;
  @Output() isVisible = new EventEmitter<boolean>();
  @Output() IsUpdate = new EventEmitter<boolean>();

  blogForm!: FormGroup;


  constructor(private _postServices: PostService) {}
  
  ngOnInit(): void {

    this.blogForm = new FormGroup({
      title: new FormControl(this.pots.title || "", Validators.required),
      body: new FormControl(this.pots.body || "", Validators.required),
    });
  }

  regresar() {
    this.isVisible.emit(!this.isPadre);
  }

  onSubmit() {
    let isUser = Number.parseInt(localStorage.getItem('UserId') || '0');
    let body: IPostAdd = {
      AutorId: isUser,
      Body: this.blogForm.controls['body'].value,
      Title: this.blogForm.controls['title'].value,
      id: 0,
    };

    if(this.pots.id != body.id){
      body.id = this.pots.id
      body.Category = this.pots.categoryId,
      body.IsFeatured = this.pots.isFeatured

      this.update(body);
    }else {

      this.add(body);
    }
   
  }

  clear() {
    this.blogForm.reset();
  }

  add(body: IPostAdd){
    this._postServices.Add(body).subscribe((ap) => {
      if (!ap) return alert('no se agrego, Hubo un problema con el servidor');

      this.clear();
      alert('se agrego correctamente');
    });
  }

  update(body: IPostAdd){
    this._postServices.Update(body).subscribe(op =>{

      if(!op) return alert('no se agrego, Hubo un problema con el servidor');

      alert('se modifico correctamente')
      this.IsUpdate.emit(true);
    })
  }
}
