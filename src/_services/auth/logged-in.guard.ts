import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private _router: Router, private _user: UserService) { }

  canActivate() {
    let isLoggedIn = this._user.isLoggedIn()
    if (isLoggedIn)
      return this._user.isLoggedIn();
    this._router.navigate([''])
    alert("Please Login")
  }
}
