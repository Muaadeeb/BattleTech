import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { ClientSettings } from './models/client-settings.model';
import { HttpClient } from "./common/http-client";


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AgeOfStrifeComponent } from './age-of-strife/age-of-strife.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AgeOfStrifeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: ClientSettings, useValue: window["clientSettings"] },
    HttpClient
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
