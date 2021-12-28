import express from "express";
import { knex } from "../app";
import { EventController } from "../controllers/EventController";
import { EventService } from "../services/EventService";
import { asyncWrapper } from "../utils/asyncWrapper";

<<<<<<< HEAD
const eventService = new EventService(knex);
=======
export const eventService = new EventService(knex);
>>>>>>> 5bff3447830f7162021f9e584d914b4d4316cf08
const eventController = new EventController(eventService);

export const eventRoutes = express.Router();

<<<<<<< HEAD
eventRoutes.get("/list", asyncWrapper(eventController.getEventListByUserId));
=======
eventRoutes.post("/", asyncWrapper(eventController.createEvent));
eventRoutes.get("/", asyncWrapper(eventController.getEvent));

>>>>>>> 5bff3447830f7162021f9e584d914b4d4316cf08
