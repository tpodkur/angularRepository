import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { Students }    from '../students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students; // свойство класса
  model;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    ){
    }

  ngOnInit() {
    this.apiService.getStudents().subscribe((data)=>{
      console.log(data); // для отладки
      this.students = data; // положить json в переменную students

    });
  }

  newStudent() {
    this.model = new Students('', '', 0);
  }
}

