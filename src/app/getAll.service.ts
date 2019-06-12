import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class GetAllService {
  private http: any;
  getAllHerbbboes(): void {
    console.log('HERE!!!');
    this.http.get('localhost:8080/api/advertising/all').then(function(response) {
      this.dataIn.push(response);
    });
  }
}
