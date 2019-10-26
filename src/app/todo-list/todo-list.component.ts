import { Component, OnInit } from '@angular/core';
import { Task } from '../app.model';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { config } from '../app.config';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  //Breaking DRY rules
  myTask: string;
  editMode: boolean = false;
  taskToEdit: any = {};
  tasks: Observable<any[]>;

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

  /*
  grabTasks(): AngularFirestoreCollection<Task> {
    return this.taskService.getTasks();
  }
  */

  deleteTask(task) {

    let taskId = task.id;
    this.taskService.deleteTask(taskId);

  }

  edit(task) {
    console.log(task);

    this.taskToEdit = task;
    this.editMode = true;
    this.myTask = task.description;

  }

}
