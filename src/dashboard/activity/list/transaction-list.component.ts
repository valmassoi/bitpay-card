import { Component, OnInit, OnDestroy, animate, transition, trigger, state, style } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { ActivityService } from '../../../_services/activity/activity.service';

@Component({
  selector: 'transaction-list',
  templateUrl: 'src/dashboard/activity/list/transaction-list.component.html',
  styleUrls: ['src/dashboard/activity/list/transaction-list.component.css'],
  directives: [],
  providers: [],
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
export class TransactionListComponent implements OnInit, OnDestroy {

  activityLoading;//spinner
  animationDone=false;
  transactions=[];//Array<>
  subscription:Subscription;
  editNote;

  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this.loadActivity()
    this.subscription = this._activityService.setStatus$.subscribe(activity => {
      this.transactions = activity || []
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  saveNote(id, newNote) {//TODO allow it to work during filter
    this.editNote = null
    this.transactions[id-1].note = newNote//HACK dont go by index
  }

  private loadActivity(){ //(filter?) filter on backend
    this.activityLoading = true
    this.animationDone=false
    let token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"//get from auth service
    this._activityService.fetchActivity(token)
      .subscribe(data => {
        if (data.error)
          console.log("handle error")
        else
          this.transactions = data;
        //  this.pagedPosts = _.take(this.activity, this.pageSize) //TODO pagination
      },
      null,
      () => {
        setTimeout(() => {
          this.activityLoading = false //to remove gif from DOM
          setTimeout(() => {this.animationDone = true }, 1000)
        }, 1000)
      }
    )
  }
}
