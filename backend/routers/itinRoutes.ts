import express from "express";
import { knex } from "../app";
import { asyncWrapper } from "../utils/asyncWrapper";
import { ItinService } from "../services/ItinService";
import { ItinController } from "../controllers/ItinController";
// import { isLoggedIn } from "../utils/guards";

const itinService = new ItinService(knex);
const itinController = new ItinController(itinService);

export const itinRoutes = express.Router();

itinRoutes.get("/", asyncWrapper(itinController.getItinList));
