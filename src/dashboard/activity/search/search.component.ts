import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlGroup, FormBuilder } from '@angular/common'
import { Observable } from 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

import { ActivityService } from '../../../_services/activity/activity.service';

@Component({
    selector: 'search-bar',
    templateUrl: 'src/dashboard/activity/search/search.component.html',
    styleUrls: ['src/dashboard/activity/search/search.component.css'],
    directives: [],
    providers: []
})
export class SearchComponent implements OnInit, OnDestroy {

  transactions = [ ]
  subscription:Subscription;
  form: ControlGroup;
  constructor(fb: FormBuilder, private _activityService: ActivityService) {

    this.form = fb.group({
      search: []
    });

    var search = this.form.find('search');//TODO move out of constructor?
    search.valueChanges//IDEA animate changes with fade
      .debounceTime(1000)//good if hitting server to sort
      .distinctUntilChanged()
      .subscribe(x => {
        console.log(x)
        var filtered = this.transactions.filter(transaction => { //could filter on backend
          var note = transaction.note ? transaction.note.toLowerCase() : ""
          var description = transaction.description ? transaction.description.toLowerCase() : ""
          var amount = transaction.amount ? transaction.amount.toString() : ""
          var searchString = x.toLowerCase()
          if(
            note.indexOf(searchString) > -1
            || description.indexOf(searchString) > -1
            || amount.indexOf(searchString) > -1
          ) return transaction;
        })
        console.log(filtered)//send to service
      });
  }

  ngOnInit() {
    this.subscription = this._activityService.setStatus$.subscribe(activity => {
      this.transactions = activity
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
