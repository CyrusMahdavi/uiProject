import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
