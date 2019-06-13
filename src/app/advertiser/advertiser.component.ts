import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.css']
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
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'always',
    });
  }
  getAdvertiser() {
    this.http.get<JSON>('http://localhost:8080/api/advertising', {headers: {id: this.id}}).subscribe(
      (response) => { console.log(response);
                      this.dataIn = JSON.stringify(response); }
    );
  }

  addAdvertiser() {
    this.params = new HttpParams()
      .set('contactName', this.contactName)
      .set('name', this.name)
      .set('creditLimit', this.creditLimit);
    this.http.post<JSON>('http://localhost:8080/api/advertising', this.params)
      .subscribe(
        (response) => { console.log(response);
                        this.dataIn = JSON.stringify(response); }
      );
  }

  deleteAdvertiser() {
    this.headers = new HttpHeaders();
    this.http.delete<JSON>('http://localhost:8080/api/advertising' + '?id=' + this.idDelete, {headers: {id: this.idDelete}})
      .subscribe(
        (response) => { console.log(response);
                        this.dataIn = JSON.stringify(response); }
      );
  }

  ngOnInit(): void {
  }
}


