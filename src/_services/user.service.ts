import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
  private _url = '/user'
  constructor(private _http: Http) {
  }

  loginUser(id) {
    return this._http.get(this.getUserUrl(id))
      .map(res => res.json())
  }
  logoutUser(id) {

  }
  private getUserUrl(userId){
    return this._url + "/" + userId;
  }
  // addUser(user) {
  //   return this._http.post(this._url, JSON.stringify(user))
  //     .map(res => res.json())
  // }
  // updateUser(user){
  //   return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
  //     .map(res => res.json())
  // }
}
