import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
