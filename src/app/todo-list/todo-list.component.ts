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

  tasks: Observable<any[]>;

  constructor(private db: AngularFirestore, private taskService: AppService) { }

  //had to add the pipe around the map function call, issue in tutorial
  ngOnInit(): void {

    //this.taskService.getTasks()
    //this.tasks = this.db.collection(config.collection_endpoint)
    this.tasks = this.taskService.getTasks().snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Task;
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
      );

    }

}
