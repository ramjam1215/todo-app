import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  myTask: string;
  myDate: number;
  constructor(public taskService: AppService) { }

  ngOnInit() {
  }

  saveTask() {
    if (this.myTask !== null) {
      //default dueDate set to 2.... couldn't add my object to firebase, have to pass it in this way
      let task = { description: this.myTask, dueDate: 2 };
    
      //new task
      console.log(task);
      this.taskService.addTask(task);
    }

    this.myTask = "";

    }

  }

  /*
   * saveTask() {
    if (this.myTask !== null) {
      let task = { description: this.myTask };

      //new task
      if (!this.editMode) {

        console.log(task);
        this.taskService.addTask(task);
      }

      //already exists
      else {

        let taskId = this.taskToEdit.id;
        this.taskService.updateTask(taskId, task);

      }

      this.myTask = "";
    }

  }
   
  */

