import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppService } from './app.service';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { config } from './app.config';
import { Task } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
  title = 'todo-app';
  tasks: Observable<any[]>;
  myTask: string;
  editMode: boolean = false;
  taskToEdit: any = {};

  constructor(private db: AngularFirestore, private taskService: AppService) { }

  //had to add the pipe around the map function call, issue in tutorial
  ngOnInit(): void {

    this.tasks = this.db.collection(config.collection_endpoint)
      .snapshotChanges()

      .pipe(map(actions => {

        return actions.map(a => {
          const data = a.payload.doc.data() as Task;

          const id = a.payload.doc.id;

          return { id, ...data };
        });

      })

    );

  }

  edit(task) {
    console.log(task);

    this.taskToEdit = task;
    this.editMode = true;
    this.myTask = task.description;

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
      this.myTask = "";    }

  }

  deleteTask(task) {

    let taskId = task.id;
    this.taskService.deleteTask(taskId);

  }

}
