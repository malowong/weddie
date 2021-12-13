import express from "express";
import { knex } from "../app";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { asyncWrapper } from "../utils/asyncWrapper";

const userService = new UserService(knex);
const userController = new UserController(userService);

export const userRoutes = express.Router();

userRoutes.post("/login", asyncWrapper(userController.login));
