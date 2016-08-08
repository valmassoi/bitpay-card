import {Component} from '@angular/core';
import './rxjs-extensions';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavBarComponent } from './layout/navbar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

@Component({
    selector: 'my-app',
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    precompile: [DashboardComponent, HomeComponent, PageNotFoundComponent] //TODO move to routes?
})
export class AppComponent {

}
