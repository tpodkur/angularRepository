import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Student } from '../student';

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

  // onSubmitDelete(id : number) {
  //   console.log(id);
  //   this.apiService.deleteStudent(id).subscribe();
  // }

  // onSubmitDelete() {
  //   id : number = 1;
  //   console.log(1);
  //   this.apiService.deleteStudent(1).subscribe();
  // }
}

