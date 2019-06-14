import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  actuator: string;
  information: string;
  constructor(private http: HttpClient) {}
  getEndpoint() {
    this.http.get<JSON>('http://localhost:8090/actuator/' + this.actuator).subscribe(
      (response) => { console.log(response);
                      this.information = JSON.stringify(response); },
      (error) => { console.log(error);
                   this.information = 'Error! Details: ' + JSON.stringify(error);}
    );
  }
  ngOnInit() {
  }
}
