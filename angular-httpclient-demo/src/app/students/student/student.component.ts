import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public id: number;

  constructor() { }

  ngOnInit() {
  }

}
