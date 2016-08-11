import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map'

@Injectable()
export class ActivityService {
  private _baseUrl = 'http://localhost:8081/activity'
  activity;

  constructor(private _http: Http) {
  }

  fetchActivity(token): Observable<any> {
    console.log("get activity from backend")
    var url = this._baseUrl
    let headers = new Headers();
    headers.append('authorization', token);
    return this._http.get(url, {headers})
      .map(res => {
        this.activity = res.json();//redundant?
        this.setActivity(res.json())
        return res.json()
      })
  }

  getActivity() {
    console.log("getAct",this.activity)
    return this.activity
  }


  private _getActivity = new BehaviorSubject<any>(this.getActivity());

  setStatus$ = this._getActivity.asObservable();

  setActivity(activity){
    this._getActivity.next(activity);
  }


}
