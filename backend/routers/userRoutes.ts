import express from "express";
import { knex } from "../app";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { asyncWrapper } from "../utils/asyncWrapper";

export const userService = new UserService(knex);
const userController = new UserController(userService);

export const userRoutes = express.Router();

userRoutes.post("/", asyncWrapper(userController.signup));
userRoutes.post("/login", asyncWrapper(userController.login));
userRoutes.get("/info", asyncWrapper(userController.getUserById));
