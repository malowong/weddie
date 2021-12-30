import express from "express";
import { knex } from "../app";
import { asyncWrapper } from "../utils/asyncWrapper";
import { TodoService } from "../services/TodoService";
import { TodoController } from "../controllers/TodoController";

const todoService = new TodoService(knex);
const todoController = new TodoController(todoService);

export const todoRoutes = express.Router();

todoRoutes.get("/list/:id", asyncWrapper(todoController.getTodoList));
todoRoutes.post("/item", asyncWrapper(todoController.addTodoItem));
