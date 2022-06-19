import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { apiURLprovider, myServiceProvider } from './providers';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    apiURLprovider,
    myServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
