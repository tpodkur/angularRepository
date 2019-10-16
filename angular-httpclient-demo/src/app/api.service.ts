import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '2f3f8f28fef846258b231cff488cfea4';

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

public getStudents(){
  return this.httpClient.get(`http://localhost:8000`);
}

  constructor(private httpClient: HttpClient) { }
}