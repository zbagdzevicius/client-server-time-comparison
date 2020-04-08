import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import {HttpClientModule} from "@angular/common/http";
import {TimeModule} from "./time/time.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot(),
    TimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
