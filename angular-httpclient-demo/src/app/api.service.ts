import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '2f3f8f28fef846258b231cff488cfea4';

public getStudents(){
  return this.httpClient.get(`/api`);
}
  constructor(private httpClient: HttpClient) { }
}