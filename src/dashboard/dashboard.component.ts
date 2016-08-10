import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SidebarComponent } from './_sidebar/sidebar.component';
import { TransactionsComponent } from './activity/activity.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'src/dashboard/dashboard.component.html',
  styleUrls: ['src/dashboard/dashboard.component.css'],
  directives: [SidebarComponent, TransactionsComponent]
})
export class DashboardComponent implements CanActivate {

  activeComponent: string;

  constructor() {

  }

  onComponentChange(e) {
    console.log("Dash:", e.newComponent)
    this.activeComponent = e.newComponent
  }

  canActivate() {
    return false;
  }

  print() { //TODO csv export might be better
    window.print()
  }

}
