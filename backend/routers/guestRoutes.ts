import express from "express";
import { knex } from "../app";
import { asyncWrapper } from "../utils/asyncWrapper";
import { GuestController } from "../controllers/GuestController";
import { GuestService } from "../services/GuestService";

const guestService = new GuestService(knex);
const guestController = new GuestController(guestService);

export const guestRoutes = express.Router();

guestRoutes.get("/list", asyncWrapper(guestController.getGuestList));
