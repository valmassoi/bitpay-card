import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

import { EmailValidators } from '../_validators/email.validators';
import { UserService } from '../_services/auth/user.service';

@Component({
  selector: 'login-form',
  templateUrl: 'src/login_component/login.component.html',
  styleUrls: ['src/login_component/login.component.css']
  // providers: [UserService] //get from main.ts (one service)
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
          this._router.navigate(['dashboard'])
        }
        else {
          // make boxes red
          this.isWrongLogin=true;
        }
      })
  }
}
