import express from "express";
import { budgetRoutes } from "./routers/budgetRoutes";
import { guestRoutes } from "./routers/guestRoutes";
import { logisticsRoutes } from "./routers/logisticsRoutes";
import { todoRoutes } from "./routers/todoRoutes";
import { userRoutes } from "./routers/userRoutes";

export const routes = express.Router();

routes.use("/users", userRoutes);
routes.use("/logistics", logisticsRoutes);
routes.use("/guest", guestRoutes);
routes.use("/budget", budgetRoutes);
routes.use("/todo", todoRoutes);
