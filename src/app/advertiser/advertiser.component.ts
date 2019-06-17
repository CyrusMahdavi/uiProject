import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup, FormBuilder} from '@angular/forms';
import { AgGridModule} from 'ag-grid-angular';

@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  options: FormGroup;
  id: any;
  name: string;
  creditLimit: any;
  contactName: string;
  viewResult: string;
  addResult: string;
  deleteResult: string;
  allResult: string;
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
    if (this.id == null) {
      this.viewResult = 'ID is required!';
    } else {
      this.http.get<JSON>('http://localhost:8080/api/advertising', {headers: {id: this.id}}).subscribe(
        (response) => {
          console.log(response);
          this.jsonReceive = response;
          this.viewResult = this.jsonReceive.name;
        },
        (error) => {
          console.log(error);
          this.viewResult = 'ERROR ' + error.status + ' :' + error.error.message;
        }
      );
    }
  }

  addAdvertiser() {
    if (this.contactName == null || this.name == null || this.creditLimit == null) {
      this.addResult = 'All fields are required and credit limit must be >0';
    } else {
      this.params = new HttpParams()
        .set('contactName', this.contactName)
        .set('name', this.name)
        .set('creditLimit', String(this.creditLimit));
      this.http.post<JSON>('http://localhost:8080/api/advertising', this.params)
        .subscribe(
          (response) => { console.log(response);
                          this.addResult = JSON.stringify(response); },
        (error) => { console.log(error);
                     this.addResult = 'ERROR ' + error.status + ' :' + error.error.message; }
        );

    }
  }

  deleteAdvertiser() {
    if (this.idDelete == null) {
      this.deleteResult = 'ID is required!';
    } else {
      this.headers = new HttpHeaders();
      this.http.delete<JSON>('http://localhost:8080/api/advertising' + '?id=' + this.idDelete, {headers: {id: this.idDelete}})
        .subscribe(
          (response) => {
            console.log(response);
            this.deleteResult = JSON.stringify(response);
          },
          (error) => {
            console.log(error);
            this.deleteResult = 'ERROR ' + error.status + ' :' + error.error.message;
          }
        );
    }
  }
  allAdvertisers() {

  }
  ngOnInit(): void {
  }
}


