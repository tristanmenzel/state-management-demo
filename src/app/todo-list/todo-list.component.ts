import {Component, OnInit} from '@angular/core';
import {TodoState} from './state/todo-state';
import {Action, Dispatcher, InitState} from './actions';
import {TodoService} from './services/todo.service';
import {WorkTracker} from 'ng2-loading-pane';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  state: TodoState;
  tracker: WorkTracker = new WorkTracker(false);

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.dispatchAction(InitState(this.todoService));
  }

  dispatchAction: Dispatcher = async (action: Action, tracker: WorkTracker = this.tracker) => {
    try {
      this.state = await tracker.track(action(this.state));
    } catch (error) {
      // Log it... redirect to error page... show error alert...
    }
  };
}

