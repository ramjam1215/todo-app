import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  myTask: string;
  editMode: boolean = false;
  taskToEdit: any = {};

  constructor(public taskService: AppService) { }

  ngOnInit() {
  }

  saveTask() {
    if (this.myTask !== null) {
      let task = { description: this.myTask };
      if (!this.editMode) {

        console.log(task);
        this.taskService.addTask(task);
      }

      else {

        let taskId = this.taskToEdit.id;
        this.taskService.updateTask(taskId, task);

      }

      this.editMode = false;
      this.myTask = "";
    }

  }



}
