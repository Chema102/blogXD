import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ActualizacionService } from 'src/app/core/services/actualizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
   loginForm: FormGroup<any> = new FormGroup<any>({
    email: new FormControl('', [ Validators.required, Validators.email]),
    password:  new FormControl('', [ Validators.required, Validators.minLength(6)])});


  constructor(private _authService: AuthService,
    private _router: Router,
    private _actualizacionService: ActualizacionService
    ){

  }

  onSubmit(){

    this._authService.Login( this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe(ops =>{
      let myObjetc = JSON.stringify(ops.user)

      
      localStorage.setItem("UserId", ops.user.id)
      localStorage.setItem("user", myObjetc)

  
      this._actualizacionService.updateUserStatus(true)

      this._router.navigate(['']);
    })
      

  }
}
