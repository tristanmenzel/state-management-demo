
export interface TodoState {
  items: TodoItem[];
  newItem: TodoItem;
  toastAlert: ToastAlert | null;
}

export interface ToastAlert {
  type: 'warning' | 'success' | 'error' | 'info';
  title?: string | undefined;
  body: string;
}

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}



