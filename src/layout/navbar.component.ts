import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'src/layout/navbar.component.html',
  styleUrls: ['src/layout/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {
  isCollapsed = true;

}
