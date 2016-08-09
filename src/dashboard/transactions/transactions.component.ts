import { Component } from '@angular/core';

@Component({
  selector: 'transactions',
  templateUrl: 'src/dashboard/transactions/transactions.component.html',
  styleUrls: ['src/dashboard/transactions/transactions.component.css'],
  directives: []
})
export class TransactionsComponent {
  timestamp = Date.now() //HACK
  constructor() { }

}
