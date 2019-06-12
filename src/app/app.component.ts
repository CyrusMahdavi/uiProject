import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'untitled';
  dataIn: any;
  getAllHeroes(): void {
    console.log('HERE!!!');
    this.dataIn = 'hi';
    this.http.get<JSON>('http://localhost:8080/api/advertising/all/').subscribe(

      (response) => { console.log(response);
                      console.log(JSON.stringify(response));
                      this.dataIn = JSON.stringify(response); }
    );

  }
}
