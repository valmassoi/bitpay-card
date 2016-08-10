import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: 'src/dashboard/_sidebar/sidebar.component.html',
  styleUrls: ['src/dashboard/_sidebar/sidebar.component.css'],
  directives: []
})
export class SidebarComponent {

  activeComponent: string;
  @Output() change = new EventEmitter()

  constructor() {
    this.activeComponent = "activity"
  }

  changeActiveComponent(e, component) {
    e.stopPropagation()
    this.activeComponent = component
    this.change.emit({ newComponent:component })
  }
}
