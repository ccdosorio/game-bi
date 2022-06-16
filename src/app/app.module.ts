import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryCapitalComponent } from './country-capital/country-capital.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryCapitalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
