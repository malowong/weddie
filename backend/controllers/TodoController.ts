import { TodoService } from "../services/TodoService";
import { Request, Response } from "express";

export class TodoController {
  constructor(private todoService: TodoService) {}

  getTodoList = async (req: Request, res: Response) => {
    const eventId = parseInt(req.params.id);

    const todoList = await this.todoService.getTodoList(eventId);

    res.json({ todoList });
  };

  addTodoItem = async (req: Request, res: Response) => {
    const todoItemData = {
      wedding_event_id: req.body.wedding_event_id,
      to_do_date: req.body.dueDate,
      to_do_item: req.body.itemName,
      to_do_remarks: req.body.remarks,
    };

    await this.todoService.addTodoItem(todoItemData);

    res.json({ message: "successful add" });
  };
}
