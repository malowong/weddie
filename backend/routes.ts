import express from "express";
import { userRoutes } from "./routers/userRoutes";

export const routes = express.Router();

routes.use("/user", userRoutes);
