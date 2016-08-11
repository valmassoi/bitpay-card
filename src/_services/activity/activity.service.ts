import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map'

@Injectable()
export class ActivityService {
  private _baseUrl = 'http://localhost:8081/activity'
  activity;
  unFiltered;
  constructor(private _http: Http) {
  }

  fetchActivity(token): Observable<any> {
    console.log("get activity from backend")
    var url = this._baseUrl
    let headers = new Headers();
    headers.append('authorization', token);
    return this._http.get(url, {headers})
      .map(res => {
        this.activity = res.json()//TODO clean up
        this.unFiltered = res.json()
        this.setActivity(res.json())
        this.setFilteredActivity(res.json())
        return res.json()
      })
  }

  getActivity(filtered) {
    console.log("getAct",this.activity)
    if(filtered)
      return this.unFiltered
    return this.activity
  }

  filteredActivity(filtered) {
    this.setActivity(filtered)
  }

  private _getActivity = new BehaviorSubject<any>(this.getActivity(false));
  private _getFilteredActivity = new BehaviorSubject<any>(this.getActivity(true));

  setStatus$ = this._getActivity.asObservable();
  setFilteredStatus$ = this._getFilteredActivity.asObservable();

  setActivity(activity){
    this._getActivity.next(activity);
  }
  setFilteredActivity(activity){//seperated into two so original array is not mutatated
    this._getFilteredActivity.next(activity);
  }

}
