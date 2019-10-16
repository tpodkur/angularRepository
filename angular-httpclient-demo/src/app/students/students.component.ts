import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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
}

