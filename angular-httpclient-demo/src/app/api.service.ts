import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Student } from '.student'
//import { Student } from './student'
import { StudentComponent } from './students/student/student.component';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  "headers": {
    "Connection": "keep-alive"
  }

  public getStudents(){
    return this.httpClient.get(`/api`);
  }

  public postStudent(student: StudentComponent){
    // const body = {firstName: student.firstName, lastName: student.lastName};
    // , id: student.id};
    // console.log(body);
    return this.httpClient.post('/api', {firstName: student.firstName, lastName: student.lastName}); 
  }

  public updateStudent(student: StudentComponent){
    return this.httpClient.put('/api', student);
  }

  public deleteStudent(id: number){
    return this.httpClient.delete(`/api/${id}`);
  }
}