import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../_services/activity/activity.service';

@Component({
  selector: 'transaction-list',
  templateUrl: 'src/dashboard/activity/list/transaction-list.component.html',
  styleUrls: ['src/dashboard/activity/list/transaction-list.component.css'],
  directives: [],
  providers: [ActivityService]
})
export class TransactionListComponent implements OnInit {

  activityLoading;
  transactions=[];//Array<>

  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this.loadActivity()
  }

  private loadActivity(){ //(filter?) filter on backend
    this.activityLoading = true
    let token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"//get from auth service
    this._activityService.getActivity(token)
      .subscribe(data => {
        console.log(data)
        if (data.error)
          console.log("handle error")
        else
          this.transactions = data;
        //  this.pagedPosts = _.take(this.activity, this.pageSize) //TODO pagination
      },
      null,
      () => { this.activityLoading = false }
    )
  }
}
