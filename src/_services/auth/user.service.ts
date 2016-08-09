//https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.hpdlvsu4i
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import localStorage from 'localStorage';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private _http: Http) {
    // this.loggedIn = !!localStorage.getItem('auth_token'); //doesnt work here
  }

  login(email, password) {
    this.loggedIn = true;//REALLY HACK DONT LEAVE here
    console.log("user service.logingin", this.loggedIn)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let localUrl = `` //TODO empty for production
    let url = localUrl + '/auth/login'
    return this._http
      .post(
        url,
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', 'sometoken')//TODO res.auth_token);
          this.loggedIn = true;
          console.log("service.login.res", this.loggedIn)
        }
        return res.success;
      });
  }

  logout() {
    console.log("logout")
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    if (localStorage.getItem('auth_token')!==null)//TODO, bad - user can set themselves
      this.loggedIn=true
    return this.loggedIn;
  }
}
