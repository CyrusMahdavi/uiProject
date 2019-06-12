import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id: string;
  constructor(private http: HttpClient) { this.getAllHeroes();}
  title = 'untitled';
  dataIn: any;
  getAllHeroes(): void {
    console.log('HERE!!!');
    this.dataIn = 'hi';
    this.http.get<JSON>('http://localhost:8080/api/advertising', {headers: {id: this.id}}).subscribe(

      (response) => { console.log(response);
                      console.log(JSON.stringify(response));
                      this.dataIn = JSON.stringify(response); }
    );
  }
}
