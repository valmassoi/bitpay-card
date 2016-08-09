import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { UserService } from '../_services/auth/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'src/layout/navbar.component.html',
  styleUrls: ['src/layout/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  isLoggedIn=false;
  subscription:Subscription;
  constructor(private _user: UserService) {
    this.isLoggedIn = this._user.isLoggedIn()
  }
  ngOnInit() {
    this.subscription = this._user.setStatus$.subscribe(status => {
      this.isLoggedIn=status
    })
  }
  ngOnDestroy() { // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
  logout() {
    this.isCollapsed = true
    this.isLoggedIn=false
    this._user.logout()
  }

}
