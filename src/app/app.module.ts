import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

//first-match wins strategy so wildcard catch path at end
//ERROR 404- NOT FOUND 
//probably need to fix
const appRoutes: Routes = [
 // { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
 // { path: 'new-todo', component: NewTodoItemComponent },
 // { path: 'todo-item', component: TodoItemComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    DashboardComponent,
    NewTodoItemComponent,
    PageNotFoundComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //firebase stuff
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'My firebase App'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    //enables routing
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
