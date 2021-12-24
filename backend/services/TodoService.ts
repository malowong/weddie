import { Knex } from "knex";

export class TodoService {
  constructor(private knex: Knex) {}

  getTodoList = async (eventID: number) => {
    const todoList = "TODO";

    this.knex.raw('SELECT * FROM user_info')


    return todoList;
  };
}
