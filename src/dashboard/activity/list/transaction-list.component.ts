import { Component, OnInit, animate, transition, trigger, state, style } from '@angular/core';
import { ActivityService } from '../../../_services/activity/activity.service';

@Component({
  selector: 'transaction-list',
  templateUrl: 'src/dashboard/activity/list/transaction-list.component.html',
  styleUrls: ['src/dashboard/activity/list/transaction-list.component.css'],
  directives: [],
  providers: [ActivityService],
  animations: [ //TODO only show once, not if navigating back and forth
    trigger('loadState', [
      state('active', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('inactive', style({
        transform: 'scale(1.3)',
        opacity: 0
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class TransactionListComponent implements OnInit {

  activityLoading;//spinner
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
      () => setTimeout(() => { this.activityLoading = false }, 1000)
    )
  }
}
