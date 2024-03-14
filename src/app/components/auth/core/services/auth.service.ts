import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private _HTTP: HttpClient) { }

  Login(correo:string , pass:string): Observable<any>{
    let login =
    {
      correo,
      pass
    }

    return this._HTTP.post<boolean>(`https://localhost:7031/User/login`, login);
  }

}
