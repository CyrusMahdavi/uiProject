import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
  columnDefs = [
    {headerName: 'ID', field: 'id' },
    {headerName: 'Name', field: 'name' },
    {headerName: 'Contact Name', field: 'contactName'},
    {headerName: 'Credit Limit', field: 'creditLimit'}
  ];
  rowData: any;
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
          this.viewResult = 'Name: ' + this.jsonReceive.name +
            ' | Contact Name: ' + this.jsonReceive.contactName +
            ' | Credit Limit: ' + this.jsonReceive.creditLimit;
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
                          this.addResult = 'Advertiser successfully added!'; },
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
            this.deleteResult = 'Advertiser successfully deleted';
          },
          (error) => {
            console.log(error);
            this.deleteResult = 'ERROR ' + error.status + ' :' + error.error.message;
          }
        );
    }
  }
  allAdvertisers() {
      this.http.get<JSON>('http://localhost:8080/api/advertising/all').subscribe(
        (response) => {
          console.log(response);
          this.jsonReceive = response;
          this.rowData = this.jsonReceive;
        },
        (error) => {
          console.log(error);
          this.allResult = 'ERROR ' + error.status + ' :' + error.error.message;
        }
      );
    }

  ngOnInit(): void {
    this.allAdvertisers();
  }
}


