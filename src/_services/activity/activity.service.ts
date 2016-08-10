import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/operator/map'

@Injectable()
export class ActivityService {
  private _baseUrl = 'http://localhost:8081/activity'
  constructor(private _http: Http) {
  }

  getActivity(token) {
    console.log("get activity from backend")
    var url = this._baseUrl
    let headers = new Headers();
    headers.append('authorization', token);
    return this._http.get(url, {headers})
      .map(res => res.json())
  }

}
