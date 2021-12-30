import { Knex } from "knex";
import { tables } from "../utils/tables";
import { TodoItem } from "./models";

export class TodoService {
  constructor(private knex: Knex) {}

  getTodoList = async (eventId: number) => {
    const todoList = this.knex.select("*").from(tables.WEDDING_TO_DO_LIST).where("wedding_event_id", eventId);

    return todoList;
  };

  addTodoItem = async (todoItemData: TodoItem) => {
    await this.knex(tables.WEDDING_TO_DO_LIST).insert(todoItemData);
    return;
  };
}
