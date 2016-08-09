import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { UserService } from '../_services/auth/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'src/layout/navbar.component.html',
  styleUrls: ['src/layout/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {
  isCollapsed = true;
  isLoggedIn=false;
  constructor(private _user: UserService) {
    this.isLoggedIn = this._user.isLoggedIn()
  }

  logout() {
    this.isCollapsed = true
    this.isLoggedIn=false
    this._user.logout()
  }

}
