import {Injectable} from '@angular/core';
import {TodoItem} from '../state/todo-state';
import * as uuid from 'uuid';

@Injectable()
export class TodoService {

  items: TodoItem[] = [
    {
      id: uuid.v4(),
      text: 'Clean your teeth',
      done: true
    },
    {
      id: uuid.v4(),
      text: 'Brush your hair',
      done: false
    }
  ];

  constructor() {
  }

  getTodoItems(): Promise<TodoItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.items);
      }, 1600);
    });
  }

  addTodoItem(item: TodoItem): Promise<void> {

    return new Promise((resolve) => {
      setTimeout(() => {
        this.items = [...this.items, item];
        resolve();
      }, 800);
    });
  }

  setTodoItemDone(id: string, done: boolean): Promise<void> {

    return new Promise((resolve) => {
      setTimeout(() => {
        this.items = this.items
          .map(i => i.id === id ? {...i, done} : i);
        resolve();
      }, 800);
    });
  }
}
