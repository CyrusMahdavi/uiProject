import {Component, Directive} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {IhmHeaderModule, IhmSidenavModule} from '@ihm-software/ihm-ui-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
  sidenavLinks = [
    {
      label: 'Home',
      icon: 'home',
      link: '/advertiser',
      active: false
    },
    {
      label: 'Check',
      icon: 'check_circle',
      link: '/dev',
      active: false
    }
  ];

}
