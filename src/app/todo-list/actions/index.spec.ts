import {AddNewItem, InitState, SetNewItemText} from './index';
import {TodoService} from '../services/todo.service';
import {TodoState} from '../state/todo-state';

describe('Todo state', () => {

  describe('When initializing the state', () => {
    it('Should have two items', async () => {
      const state = await InitState(new TodoService())(null as any);

      expect(state.items.length).toBe(2);
    });
  });

  describe('When adding a new item', () => {
    let state: TodoState;
    beforeAll(async () => {
      const todoService = new TodoService();

      state = await InitState(todoService)(state);
      state = await SetNewItemText('Have a great day')(state);
      state = await AddNewItem(state.newItem, todoService)(state);
    });

    it('Should have three items', () => {
      expect(state.items.length).toBe(3);
    });
    it('Should have a toast notification', () => {
      expect(state.toastAlert).not.toBeNull();
      if (state.toastAlert) {
        expect(state.toastAlert.type).toBe('success');
        expect(state.toastAlert.body).toBe('New todo item added');
        expect(state.toastAlert.title).toBeUndefined();
      }
    });
    it('Should reset the newItem field', () => {
      expect(state.newItem.text).toBe('');
      expect(state.newItem.done).toBe(false);
    });
  });
});

