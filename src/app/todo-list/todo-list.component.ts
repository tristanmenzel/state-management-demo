import {Component, OnInit} from '@angular/core';
import {TodoState} from './state/todo-state';
import {Action, Dispatcher, InitState} from './actions';
import {TodoService} from './services/todo.service';
import {WorkTracker} from 'ng2-loading-pane';
import {CreateStore, Store} from '../util/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  store: Store<TodoState>;

  tracker: WorkTracker = new WorkTracker(false);


  constructor(private todoService: TodoService) {
    this.store = CreateStore<TodoState>(null as any, console.error, this.tracker);
  }

  ngOnInit() {
    this.store.dispatch(InitState(this.todoService));
  }

  get state() {
    return this.store.state;
  }

}

