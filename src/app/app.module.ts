import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import {MatButtonModule} from '@angular/material/button';
import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule, MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IhmSidenavModule,
  IhmHeaderModule
} from '@ihm-software/ihm-ui-common';

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
    IhmSidenavModule,
    IhmHeaderModule,
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
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  appName: 'hello';
}
