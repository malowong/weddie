import { BudgetService } from "../services/BudgetService";
import { Request, Response } from "express";

export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  getExpenditureList = async (req: Request, res: Response) => {
    const expenditureList = await this.budgetService.getExpenditureList(1);

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

  addBudgetItem = async (req: Request, res: Response) => {
    const budgetItem = {
      wedding_event_id: req.body.eventId,
      budget_cat_id: req.body.categoryId,
      expenditure: req.body.expenditure,
      description: req.body.description,
    };

    await this.budgetService.addBudgetItem(budgetItem);

    res.json({ message: "success add budget item" });
  };
}
