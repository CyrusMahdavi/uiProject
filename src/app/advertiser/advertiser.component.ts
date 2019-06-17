import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
  options: FormGroup;
  id: any;
  name: string;
  creditLimit: any;
  contactName: string;
  dataIn: string;
  private params: HttpParams;
  idDelete: any;
  private headers: HttpHeaders;
  private jsonReceive: any;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'always',
    });
  }
  getAdvertiser() {
    this.http.get<JSON>('http://localhost:8080/api/advertising', {headers: {id: this.id}}).subscribe(
      (response) => { console.log(response);
                      this.jsonReceive = response;
                      this.dataIn = this.jsonReceive.name; },
      (error) => {this.handleError(error); }
    );
  }

  addAdvertiser() {
    if (this.contactName == null || this.name == null || this.creditLimit == null) {
      this.dataIn = 'All fields are required and credit limit must be >0';
    } else {
      this.params = new HttpParams()
        .set('contactName', this.contactName)
        .set('name', this.name)
        .set('creditLimit', String(this.creditLimit));
      this.http.post<JSON>('http://localhost:8080/api/advertising', this.params)
        .subscribe(
          (response) => { console.log(response);
                          this.dataIn = JSON.stringify(response); },
        (error) => {this.handleError(error); }
        );

    }
  }

  deleteAdvertiser() {
    this.headers = new HttpHeaders();
    this.http.delete<JSON>('http://localhost:8080/api/advertising' + '?id=' + this.idDelete, {headers: {id: this.idDelete}})
      .subscribe(
        (response) => { console.log(response);
                        this.dataIn = JSON.stringify(response); },
        (error) => {this.handleError(error); }
      );
  }
  handleError(error: any) {
    console.log(error);
    this.dataIn = 'ERROR ' + error.status + ' :' + error.error.message;
  }
  ngOnInit(): void {
  }
}


