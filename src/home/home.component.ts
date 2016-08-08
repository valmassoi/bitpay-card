import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { LoginComponent } from '../login_component/login.component';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.component.html',
  styleUrls: ['src/home/home.component.css'],
  directives: [LoginComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }

}
