import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, Event, NavigationEnd} from '@angular/router';
import './rxjs-extensions';

import { NavBarComponent } from './layout/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

declare let ga:Function;

@Component({
    selector: 'my-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <div style="text-align: center; margin-top: 100px">
      <a href="https://github.com/valmassoi/bitpay-card" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> github repo</a> by <a href="https://twitter.com/valmassoi" target="_blank">@valmassoi</a>
      <p style="color: lightgrey;">NOT Affiliated with BitPay - Portfolio piece only</p>
    <div>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    precompile: [DashboardComponent, HomeComponent, PageNotFoundComponent] //TODO move to routes?
})
export class AppComponent {
  constructor(public router:Router) {
      this.router.events.subscribe(
          (event:Event) => {
              if (event instanceof NavigationEnd) {
                  ga('send', 'pageview', event.urlAfterRedirects);
              }
          });
  }
}
