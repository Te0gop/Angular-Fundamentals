import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: 'API_URL',
    useValue: 'http://localhost:4000/api/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
