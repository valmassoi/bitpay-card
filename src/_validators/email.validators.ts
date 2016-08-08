import { Control } from '@angular/common'

export class EmailValidators {

  static shouldBeUnique(control: Control) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(function(){
    //     if(control.value == "valmassoi")
    //       resolve({ shouldBeUnique: true })
    //     else
    //       resolve(null)
    //   }, 1000)//simulate server call
    // });
  }

  static validEmail(control: Control){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(control.value))
      return { invalidEmail: true };
    return null;
  }

}
