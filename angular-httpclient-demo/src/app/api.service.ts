import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getStudents(){
    return this.httpClient.get(`/api`);
  }

  public postStudent(student: Student){
    // const body = {firstName: student.firstName, lastName: student.lastName};
    // , id: student.id};
    // console.log(body);
    return this.httpClient.post('/api', {firstName: student.firstName, lastName: student.lastName}); 
  }

  public updateStudent(student: Student){
    return this.httpClient.put('/api', student);
  }

  public deleteStudent(id: number){
    return this.httpClient.delete(`/api/${id}`);
  }
}