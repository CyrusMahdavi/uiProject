import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
   columnDefs = [
    {headerName: 'ThisStatus', field: 'status' }
   ];
  //  columnDefs: any = [];

  rowData: JSON;
  /*
  columnDefs: [
    {headerName: 'STATUS', field: 'status'}];
    */
  myObj: any;
  actuator: string;
  private jsonReceive: any;
  information: string;
  private columnNames: string[];
  constructor(private http: HttpClient) {}
  getEndpoint() {
    this.http.get<JSON>('http://localhost:8090/actuator/' + this.actuator).subscribe(
      (response) => { console.log(response);
                      console.log(JSON.stringify(response));
                      // this.information = JSON.stringify(response);
                      // this.jsonReceive = response;
                      this.rowData = JSON.parse('[' + JSON.stringify(response) + ']');
                      console.log(this.rowData);
                      this.makeColumnDefs(response);
                      },
      (error) => { console.log(error);
                   this.information = 'Error! Details: ' + JSON.stringify(error); }
    );
  }
  makeColumnDefs(data: JSON) {
    this.columnDefs = [];
    this.columnNames = Object.keys(data);
    length = this.columnNames.length;
    for (let i = 0; i < length; i++) {
      this.myObj = {
        headerName : this.columnNames[i],
        field : this.columnNames[i]
      };
      console.log('TEST ' + i + data[i]);
      this.columnDefs.push(this.myObj);
    }
    console.log(this.columnDefs);
  }
  ngOnInit() {
  }
}
