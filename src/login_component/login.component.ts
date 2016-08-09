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
    var data = this.loginForm.value
    console.log(data)
    this._userService.login(data.email, data.password).subscribe((result) => {
      if (result) {
        console.log(result)
        this._router.navigate(['dashboard'])
      }
      else {
        alert("Incorrect Email or Password.\nPlease try again.")//HACK change to shake box
      }
    })
  }
}
