import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'dev', component: DevComponent},
  {path: 'advertiser', component: AdvertiserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    AdvertiserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
