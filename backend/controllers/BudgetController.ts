import { BudgetService } from "../services/BudgetService";
import { Request, Response } from "express";

export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  getExpenditureList = async (req: Request, res: Response) => {
    const expenditureList = await this.budgetService.getExpenditureList();

    res.json({ expenditureList });
  };
}
