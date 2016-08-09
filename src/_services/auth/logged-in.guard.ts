import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private _user: UserService) { }

  canActivate() {
    console.log("real test", this._user.isLoggedIn())
    let isLoggedIn = this._user.isLoggedIn()
    if (isLoggedIn)
      return this._user.isLoggedIn();
    alert("Please Login")
  }
}
