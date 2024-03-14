import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizacionService {
  private isUserSubject = new BehaviorSubject<boolean>(false);
  isUser$ = this.isUserSubject.asObservable();

  constructor() {
    this.checkUserStatus();
  }
  checkUserStatus(): void {
    const isUser = localStorage.getItem('user') != null;
    this.isUserSubject.next(isUser);
  }

  updateUserStatus(isUser: boolean): void {
    this.isUserSubject.next(isUser);
    if (!isUser) {
      localStorage.removeItem('userKey');
    }

    this.checkUserStatus();
  }

}
