import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentEditorComponent } from './student-editor/student-editor.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent, StudentEditorComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }