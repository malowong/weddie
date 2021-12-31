import express from "express";
import { knex } from "../app";
import { BudgetController } from "../controllers/BudgetController";
import { BudgetService } from "../services/BudgetService";
import { asyncWrapper } from "../utils/asyncWrapper";

const budgetService = new BudgetService(knex);
const budgetController = new BudgetController(budgetService);

export const budgetRoutes = express.Router();

budgetRoutes.get("/list", asyncWrapper(budgetController.getExpenditureList));
// budgetRoutes.post("/update", asyncWrapper(budgetController.updateExpenditureList));
budgetRoutes.post("/item", asyncWrapper(budgetController.addBudgetItem));
