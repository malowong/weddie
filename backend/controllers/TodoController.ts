import { TodoService } from "../services/TodoService";
import { Request, Response } from "express";

export class TodoController {
  constructor(private todoService: TodoService) {}

  getTodoList = async (req: Request, res: Response) => {
    const eventID = 1;

    const todoList = await this.todoService.getTodoList(eventID);

    res.json({ todoList });
  };
}
