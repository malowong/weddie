import express from "express";
import { knex } from "../app";
import { LogisticsController } from "../controllers/LogisticsController";
import { LogisticsService } from "../services/LogisticsService";
import { asyncWrapper } from "../utils/asyncWrapper";

const logisticsService = new LogisticsService(knex);
const logisticsController = new LogisticsController(logisticsService);

export const logisticsRoutes = express.Router();

logisticsRoutes.get("/list", asyncWrapper(logisticsController.getLogisticsList));
