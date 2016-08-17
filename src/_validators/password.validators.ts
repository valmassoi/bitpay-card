import {Control, ControlGroup} from '@angular/common';

export class PasswordValidators {
  static complexPassword(passOrPin: String){ //closures
    return (control: Control) => {
      const minLength = 5;

      if (control.value === '' || passOrPin == 'PIN')
        return null

      if (control.value.length < minLength)
        return {
          complexPassword: {
            minLength: minLength
          }
        };

      return null
    }
  }
  static passwordsShouldMatch(group: ControlGroup){
    var newPassword = group.find('newPassword').value;
    var confirmPassword = group.find('confirmPassword').value;

    if (newPassword === '' || confirmPassword === '')
      return null;

    if (newPassword !== confirmPassword)
      return { passwordsShouldMatch: true };

    return null
  }

  static pin(passOrPin: String) { //closures
    return (control: Control) => {
      const minLength = 4;

      if (control.value === '' || passOrPin == 'Password')
        return null

        if (control.value.length < minLength)
          return {
            pin: {
              error: `New ${passOrPin} should be minimum ${minLength} characters`
            }
          };

      if (!/^\d+$/.test(control.value))
        return {
          pin: {
            error: "New pin should be numbers only"
          }
        }

      return null
    }
  }
}
