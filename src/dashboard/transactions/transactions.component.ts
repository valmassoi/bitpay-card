import { Component } from '@angular/core';

@Component({
  selector: 'transactions',
  templateUrl: 'src/dashboard/transactions/transactions.component.html',
  styleUrls: ['src/dashboard/transactions/transactions.component.css'],
  directives: []
})
export class TransactionsComponent {
  transactions = [//hack move to backend
    {
      id: 1,
      note: null,
      date: Date.now(),
      pending: false,
      amount: .05,
      deposit: true //else is payment
    },
    {
      id: 2,
      note: "cool stuff",
      date: Date.now(),
      pending: true,
      amount: 2122245.4,
      deposit: false
    }
  ]
  constructor() { }

}
