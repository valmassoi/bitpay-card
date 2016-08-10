import { Component } from '@angular/core';
import { ControlGroup, FormBuilder } from '@angular/common'
import { Observable } from 'rxjs/Rx';
// import './rxjs-extensions';


@Component({
    selector: 'search-bar',
    templateUrl: 'src/dashboard/activity/search/search.component.html',
    styleUrls: ['src/dashboard/activity/search/search.component.css'],
    directives: []
})
export class SearchComponent {

  transactions = [//HACK move to backend and in a service
    {
      id: 1,
      note: "testing this out",
      date: Date.now()-(2*24*60*60*1000)-31185198,
      description: "Bitcoin top-up",
      pending: false,
      amount: .05,
      balance: .05//calculated on backend at moment of dep/deb
    },
    {
      id: 2,
      note: null,
      date: Date.now()-(24*60*60*1000)-21165198,
      description: "Bitcoin top-up",
      pending: false,
      amount: 1000,
      balance: 1000.05
    },
    {
      id: 3,
      note: "bought some cool thing",
      date: Date.now()-(24*60*60*1000)-21165198,
      description: "Shopping/Retail",
      pending: false,
      amount: -200.891,
      balance: 1000.05-200.891
    },
    {
      id: 4,
      note: "cool stuff",
      date: Date.now(),
      description: "Bitcoin top-up",
      pending: true,
      amount: 100,
      balance: 1000.05-200.891+100//TODO
    }
  ]

  form: ControlGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group({
      search: []
    });

    var search = this.form.find('search');
    search.valueChanges
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
}
