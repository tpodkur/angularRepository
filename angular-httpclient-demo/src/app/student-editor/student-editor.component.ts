import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
//import { Student } from '../student';
import { StudentComponent } from 'src/app/students/student/student.component';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {
    studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  students;

  constructor(private apiService: ApiService) { }

  onSubmit() {
    const student : StudentComponent = this.studentForm.value;
    //console.log(student);
    this.apiService.postStudent(student).subscribe();
  }

  refresh(): void {
    console.log("refresh");
    window.location.reload();
  }
}
