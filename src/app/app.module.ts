import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoListAddItemComponent } from './todo-list/todo-list-add-item/todo-list-add-item.component';
import {TodoService} from './todo-list/services/todo.service';
import {LoadingPaneModule} from 'ng2-loading-pane';
import { ToasterfyComponent } from './toasterfy/toasterfy.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListAddItemComponent,
    ToasterfyComponent
  ],
  imports: [
    BrowserModule,
    LoadingPaneModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
