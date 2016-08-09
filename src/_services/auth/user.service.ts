//https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.hpdlvsu4i
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import localStorage from 'localStorage';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let localUrl = `http://localhost:8081` //TODO empty for production
    let url = localUrl + '/auth/login'
    return this.http
      .post(
        url,
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
