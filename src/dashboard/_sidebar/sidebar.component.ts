import { Component, Output, EventEmitter } from '@angular/core';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
import {QRCodeComponent} from 'ng2-qrcode/dist/ng2-qrcode'

@Component({
  selector: 'sidebar',
  templateUrl: 'src/dashboard/_sidebar/sidebar.component.html',
  styleUrls: ['src/dashboard/_sidebar/sidebar.component.css'],
  directives: [MODAL_DIRECTIVES, QRCodeComponent]
})
export class SidebarComponent {

  scanOrCopy = 'scan'
  btcAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'

  activeComponent: string;
  @Output() change = new EventEmitter()

  constructor() {
    this.activeComponent = "activity"
  }

  setScanOrCopy(value) {
    this.scanOrCopy = value
  }

  changeActiveComponent(e, component) {
    e.stopPropagation()
    this.activeComponent = component
    this.change.emit({ newComponent:component })
  }
  openWallet() {
    window.open('bitcoin:'+this.btcAddress)
  }
}
