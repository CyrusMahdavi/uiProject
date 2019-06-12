import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';

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
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
