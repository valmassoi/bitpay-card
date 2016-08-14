import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

import {PasswordValidators} from '../../_validators/password.validators';

@Component({
  selector: 'password-form',
  templateUrl: 'src/dashboard/change-password/password.component.html',
  styleUrls: ['src/dashboard/change-password/password.component.css']
})
export class PasswordComponent {
  passwordForm: ControlGroup;
  isBadForm=false;

  constructor(
    fb: FormBuilder
  ) {
    this.passwordForm = fb.group({
      'password': ['', Validators.required],
      'newPassword': ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
              ])],
      'confirmPassword': ['', Validators.required]
    }, { validator: PasswordValidators.passwordsShouldMatch })
  }

  changePassword(){ //save
    this.isBadForm=false;
    let data = this.passwordForm.value
    console.log(data)
    var password = this.passwordForm.find('password')

    if (password.value !== 'a') //TODO check server password
      password.setErrors({ validOldPassword: true })

    if (this.passwordForm.valid) {
      alert("Password successfully changed.")
      //TODO change password on backend
    }
    else
      this.isBadForm=true;
  }
}
