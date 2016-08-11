//https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.hpdlvsu4i
//https://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2/35568924#35568924
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import localStorage from 'localStorage';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private _http: Http) {
    // this.loggedIn = !!localStorage.getItem('auth_token'); //doesnt work here
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let localUrl = `http://localhost:8081` //TODO empty for production
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
          this.loggedIn = true
          this.setLoginStatus(true)
        }
        return res.success;
      });
  }

  logout() {
    console.log("logout")
    localStorage.removeItem('auth_token')
    this.loggedIn = false
    this.setLoginStatus(false)
  }

  isLoggedIn() { //remove infav of emitter below?
    if (localStorage.getItem('auth_token')!==null)//TODO, bad - user can set themselves AND doesnt work in private mode
      this.loggedIn=true
    return this.loggedIn;
  }

  private _isUserLoggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());

  setStatus$ = this._isUserLoggedIn.asObservable();

  setLoginStatus(isLoggedIn){
    this._isUserLoggedIn.next(isLoggedIn);
  }
}
