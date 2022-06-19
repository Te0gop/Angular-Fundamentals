import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { apiURLprovider } from './providers';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    apiURLprovider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
