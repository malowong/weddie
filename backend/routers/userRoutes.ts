import express from "express";
import { knex } from "../app";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { asyncWrapper } from "../utils/asyncWrapper";
import { isLoggedIn } from "../utils/guards";

export const userService = new UserService(knex);
const userController = new UserController(userService);

export const userRoutes = express.Router();

userRoutes.post("/signup", asyncWrapper(userController.signup));
userRoutes.post("/login", asyncWrapper(userController.login));
<<<<<<< HEAD
userRoutes.get("/", isLoggedIn, asyncWrapper(userController.getUser));
=======
userRoutes.get("/info", asyncWrapper(userController.getUserById));
>>>>>>> e168daf099a9836a025ebd4bff4c902e4c0b4a16
