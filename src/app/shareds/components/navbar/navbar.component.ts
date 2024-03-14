import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { ActualizacionService } from 'src/app/core/services/actualizacion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent{
  isUser: boolean = false;

  constructor(private _actualizacionService: ActualizacionService,
    private _route : Router
    ) {
    this._actualizacionService.isUser$.subscribe(status => {
      
      this.isUser = status;
    });
  }

  solir(){
    localStorage.removeItem("user")
    localStorage.removeItem("UserId")

    this._actualizacionService.updateUserStatus(false)

    this._route.navigate([''])
    
  }

}
