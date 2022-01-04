import express from "express";
import { knex } from "../app";
import { MessageController } from "../controllers/MessageController";
import { MessageService } from "../services/MessageService";
import { asyncWrapper } from "../utils/asyncWrapper";

const messageService = new MessageService(knex);
const messageController = new MessageController(messageService);

export const messageRoutes = express.Router();

messageRoutes.get("/list/:id", asyncWrapper(messageController.getMessageList));
messageRoutes.post("/", asyncWrapper(messageController.addMessage));
