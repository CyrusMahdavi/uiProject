import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id: any;
  name: string;
  creditLimit: any;
  contactName: string;
  constructor(private http: HttpClient) { this.getAllHeroes(); }
  title = 'untitled';
  dataIn: any;
  private params: HttpParams;
  getAllHeroes() {
    this.http.get<JSON>('http://localhost:8080/api/advertising', {headers: {id: this.id}}).subscribe(
      (response) => { console.log(response);
                      this.dataIn = JSON.stringify(response); }
    );
  }

  addAdvertiser() {
    this.params = new HttpParams().set('contactName', this.contactName)
      .set('name', this.name)
      .set('creditLimit', this.creditLimit);
    this.http.post<JSON>('http://localhost:8080/api/advertising', this.params)
      .subscribe(
      (response) => { console.log(response);
                      this.dataIn = JSON.stringify(response); }
    );
  }
}
