import { Component, Input } from '@angular/core';
import { Task } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() task: Task;
  @Input() i: number;

  uClass: string;
  dClass: string;
  wClass: string;

  //if duedate => 0 red on urgent
  //if duedate => 1 red on days
  //if duedate => 2 red on weeks
  //otherwise it will be green on specific button
  constructor(private taskService: AppService) {
    this.uClass = "";
    this.dClass = "";
    this.wClass = "";
  }


  deleteTask(task) { this.taskService.deleteTask(this.task.id); }

  urgent() {

    switch (this.task.dueDate) {
      case 0: {
        this.uClass = 'red';
        this.dClass = '';
        this.wClass = '';
        break;
      }

      default: {
        this.uClass = 'green';
        this.dClass = '';
        this.wClass = '';
        break;
      }

    }
  }

  days() {

    switch (this.task.dueDate) {
      case 0: {
        this.uClass = '';
        this.dClass = 'red';
        this.wClass = '';
        break;
      }

      default: {
        this.uClass = '';
        this.dClass = 'green';
        this.wClass = '';
        break;
      }

    }
  }

  weeks() {

    switch (this.task.dueDate) {
      case 2: {
        this.uClass = '';
        this.dClass = '';
        this.wClass = 'green';
        break;
      }

      default: {
        this.uClass = '';
        this.dClass = '';
        this.wClass = 'red';
        break;
      }

    }
  }


  sayHello() { console.log("hello"); }

  edit(t) {
    console.log(`Editted Task: ${this.task.id}, Decription: ${this.task.description}`);

    this.task.description = t
    console.log(`Editted Task: ${this.task.id}, Decription: ${this.task.description}`);
    //this.task = task;
    //this.task.description = task.description;

    //add new code here
    //this.taskService.updateTask(this.task.id, this.task);

  }

}
