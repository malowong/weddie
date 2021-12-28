import { Knex } from "knex";
import { tables } from "../utils/tables";

export class TodoService {
  constructor(private knex: Knex) {}

  getTodoList = async (eventID: number) => {
    const todoList = this.knex.select("*").from(tables.WEDDING_TO_DO_LIST).where("wedding_event_id", eventID);

    return todoList;
  };
}
