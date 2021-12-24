export interface TodoState {
  id: number;
  itemName: string;
  dueDate: Date;
  remarks: string;
  status: boolean;
}

export interface ITodoState {
  todoList: TodoState[];
}
