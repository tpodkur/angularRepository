import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getStudents(){
    return this.httpClient.get(`/api`);
  }
  constructor(private httpClient: HttpClient) { }

  public postStudent(student: Student){
    const body = {firstName: student.firstName, lastName: student.lastName, id: student.id};
    return this.httpClient.post('/api', body); 
  }
}