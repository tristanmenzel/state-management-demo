import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../state/todo-state';
import {Dispatcher, SetItemDone} from '../actions';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() public item: TodoItem;
  @Input() public dispatcher: Dispatcher;

  constructor(private todoService: TodoService) {
  }

  setDone(done: boolean) {
    this.dispatcher(SetItemDone(this.item, done, this.todoService));
  }

}
