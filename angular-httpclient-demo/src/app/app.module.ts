import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentsFormComponent } from './students-form/students-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsFormComponent
  ],

  entryComponents: [],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //AppComponent,
    //StudentsFormComponent,
    StudentsComponent,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
