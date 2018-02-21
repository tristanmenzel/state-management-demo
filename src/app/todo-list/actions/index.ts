import {TodoItem, TodoState} from '../state/todo-state';
import {TodoService} from '../services/todo.service';
import {WorkTracker} from 'ng2-loading-pane';
import * as uuid from 'uuid';

export declare type Action = (state: TodoState) => Promise<TodoState>;
export declare type Dispatcher = (action: Action, tracker?: WorkTracker) => Promise<void>;


export const InitState = (todoService: TodoService): Action => async (): Promise<TodoState> => {
  return {
    items: await todoService.getTodoItems(),
    newItem: {
      id: uuid.v4(),
      text: '',
      done: false
    },
    toastAlert: null
  };
};


export const SetNewItemText = (text: string): Action => async (state: TodoState): Promise<TodoState> => {
  return {
    ...state,
    newItem: {
      ...state.newItem,
      text
    }
  };
};

export const AddNewItem = (item: TodoItem, todoService: TodoService): Action => async (state: TodoState): Promise<TodoState> => {

  await todoService.addTodoItem(item);

  return {
    ...state,
    items: [
      ...state.items,
      item
    ],
    newItem: {
      id: uuid.v4(),
      text: '',
      done: false
    },
    toastAlert: {
      type: 'success',
      body: 'New todo item added'
    }
  };
};


export const SetItemDone = (item: TodoItem, done: boolean, todoService: TodoService): Action =>
  async (state: TodoState): Promise<TodoState> => {
    await todoService.setTodoItemDone(item.id, done);

    return {
      ...state,
      items: state.items
        .map(i => i.id === item.id ? {...i, done} : i),
      toastAlert: {
        type: done ? 'info' : 'warning',
        body: `Marked item '${item.text}' as ${done ? '' : 'not '}done`
      }
    };

  };




