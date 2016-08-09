import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TransactionsComponent } from './transactions/transactions.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'src/dashboard/dashboard.component.html',
  styleUrls: ['src/dashboard/dashboard.component.css'],
  directives: [SidebarComponent, TransactionsComponent]
})
export class DashboardComponent implements CanActivate {

  constructor() { }

  canActivate() {
    return false;
  }

}
