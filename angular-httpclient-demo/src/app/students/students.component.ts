import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StudentComponent } from './student/student.component';
import { Student } from '../student';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students; // свойство класса

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStudents().subscribe((data)=>{
      console.log(data); // для отладки
      this.students = data; // положить json в переменную students
    });
  }

  onDelete(id : number) {
    console.log(id);
    this.apiService.deleteStudent(id).subscribe();
  }

  onUpdate(student : StudentComponent) {
    console.log(student);
    this.apiService.updateStudent(student).subscribe();
  }

  refresh(): void {
    console.log("refresh");
    window.location.reload();
  }
  
}

