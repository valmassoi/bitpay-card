import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'src/dashboard/dashboard.component.html',
  styleUrls: ['src/dashboard/dashboard.component.css'],
  directives: []
})
export class DashboardComponent implements CanActivate {

  constructor() { }

  canActivate() {
    return false;
  }

}
