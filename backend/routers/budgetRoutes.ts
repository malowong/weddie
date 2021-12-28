import express from "express";
import { knex } from "../app";
import { BudgetController } from "../controllers/BudgetController";
import { BudgetService } from "../services/BudgetService";
import { asyncWrapper } from "../utils/asyncWrapper";
import { connectToMongo } from "../services/mongoService";

const budgetService = new BudgetService(knex);
const budgetController = new BudgetController(budgetService);

export const budgetRoutes = express.Router();

budgetRoutes.get("/list", asyncWrapper(budgetController.getExpenditureList));
connectToMongo()
  .then(() => {
    budgetRoutes.post("/update", asyncWrapper(budgetController.updateExpenditureList));
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
budgetRoutes.post("/item", asyncWrapper(budgetController.addBudgetItem));
