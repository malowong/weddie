import express from "express";
import { logisticsRoutes } from "./routers/logisticsRoutes";
import { userRoutes } from "./routers/userRoutes";

export const routes = express.Router();

routes.use("/user", userRoutes);
routes.use("/logistics", logisticsRoutes);
