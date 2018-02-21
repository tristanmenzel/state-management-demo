import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../state/todo-state';
import {AddNewItem, Dispatcher, SetNewItemText} from '../actions';
import {TodoService} from '../services/todo.service';
import {WorkTracker} from 'ng2-loading-pane';

@Component({
  selector: 'app-todo-list-add-item',
  templateUrl: './todo-list-add-item.component.html',
  styleUrls: ['./todo-list-add-item.component.scss']
})
export class TodoListAddItemComponent {

  @Input() public item: TodoItem;

  @Input() public dispatcher: Dispatcher;

  tracker: WorkTracker = new WorkTracker();

  constructor(private todoService: TodoService) {
  }

  setText(text: string) {
    this.dispatcher(SetNewItemText(text));
  }

  addTodoItem() {
    this.dispatcher(AddNewItem(this.item, this.todoService), this.tracker);
    return false;
  }
}

