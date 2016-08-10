import { Component } from '@angular/core';
import { ControlGroup, FormBuilder } from '@angular/common'
import { Observable } from 'rxjs/Rx';
// import './rxjs-extensions';


@Component({
    selector: 'search-bar',
    templateUrl: 'src/dashboard/activity/search/search.component.html',
    styleUrls: ['src/dashboard/activity/search/search.component.css'],
    directives: []
})
export class SearchComponent {
  form: ControlGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group({
      search: []
    });

    var search = this.form.find('search');
    search.valueChanges//Observables without calling observ..??
      .debounceTime(100)//good if hitting server to sort
      .map(str => (<string>str).replace(' ','-'))//need to change str from any type to string
      .subscribe(x => console.log(x));
  }
}
