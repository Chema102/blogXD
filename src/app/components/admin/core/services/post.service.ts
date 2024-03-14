import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, IPostAdd } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _HTTP: HttpClient) { }

  get(): Observable<IPost[]>{
    return this._HTTP.get<IPost[]>('https://localhost:7031/Post')

  }

  getById(id: number): Observable<IPost>{
    return this._HTTP.get<IPost>(`https://localhost:7031/Post/${id}`)
  }

  Delete(id : number): Observable<boolean>{
    return this._HTTP.delete<boolean>(`https://localhost:7031/Post/${id}`)
  }

  Add(body: IPostAdd): Observable<boolean>{
    return this._HTTP.post<boolean>('https://localhost:7031/Post',body)

  }

  Update(body: IPostAdd): Observable<boolean>{
    return this._HTTP.put<boolean>('https://localhost:7031/Post',body)
  }
}
