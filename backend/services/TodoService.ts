import { Knex } from "knex";

export class TodoService {
  constructor(private knex: Knex) {}

  getTodoList = async (eventID: number) => {
    const todoList = "TODO";

    return todoList;
  };
}
