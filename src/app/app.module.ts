import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importar el modulo HTTP cliente
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChuckComponent } from './chuck/chuck.component';



@NgModule({
  declarations: [
    AppComponent,
    ChuckComponent
  ],
  imports: [
    BrowserModule,
    //declararlo en los imports
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
