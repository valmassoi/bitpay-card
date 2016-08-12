import { Component } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { TransactionListComponent } from './list/transaction-list.component'

@Component({
  selector: 'activity',
  templateUrl: 'src/dashboard/activity/activity.component.html',
  styleUrls: ['src/dashboard/activity/activity.component.css'],
  directives: [SearchComponent, TransactionListComponent]
})
export class TransactionsComponent {

  constructor() { }

    print() { //TODO csv export might be better
      window.print()
    }
    filterComingSoon() {
      alert('Filter Feature Coming Soon, try out my working friend - the search box')
    }
}
