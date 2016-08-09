import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

import { EmailValidators } from '../_validators/email.validators';
import { UserService } from '../_services/auth/user.service';

@Component({
  selector: 'login-form',
  templateUrl: 'src/login_component/login.component.html',
  styleUrls: ['src/login_component/login.component.css'],
  providers: [UserService]
})
export class LoginComponent {
  loginForm: ControlGroup;
  isWrongLogin=false;

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _userService: UserService
  ) {

    this.loginForm = fb.group({
      email: ['', EmailValidators.validEmail],
      password: ['', Validators.required]
    })
  }

  login(){ //save
    this.isWrongLogin=false;
    var data = this.loginForm.value
    console.log(data)
    this._userService.login(data.email, data.password)
      .subscribe((result) => {
        if (result) {
          console.log("login succes:", result)
          this._router.navigate(['dashboard'])
          console.log("should nav to dashboard")
        }
        else {
          // alert("Incorrect Email or Password.\nPlease try again.")//HACK change to shake box
          // make boxes red
          this.isWrongLogin=true;
        }
      })
  }
}
