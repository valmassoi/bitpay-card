import { Component, Input, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

import {PasswordValidators} from '../../_validators/password.validators';

@Component({
  selector: 'security-form',
  templateUrl: 'src/dashboard/change-password/password.component.html',
  styleUrls: ['src/dashboard/change-password/password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordForm: ControlGroup;
  isBadForm=false;
  @Input() updating;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      'password': ['', Validators.required],
      'newPassword': ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword(this.updating),
                PasswordValidators.pin(this.updating)
              ])],
      'confirmPassword': ['', Validators.required]
    }, { validator: PasswordValidators.passwordsShouldMatch })
  }

  changePassword(){ //save
    this.isBadForm=false;
    let data = this.passwordForm.value
    console.log(data)
    var password = this.passwordForm.find('password')

    if (password.value !== 'a' && this.updating == 'Password') //TODO check server password
      password.setErrors({ validOldPassword: true })

    if (this.passwordForm.valid) {
      alert(this.updating + " successfully changed.")
      //TODO change password on backend
    }
    else
      this.isBadForm=true;
  }
}
