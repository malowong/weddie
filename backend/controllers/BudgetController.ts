import { BudgetService } from "../services/BudgetService";
import { Request, Response } from "express";

export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  getExpenditureList = async (req: Request, res: Response) => {
    const expenditureList = await this.budgetService.getExpenditureList();

    res.json({ expenditureList });
  };

  updateExpenditureList = async (req: Request, res: Response) => {
    const updatedExpenditureList = await this.budgetService.updateExpenditureList(
      req.body.budgetListId,
      req.body.description,
      req.body.expenditure,
      req.body.paymentDate,
      req.body.amendDate
    );

    res.json(updatedExpenditureList);
  };
}
