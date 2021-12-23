export enum Status {
  Pending = 'Pending',
  Completed = 'Completed',
}

export interface TodoState {
  id: number;
  itemName: string;
  dueDate: Date;
  remarks: string;
  status: Status;
}

export interface ITodoState {
  todoList: TodoState[];
}
