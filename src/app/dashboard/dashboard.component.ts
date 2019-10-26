import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//i hope i dont have to do much here
//it just basically renders, the new-todo and the todo-list 
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
